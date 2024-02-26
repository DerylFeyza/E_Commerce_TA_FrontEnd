import axios from "axios";
import { BASE_API } from "../utils/http-common";
import { getTokenCookie } from "../utils/HandleCookie";

export const addToCart = async (values) => {
	const TRANSACTION_URL = `${BASE_API}/transaksi`;
	const token = getTokenCookie();
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	try {
		console.log("sending . ...");
		const response = await axios.post(TRANSACTION_URL, values, config);
		console.log("request sent");

		if (response.data.success === true) {
			return {
				status: "success",
				data: response.data.data,
			};
		} else {
			return {
				status: "error",
				message: "Failed to add product to cart",
			};
		}
	} catch (error) {
		if (error.response && error.response.data && error.response.data.message) {
			return {
				status: "error",
				message: error.response.data.message,
			};
		} else {
			return {
				status: "error",
				message: "An error occurred while processing your request.",
			};
		}
	}
};