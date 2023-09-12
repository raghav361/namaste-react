import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Header from "../Header";
import appStore from "../../utils/appStore";

it("Should render Header Component with a Login button", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const loginButton = screen.getByRole("button", { name: "Login" });

	// const loginButton = screen.getByText("Login");

	expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a cart items of zero", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const cartItems = screen.getByText("Cart (0)");

	expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a cart", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const cartItems = screen.getByText(/Cart/);

	expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout on click", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const loginButton = screen.getByRole("button", { name: "Login" });

	fireEvent.click(loginButton);

	const logoutButton = screen.getByRole("button", { name: "Logout" });

	expect(logoutButton).toBeInTheDocument();
});
