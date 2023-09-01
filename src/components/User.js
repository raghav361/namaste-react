import { useState } from "react";

const User = ({ name }) => {
	const [count] = useState(0);
	const [count1] = useState(1);

	return (
		<div className="user-card">
			<h2>Name: {name}</h2>
			<h3>Location: Bengaluru</h3>
			<h4>Contact: @raghav</h4>
			<h5>{count}</h5>
			<h5>{count1}</h5>
		</div>
	);
};

export default User;
