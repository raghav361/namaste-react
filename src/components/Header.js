import { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
	const [buttonName, setButtonName] = useState("Login");

	const onlineStatus = useOnlineStatus();

	return (
		<div className="flex justify-between bg-purple-300 shadow-lg sm:bg-blue-400">
			<div className="logo-container">
				<img className="w-24" src={LOGO_URL} />
			</div>
			<div className="flex items-center">
				<ul className="flex p-4 m-4">
					<li className="px-4">Online: {onlineStatus ? "✅" : "🔴"}</li>
					<li className="px-4">
						<Link to="/">Home</Link>
					</li>
					<li className="px-4">
						<Link to="/about">About Us</Link>
					</li>
					<li className="px-4">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="px-4">
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className="px-4">Cart</li>
					<button
						className="px-4"
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
