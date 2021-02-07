import React from "react"
import "./Feed.css"
import TweetBox from "../tweetBox"
import Post from "../post"

function Feed() {
	return (
		<div className="feed">
			<div className="feed__header">
				<h2>Home</h2>
			</div>
			<TweetBox />
			<Post
				displayName="Elon Musk"
				username="elonmusk"
				verified
				image="https://pbs.twimg.com/card_img/1303709427241975808/pQ-Su8e9?format=jpg&name=small"
				avatar="https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_400x400.jpg"
				text="Tesla Model S & X have hospital-grade (HEPA) air filters. 3 & Y are really good too. This has a big effect on health."
			/>
			<Post
				displayName="Sam Jones"
				username="samjones"
				text="Everyone think programming is only about writting line of codes, there is also the logic behind the lines you know."
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ58t7GAo-Q8J4FEaiCq8IpYzn1HlqP-wXNBw&usqp=CAU"
				avatar="https://i.pinimg.com/originals/89/5b/57/895b5749ffc6a3ec41abb153b1cab66b.jpg"
			/>
			<Post
				displayName="Elon Musk"
				username="elonmusk"
				verified
				avatar="https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_400x400.jpg"
				text="Use signal it's more secure than Whatsapp."
			/>
			<Post
				displayName="Sam Jones"
				username="samjones"
				text="I can't imagine living a day without doing something related to programming XD"
				avatar="https://i.pinimg.com/originals/89/5b/57/895b5749ffc6a3ec41abb153b1cab66b.jpg"
			/>
			<Post
				displayName="Sam Jones"
				username="samjones"
				text="It's finally deployed online it's on (https://twitter-clone-10b67.web.app) check it out ;)"
				avatar="https://i.pinimg.com/originals/89/5b/57/895b5749ffc6a3ec41abb153b1cab66b.jpg"
			/>
		</div>
	)
}

export default Feed
