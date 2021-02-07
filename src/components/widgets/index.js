import React from "react"
import "./Widgets.css"
// import {
// 	TwitterTimelineEmbed,
// 	TwitterShareButton,
// 	TwitterTweetEmbed,
// } from "react-twitter-embed"
import SearchIcon from "@material-ui/icons/Search"
import SettingsIcon from "@material-ui/icons/Settings"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
// import { Button } from "@material-ui/core"

function Widgets() {
	return (
		<div className="widgets">
			<div className="widgets__input">
				<SearchIcon className="widgets__searchIcon" />
				<input placeholder="Search Twitter" type="text" />
			</div>

			<div className="widgets__widgetContainer">
				{/* <h2>What's happening</h2> */}
				<div className="widgets__trends">
					<div className="widgets__trendsHeader">
						<h2>Trends for you</h2>
						<SettingsIcon />
					</div>
					<hr />
					<div className="widgets__trendsBody">
						<p>
							<span>Politics . Trending</span>
							<ExpandMoreIcon />
						</p>
						<span>Sudan</span>
						<small>16.4k Tweets</small>
					</div>
					<hr />
					<a href="/" className="widgets__trendsFooter">
						Show more
					</a>
				</div>
			</div>
		</div>
	)
}

export default Widgets
