import axios from "axios";
import { BASE_API, LOCAL_STORAGE_USER } from "../../utils/http-common";
import { setTokenCookie } from "../../utils/HandleCookie";
import { setLocalStorage } from "../../utils/LocalStorage";

export const LoginHandler = async (userData) => {
	const LOGIN_URL = BASE_API + "/user/login";
	try {
		const res = await axios.post(LOGIN_URL, userData);
		if (res.data.status === true) {
			const userData = {
				email: res.data.data.email,
				username: res.data.data.username,
				role: res.data.data.role,
			};
			const token = res.data.data.token;
			setTokenCookie(token);
			setLocalStorage(LOCAL_STORAGE_USER, userData);
			return { res: res.data.data, success: true };
		} else {
			return { res: res, success: false };
		}
	} catch (error) {
		console.error(error);
		return { error: "Failed to fetch data" };
	}
};
