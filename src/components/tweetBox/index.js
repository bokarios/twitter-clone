import React, { useState } from "react"
import "./TweetBox.css"
import { Button, Avatar } from "@material-ui/core"

function TweetBox() {
	const { tweet, setTweet } = useState("")

	const onTweet = (e) => {
		e.preventDefault()
		console.log("Tweet ", tweet)
	}

	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					<Avatar src="https://pbs.twimg.com/media/EAl0t_nXsAAk8ad?format=jpg&name=small" />
					<input
						placeholder="What's happening?"
						type="text"
					/>
					{/* <textarea placeholder="What's happening?"></textarea> */}
					{/* <div className="tweetBox__editableInput" contentEditable="true">
						What's happening
					</div> */}
				</div>
				<Button
					type="submit"
					className="tweetBox__button"
					onClick={(e) => onTweet(e)}
				>
					Tweet
				</Button>
			</form>
		</div>
	)
}

export default TweetBox
