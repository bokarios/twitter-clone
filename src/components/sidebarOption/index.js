import React from "react"
import "./SidebarOption.css"

function SidebarOption({ active, text, Icon }) {
	return (
		<div className={`sidebarOption ${active && "sidebarOption--active"}`}>
			<span className="sidebarOption__wrapper">
				<Icon />
				<h2>{text}</h2>
			</span>
		</div>
	)
}

export default SidebarOption
