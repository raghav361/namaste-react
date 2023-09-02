import { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
	const [buttonName, setButtonName] = useState("Login");

	const onlineStatus = useOnlineStatus();

	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL} />
			</div>
			<div className="nav-items">
				<ul>
					<li>Online: {onlineStatus ? "✅" : "🔴"}</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>
						<Link to="/grocery">Grocery</Link>
					</li>
					<li>Cart</li>
					<button
						className="login"
						onClick={() => {
							buttonName === "Login"
								? setButtonName("Logout")
								: setButtonName("Login");
						}}
					>
						{buttonName}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
