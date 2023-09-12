import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Body from "../Body";
import MOCK_DATA from "../mocks/restaurantListData.json";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MOCK_DATA);
		},
	});
});

it("should search restaurant list for Burger search input", async () => {
	await act(async () =>
		render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		)
	);

	const cardsBeforeSearch = screen.getAllByTestId("resCard");

	expect(cardsBeforeSearch.length).toBe(9);

	const searchButton = screen.getByRole("button", { name: "Search" });

	const searchInput = screen.getByTestId("searchInput");

	fireEvent.change(searchInput, { target: { value: "burger" } });

	fireEvent.click(searchButton);

	const cardsAfterSearch = screen.getAllByTestId("resCard");

	expect(cardsAfterSearch.length).toBe(2);
});

it("should filter Top-Rated Restaurants", async () => {
	await act(async () =>
		render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		)
	);

	const cardsBeforeFilter = screen.getAllByTestId("resCard");

	expect(cardsBeforeFilter.length).toBe(9);

	const topRatedButton = screen.getByRole("button", {
		name: "Top-Rated Restaurants",
	});

	fireEvent.click(topRatedButton);

	const cardsAfterFilter = screen.getAllByTestId("resCard");

	expect(cardsAfterFilter.length).toBe(6);
});
