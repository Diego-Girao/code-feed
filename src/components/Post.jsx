import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src="https://github.com/diego-girao.png" />
					<div className={styles.authorInfo}>
						<strong>Joe Doe</strong>
						<span>Dev Front-end</span>
					</div>
				</div>

				<time title="18 de Fevereiro às 13:25h" dateTime="2023-02-18 13:25:42">
					Publicado há 2h
				</time>
			</header>

			<div className={styles.content}>
				<p>Faaala 👋</p>
				<p>
					Acabei de subir mais um projeto no meu repo. É um projeto que fiz
					usando o CTD. O nome do projeto é BankApp 🚀
				</p>
				<p>
					👉 <a href="">joe.dev/BankApp</a>
				</p>
				<p>
					<a href="">#novoprojeto</a> <a href="">#code</a> <a href="">#ctd</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe um feedback</strong>

				<textarea placeholder="Deixe um comentário" />

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
			</div>
		</article>
	)
}
