import axios from "axios";
import { BASE_API } from "../utils/http-common";
import { getTokenCookie } from "../utils/HandleCookie";

const token = getTokenCookie();
const config = {
	headers: {
		Authorization: `Bearer ${token}`,
	},
};

const CART_URL = `${BASE_API}/cart`;

export const getCartOnDraft = async () => {
	try {
		const data = await axios.get(CART_URL, config);
		const res = data.data;

		if (res.success === true) {
			return {
				success: true,
				cartInfo: res.cart,
				data: res.data,
				products: res.products,
			};
		} else {
			return { res: res, success: false };
		}
	} catch (error) {
		return {
			status: "error",
			message: error.response.data.message,
		};
	}
};
