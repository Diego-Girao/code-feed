import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"

import "./global.css"

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/diego-girao.png",
			name: "Diego Girao",
			role: "Dev Front-end",
		},
		content: [
			{ type: "paragraph", content: "Faaala 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu repo. É um projeto que fiz usando o CTD. O nome do projeto é BankApp 🚀",
			},
			{ type: "link", content: "joe.dev/BankApp" },
		],
		publishedAt: new Date("2023-02-20 07:01:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/pedromarins.png",
			name: "Pedro Marins",
			role: "Mentor @ConquisteSuaVaga",
		},
		content: [
			{ type: "paragraph", content: "Faaala 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu repo. É um projeto que fiz usando o CTD. O nome do projeto é BankApp 🚀",
			},
			{ type: "link", content: "joe.dev/BankApp" },
		],
		publishedAt: new Date("2023-02-19 09:35:06"),
	},
]

export function App() {
	return (
		<>
			<div>
				<Header />
				<div className={styles.wrapper}>
					<Sidebar />
					<main>
						{posts.map((post) => {
							return (
								<Post
									key={post.id}
									author={post.author}
									content={post.content}
									publishedAt={post.publishedAt}
								/>
							)
						})}
					</main>
				</div>
			</div>
		</>
	)
}
