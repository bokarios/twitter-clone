import React from "react"
import "./App.css"
import Sidebar from "./components/sidebar"
import Feed from "./components/feed"
import Widgets from "./components/widgets"

function App() {
	return (
		<div className="app">
			<Sidebar />
			<Feed />
			<Widgets />
		</div>
	)
}

export default App
