import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment({ content, deleteComment }) {
	const [likeCount, setLikeCount] = useState(0)

	function handleLikeComment() {
		setLikeCount(likeCount + 1)
	}

	function handleDeleteComment() {
		deleteComment(content)
	}

	return (
		<div className={styles.comment}>
			<Avatar
				hasBorder={false}
				src="https://github.com/diego-girao.png"
				alt=""
			/>
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Joe Doe</strong>
							<time
								title="18 de Fevereiro às 13:25h"
								dateTime="2023-02-18 13:25:42"
							>
								Há 2h atrás
							</time>
						</div>
						<button onClick={handleDeleteComment} title="Apagar comentário">
							<Trash size={20} />
						</button>
					</header>

					<p>{content}</p>
				</div>
				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	)
}
