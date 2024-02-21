import axios from "axios";
import { BASE_API } from "../../utils/http-common";
import { setTokenCookie } from "../../utils/HandleCookie";

export const LoginHandler = async (userData) => {
	const LOGIN_URL = BASE_API + "/user/login";
	try {
		const res = await axios.post(LOGIN_URL, userData);
		if (res.data.status === true) {
			const token = res.data.data.token;
			setTokenCookie(token);
			return { res: res.data.data, success: true };
		} else {
			return { res: res, success: false };
		}
	} catch (error) {
		console.error(error);
		return { error: "Failed to fetch data" };
	}
};
