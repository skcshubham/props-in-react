import React from "react";
import Comments from "./Comments";
import "./App.css";

let items = [
	{
		id: 1,
		name: "Shubham",
		comment:
			"Review/Comment: Lorem Ipsum is simply dummy text of the printing and typesetting industry. This is random review of users. Trying to learn props in ReactJS",
	},
	{
		id: 2,
		name: "Ram",
		comment:
			"Review/Comment: Lorem Ipsum is simply dummy text of the printing and typesetting industry. This is random review of users. Trying to learn props in ReactJS",
	},
	{
		id: 3,
		name: "Rahul",
		comment:
			"Review/Comment: Lorem Ipsum is simply dummy text of the printing and typesetting industry. This is random review of users. Trying to learn props in ReactJS",
	},
];

class App extends React.Component {
	render() {
		return (
			<section className="container">
				{items.map(function (user) {
					return (
						<Comments id={user.id} name={user.name} comment={user.comment} />
					);
				})}
			</section>
		);
	}
}

export default App;
