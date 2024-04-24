import axios from "axios";
import { BASE_API } from "../utils/http-common";

export const getPaginatedDataProduct = async (page) => {
	console.log("error")
	const URL = `${BASE_API}/produk/?page=${page}`;
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
	const URL = `${BASE_API}/produk/${ProductId}`;
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
	const URL = `${BASE_API}/produk/find`;
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
