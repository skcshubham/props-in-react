import userEvent from "@testing-library/user-event";
import React from "react";

class Comments extends React.Component {
	render() {
		return (
			<section key={this.props.id}>
				<h3>{this.props.name}</h3>
				<p>{this.props.comment}</p>
			</section>
		);
	}
}

export default Comments;
