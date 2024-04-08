import axios from "axios";
import { BASE_API } from "../utils/http-common";
import { getTokenCookie } from "../utils/HandleCookie";

const token = getTokenCookie();
const config = {
	headers: {
		Authorization: `Bearer ${token}`,
	},
};

const ADDRESS_URL = `${BASE_API}/address`;

export const addAddress = async (values) => {
	try {
		const data = await axios.post(ADDRESS_URL, values, config);
		const res = data.data;
		console.log(res);
		if (res.success === true) {
			return {
				success: true,
			};
		} else {
			return {
				success: false,
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

export const getUserAddress = async () => {
	const GET_URL = `${ADDRESS_URL}/user`;
	try {
		const data = await axios.get(GET_URL, config);
		const res = data.data;
		if (res.success === true) {
			return {
				data: res.data,
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

export const updateAddress = async (id, values) => {
	const UPDATE_URL = `${ADDRESS_URL}/${id}`;
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

export const deleteAddress = async (id) => {
	const DELETE_URL = `${ADDRESS_URL}/${id}`;
	try {
		const data = await axios.delete(DELETE_URL, config);
		const res = data.data;
		console.log(data);

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
