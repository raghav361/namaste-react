import { Component } from "react";

import UserClass from "./UserClass";

class About extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div>
				<h1>About</h1>
				<h2>This is Namaste React Course by Akshay Saini</h2>
				<UserClass name="Raghav S" location="Bengaluru" />
			</div>
		);
	}
}

export default About;
