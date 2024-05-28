import axios from "axios";
import { BASE_API, LOCAL_STORAGE_USER } from "../../utils/http-common";
import { setTokenCookie, removeTokenCookie } from "../../utils/HandleCookie";
import { setLocalStorage, removeLocalStorage } from "../../utils/LocalStorage";

const LOGIN_URL = BASE_API + "/user/login";
const REGISTER_URL = BASE_API + "/user/register";

export const LoginHandler = async (userData) => {
	try {
		const res = await axios.post(LOGIN_URL, userData);
		console.log(res);
		if (res.data.success === true) {
			const userData = {
				email: res.data.data.email,
				username: res.data.data.username,
				role: res.data.data.role,
			};
			const token = res.data.data.token;
			setTokenCookie(token);
			setLocalStorage(LOCAL_STORAGE_USER, userData);
			return { success: true };
		} else if (res.data.success === false) {
			return { success: false };
		}
	} catch (error) {
		console.error(error.response);
		return { error: "Failed to fetch data" };
	}
};

export const RegisterHandler = async (userData) => {
	try {
		const res = await axios.post(REGISTER_URL, userData);
		console.log(res);

		if (res.data.success === true) {
			return { res: res.data.message, success: true };
		} else {
			return { res: res.data.message, success: false };
		}
	} catch (error) {
		console.error(error.response.data);
		return { error: "Failed to fetch data" };
	}
};

export const Logout = async () => {
	try {
		removeLocalStorage(LOCAL_STORAGE_USER);
		removeTokenCookie();
	} catch (error) {
		console.error(error);
	}
};
