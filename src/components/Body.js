import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { HOMEPAGE_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);

	const [filteredRestaurant, setFilteredRestaurant] = useState([]);

	const [searchText, setSearchText] = useState("");

	const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(HOMEPAGE_URL);

		const json = await data.json();

		// Optional Chaining
		setListOfRestaurants(
			json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setFilteredRestaurant(
			json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false) {
		return (
			<h1>Seems like you're OFFLINE. Please check your Internet Connection.</h1>
		);
	}

	const { loggedInUser, setUserName } = useContext(UserContext);

	// Conditional Rendering
	if (listOfRestaurants.length === 0) return <Shimmer />;

	return (
		<div className="body">
			<div className="flex">
				<div className="m-4 p-4">
					<input
						type="text"
						data-testid="searchInput"
						className="border border-solid border-black"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						className="px-4 py-2 bg-gray-300 m-4 rounded-lg"
						onClick={() => {
							const filteredRestaurant = listOfRestaurants.filter((res) =>
								res.info.name.toLowerCase().includes(searchText.toLowerCase())
							);
							setFilteredRestaurant(filteredRestaurant);
						}}
					>
						Search
					</button>
				</div>
				<div className="m-4 p-4 flex items-center">
					<button
						className="px-4 py-2 bg-gray-300 rounded-lg"
						onClick={() => {
							const filteredList = listOfRestaurants.filter(
								(res) => res.info.avgRating > 4
							);
							setFilteredRestaurant(filteredList);
						}}
					>
						Top-Rated Restaurants
					</button>
				</div>
				<div className="m-4 p-4 flex items-center">
					<label className="m-2">UserName</label>
					<input
						className="border border-black p-2"
						value={loggedInUser}
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
			</div>
			<div className="flex flex-wrap">
				{filteredRestaurant.map((restaurant) => (
					<Link
						key={restaurant.info.id}
						to={"/restaurants/" + restaurant?.info.id}
					>
						{restaurant?.info.promoted ? (
							<RestaurantCardPromoted resData={restaurant?.info} />
						) : (
							<RestaurantCard resData={restaurant?.info} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
