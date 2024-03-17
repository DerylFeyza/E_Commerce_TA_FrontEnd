import axios from "axios";
import { BASE_API } from "../utils/http-common";
import { getTokenCookie } from "../utils/HandleCookie";

const token = getTokenCookie();
const config = {
	headers: {
		Authorization: `Bearer ${token}`,
	},
};

const PRODUCT_URL = `${BASE_API}/produk`;

export const getPaginatedDataProduct = async (page) => {
	const URL = `${PRODUCT_URL}/?page=${page}`;
	try {
		const data = await axios.get(URL);
		const res = data.data;

		if (res.success === true) {
			return {
				status: "success",
				data: res.data,
			};
		} else {
			return { res: res, success: false };
		}
	} catch (err) {
		return {
			status: "error",
			message: err.response.data.message,
		};
	}
};

export const getProductById = async (ProductId) => {
	const URL = `${PRODUCT_URL}/${ProductId}`;
	try {
		const data = await axios.get(URL);
		const res = data.data;

		if (res.success === true) {
			return {
				status: "success",
				data: res.data,
			};
		}
	} catch (err) {
		return {
			status: "error",
			message: err.response.data.message,
		};
	}
};

export const findProduct = async (Keyword) => {
	const URL = `${PRODUCT_URL}/find`;
	try {
		const data = await axios.post(URL, { keyword: Keyword });
		const res = data.data;

		if (res.success === true) {
			return {
				status: "success",
				data: res.data,
			};
		}
	} catch (err) {
		return {
			status: "error",
			message: err.response.data.message,
		};
	}
};

export const addProduct = async (values) => {
	const ADD_URL = `${PRODUCT_URL}/add`;
	try {
		const data = await axios.post(ADD_URL, values, config);
		const res = data.data;

		if (res.success === true) {
			return {
				status: "success",
				data: res.data,
			};
		}
	} catch (error) {
		return {
			status: "error",
			message: error.response.data.message,
		};
	}
};

export const getMerchantProducts = async () => {
	const MERCHANT_PRODUCTS_URL = `${PRODUCT_URL}/merchant`;
	try {
		const data = await axios.get(MERCHANT_PRODUCTS_URL, config);
		const res = data.data;

		if (res.success === true) {
			return {
				status: "success",
				data: res.data,
			};
		}
	} catch (error) {
		return {
			status: "error",
			message: error.response.data.message,
		};
	}
};
