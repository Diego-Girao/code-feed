import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { useState } from "react"

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post({ author, publishedAt, content }) {
	const [comments, setComments] = useState([])
	const [newCommentText, setNewCommentText] = useState("")

	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' LLL 'às' HH:mm'h'",
		{
			locale: ptBR,
		}
	)

	const publishedDateToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	})

	function handleCreateNewComment() {
		event.preventDefault()

		setComments([...comments, newCommentText])
		setNewCommentText("")
	}

	function handleNewCommentChange() {
		setNewCommentText(event.target.value)
	}

	function handleNewCommentInvalid() {
		event.target.setCustomValidity("")
		event.target.setCustomValidity("Este campo é orbigatório !")
	}

	function deleteComment(commentToDelete) {
		const commentsWhitoutDeletedOne = comments.filter((comment) => {
			return comment !== commentToDelete
		})
		setComments(commentsWhitoutDeletedOne)
	}

	const isNewCommentEmpty = newCommentText.length === 0

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time
					title={publishedDateFormatted}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateToNow}
				</time>
			</header>

			<div className={styles.content}></div>
			{content.map((line) => {
				if (line.type === "paragraph") {
					return <p key={line.content}>{line.content}</p>
				} else if (line.type === "link") {
					return (
						<p key={line.content}>
							<a href="#">{line.content}</a>
						</p>
					)
				}
			})}

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe um feedback</strong>

				<textarea
					placeholder="Deixe um comentário"
					name="comment"
					value={newCommentText}
					onChange={handleNewCommentChange}
					onInvalid={handleNewCommentInvalid}
					required
				/>

				<footer>
					<button type="submit" disabled={isNewCommentEmpty}>
						Publicar
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => {
					return (
						<Comment
							key={comment}
							content={comment}
							deleteComment={deleteComment}
						/>
					)
				})}
			</div>
		</article>
	)
}
