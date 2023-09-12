import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
	const { resData } = props;

	const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
		resData;

	return (
		<div
			data-testid="resCard"
			className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-400"
		>
			<img
				className="rounded-lg"
				alt="Logo of the restaurant"
				src={CDN_URL + cloudinaryImageId}
			/>
			<h3 className="font-bold py-4 text-lg">{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRating}⭐</h4>
			<h4>{costForTwo}</h4>
			<h4>{sla?.slaString}</h4>
		</div>
	);
};

// Higher Order Component
//INPUT - RestaurantCard => OUTPUT - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<label className="absolute bg-black text-white m-2 p-2 rounded-lg">
					Promoted
				</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
