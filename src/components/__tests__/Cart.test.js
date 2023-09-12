import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/restaurantMenu.json";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => Promise.resolve(MOCK_DATA),
	});
});

it("should load Restaurant Menu Component", async () => {
	await act(async () =>
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
					<RestaurantMenu />
					<Cart />
				</Provider>
			</BrowserRouter>
		)
	);

	const accordionHeader = screen.getByText("DOUBLE DOWN (5)");

	fireEvent.click(accordionHeader);

	const foodItems = screen.getAllByTestId("items");

	expect(foodItems.length).toBe(5);

	const allAddButtons = screen.getAllByRole("button", { name: "Add" });

	fireEvent.click(allAddButtons[0]);

	expect(screen.getByText("Cart (1)")).toBeInTheDocument();

	fireEvent.click(allAddButtons[1]);

	expect(screen.getByText("Cart (2)")).toBeInTheDocument();

	expect(screen.getAllByTestId("items").length).toBe(7);

	fireEvent.click(screen.getByRole("button", { name: "Empty Cart" }));

	expect(screen.getAllByTestId("items").length).toBe(5);

	expect(screen.getByText("Cart is Empty.")).toBeInTheDocument();
});
