import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);

	const [filteredRestaurant, setFilteredRestaurant] = useState([]);

	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0222936&lng=77.7132065&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);

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

	// Conditional Rendering
	if (listOfRestaurants.length === 0) return <Shimmer />;

	return (
		<div className="body">
			<div className="flex">
				<div className="m-4 p-4">
					<input
						type="text"
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
			</div>
			<div className="flex flex-wrap">
				{filteredRestaurant.map((restaurant) => (
					<Link
						key={restaurant.info.id}
						to={"/restaurants/" + restaurant.info.id}
					>
						<RestaurantCard resData={restaurant} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
