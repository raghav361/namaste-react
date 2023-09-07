import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
	const [buttonName, setButtonName] = useState("Login");

	const onlineStatus = useOnlineStatus();

	const { loggedInUser } = useContext(UserContext);

	// Subscribing to the store using a Selector
	const cartItems = useSelector((store) => store.cart.items);
	console.log(cartItems);

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
					<li className="px-4 font-bold">
						<Link to="/cart">Cart ({cartItems.length})</Link>
					</li>
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
					<li className="px-4 font-bold">{loggedInUser}</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
