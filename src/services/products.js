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

export const imageFetcher = (foto) => {
	return `${PRODUCT_URL}/image/${foto}`;
};

export const getPaginatedDataProduct = async (page, limit) => {
	const productPerPage = limit ? limit : 20;
	const URL = `${PRODUCT_URL}/?page=${page}&limit=${productPerPage}`;
	try {
		const data = await axios.get(URL);
		const res = data.data;
		console.log(res);

		if (res.success === true) {
			return {
				status: "success",
				data: res.data,
				pagination: res.pagination,
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

export const getCheapestProducts = async () => {
	const URL = `${PRODUCT_URL}/cheapest`;
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
				additional_info: res.additional_info,
			};
		}
	} catch (err) {
		return {
			status: "error",
			message: err.response.data.message,
		};
	}
};

export const MerchantRetrieveProductDataById = async (ProductId) => {
	const URL = `${PRODUCT_URL}/data/${ProductId}`;
	try {
		const data = await axios.get(URL, config);
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

export const findProduct = async (Keyword, page) => {
	const URL = `${PRODUCT_URL}/find?page=${page}&limit=${50}`;
	try {
		const data = await axios.post(URL, { keyword: Keyword });
		const res = data.data;
		console.log(res);

		if (res.success === true) {
			return {
				status: "success",
				data: res.data,
				pagination: res.pagination,
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
		console.log(res);

		if (res.success === true) {
			return {
				success: true,
			};
		}
	} catch (error) {
		return {
			status: "error",
			message: error.response.data.message,
		};
	}
};

export const updateProduct = async (id, values) => {
	const UPDATE_URL = `${PRODUCT_URL}/update/${id}`;
	try {
		const data = await axios.put(UPDATE_URL, values, config);
		const res = data.data;
		if (res.success === true) {
			return {
				success: true,
				message: res.data,
			};
		}
	} catch (error) {
		return {
			status: "error",
			message: error.response.data.message,
		};
	}
};

export const deleteProduct = async (id) => {
	const DELETE_URL = `${PRODUCT_URL}/delete/${id}`;
	try {
		const data = await axios.delete(DELETE_URL, config);
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

export const getRecentPurchase = async () => {
	const PURCHASES_URL = `${PRODUCT_URL}/merchant/purchases`;
	try {
		const data = await axios.get(PURCHASES_URL, config);
		const res = data.data;

		if (res.success === true) {
			return {
				status: "success",
				data: res.purchases,
				products: res.details,
			};
		}
	} catch (error) {
		return {
			status: "error",
			message: error.response.data.message,
		};
	}
};

export const restockProduct = async (id, value) => {
	const RESTOCK_URL = `${PRODUCT_URL}/restock/${id}`;
	try {
		const data = await axios.post(RESTOCK_URL, value, config);
		const res = data.data;

		if (res.success === true) {
			return {
				status: "success",
				message: res.message,
			};
		}
	} catch (error) {
		return {
			status: "error",
			message: error.response.data.message,
		};
	}
};
