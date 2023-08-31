import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
	const [restaurantInfo, setRestaurantInfo] = useState(null);

	const { resId } = useParams();

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(MENU_API + resId);

		const json = await data.json();

		setRestaurantInfo(json.data);
	};

	if (restaurantInfo === null) return <Shimmer />;

	const { name, cuisines, costForTwoMessage } =
		restaurantInfo?.cards[0]?.card?.card?.info;

	const { itemCards } =
		restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
			?.card;

	return (
		<div className="menu">
			<h1>{name}</h1>
			<h2>{cuisines.join(", ")}</h2>
			<h3>{costForTwoMessage}</h3>
			<ul>
				{itemCards.map((item) => (
					<li key={item.card.info.id}>
						{item.card.info.name} - {"Rs. "}
						{item.card.info.price / 100 || item.card.info.defaultPrice}
					</li>
				))}
			</ul>
		</div>
	);
};

export default RestaurantMenu;
