import axios from "axios";
import { BASE_API } from "../utils/http-common";
import { getTokenCookie } from "../utils/HandleCookie";
import { setTokenCookie } from "../utils/HandleCookie";
import { setLocalStorage } from "../utils/LocalStorage";
import { LOCAL_STORAGE_USER } from "../utils/http-common";

const token = getTokenCookie();
const config = {
	headers: {
		Authorization: `Bearer ${token}`,
	},
};

const USER_URL = `${BASE_API}/user`;

export const userToMerchant = async (value) => {
	const USERTOMERCHANT_URL = `${USER_URL}/seller`;
	try {
		const data = await axios.put(USERTOMERCHANT_URL, value, config);
		const res = data.data;
		console.log(res.success);

		if (res.success === true) {
			const userData = {
				email: res.data.email,
				username: res.data.username,
				role: res.data.role,
			};
			const token = res.data.token;
			setTokenCookie(token);
			setLocalStorage(LOCAL_STORAGE_USER, userData);
			return {
				success: true,
			};
		} else if (res.success == false) {
			return {
				success: false,
				message: "password doesn't match",
			};
		}
	} catch (error) {
		return {
			status: "error",
			message: error.response,
		};
	}
};

export const getUserInfo = async () => {
	const USERINFO_URL = `${USER_URL}/info`;
	try {
		const data = await axios.get(USERINFO_URL, config);
		const res = data.data;
		if (res.success === true) {
			return {
				success: true,
				data: res.data,
			};
		}
	} catch (error) {
		return {
			success: false,
			message: error.response,
		};
	}
};

export const userRecharge = async (value) => {
	const recharge = { value: value };
	const RECHARGE_URL = `${USER_URL}/recharge`;
	try {
		const data = await axios.put(RECHARGE_URL, recharge, config);
		const res = data.data;
		console.log(value);
		if (res.success === true) {
			return {
				success: true,
				data: res.data,
			};
		}
	} catch (error) {
		return {
			success: false,
			message: error.response,
		};
	}
};
