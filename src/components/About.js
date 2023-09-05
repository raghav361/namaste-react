import { Component } from "react";

import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
				<div>
					User :
					<UserContext.Consumer>
						{({ loggedInUser }) => (
							<h1 className="text-xl font-bold">{loggedInUser}</h1>
						)}
					</UserContext.Consumer>
				</div>
				<UserClass name="Raghav S" location="Bengaluru" />
			</div>
		);
	}
}

export default About;
