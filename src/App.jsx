import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from "./App.module.css"

import "./global.css"

export function App() {
	return (
		<div>
			<Header />
			{/* <Post
				author="Joe Doe"
				content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere aspernatur error, tempora sequi, temporibus possimus consequatur atque laudantium voluptatem consectetur iste itaque, minima ratione officia harum enim magnam dignissimos iure?"
			/>
			<Post
				author="Jane Doe"
				content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere aspernatur error, tempora sequi, temporibus possimus consequatur atque laudantium voluptatem consectetur iste itaque, minima ratione officia harum enim magnam dignissimos iure?"
			/> */}

			<div className={styles.wrapper}></div>
		</div>
	)
}