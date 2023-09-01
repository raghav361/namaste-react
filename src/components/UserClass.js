import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userInfo: {},
		};

		console.log("Constructor");
	}

	async componentDidMount() {
		const data = await fetch("https://api.github.com/users/raghav361");

		const json = await data.json();

		this.setState({
			userInfo: json,
		});
	}

	componentDidUpdate() {
		console.log("Component Did Update");
	}

	componentWillUnmount() {
		console.log("Component Will Unmount");
	}

	render() {
		const { name, login, avatar_url } = this.state.userInfo;

		console.log("Render");

		return (
			<div className="user-card">
				<img src={avatar_url} />
				<h3>Name: {name}</h3>
				<h4>Username: {login}</h4>
			</div>
		);
	}
}

export default UserClass;
