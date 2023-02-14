import { Post } from "./Post"

export function App() {
	return (
		<div>
			<Post
				author="Joe Doe"
				content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere aspernatur error, tempora sequi, temporibus possimus consequatur atque laudantium voluptatem consectetur iste itaque, minima ratione officia harum enim magnam dignissimos iure?"
			/>
			<Post
				author="Jane Doe"
				content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere aspernatur error, tempora sequi, temporibus possimus consequatur atque laudantium voluptatem consectetur iste itaque, minima ratione officia harum enim magnam dignissimos iure?"
			/>
		</div>
	)
}
