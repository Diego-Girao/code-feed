import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./Post"

import styles from "./App.module.css"

import "./global.css"

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post
						author="Joe Doe"
						content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere aspernatur error, tempora sequi, temporibus possimus consequatur atque laudantium voluptatem consectetur iste itaque, minima ratione officia harum enim magnam dignissimos iure?"
					/>
					<Post
						author="Jane Doe"
						content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere aspernatur error, tempora sequi, temporibus possimus consequatur atque laudantium voluptatem consectetur iste itaque, minima ratione officia harum enim magnam dignissimos iure?"
					/>
				</main>
			</div>
		</div>
	)
}
