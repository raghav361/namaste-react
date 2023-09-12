import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCardMock.json";

test("should render RestaurantCard component with props data", () => {
	render(<RestaurantCard resData={MOCK_DATA} />);

	const name = screen.getByText("Andhra Gunpowder");

	expect(name).toBeInTheDocument();
});
