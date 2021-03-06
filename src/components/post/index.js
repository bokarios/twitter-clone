import React from "react"
import "./Post.css"
import { Avatar } from "@material-ui/core"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from "@material-ui/icons/Repeat"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import PublishIcon from "@material-ui/icons/Publish"

function Post({ displayName, username, verified, text, image, avatar }) {
	return (
		<div className="post">
			<div className="post__avatar">
				<Avatar src={avatar} />
			</div>
			<div className="post__bodyContainer">
				<div className="post__body">
					<div className="post__header">
						<div className="post__headerText">
							<h3>
								{displayName}{" "}
								<span className="post__specialHeader">
									{verified && <VerifiedUserIcon className="post__badge" />}@
									{username}
								</span>
							</h3>
						</div>
						<div className="post__headerDescription">
							<p>{text}</p>
						</div>
					</div>
					{image && <img src={image} alt="" />}
				</div>
				<div className="post__footer">
					<div className="post__icon">
						<ChatBubbleOutlineIcon fontSize="small" />
						<span>12k</span>
					</div>
					<div className="post__icon">
						<RepeatIcon fontSize="small" />
						<span>1.5k</span>
					</div>
					<div className="post__icon">
						<FavoriteBorderIcon fontSize="small" />
						<span>800k</span>
					</div>
					<PublishIcon fontSize="small" />
				</div>
			</div>
		</div>
	)
}

export default Post
