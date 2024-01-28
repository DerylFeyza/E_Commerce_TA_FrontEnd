import axios from "axios";
import {
	BASE_API,
	LOCAL_STORAGE_TOKEN,
	LOCAL_STORAGE_USER,
} from "../utils/http-common";
import { setLocalStorage } from "../utils/LocalStorage";

export const LoginHandler = async (values) => {
	const LOGIN_URL = BASE_API + "/user/login";
	try {
		const logindata = await axios.post(LOGIN_URL, values);
		const res = logindata.data;

		if (res.status === "Login Success") {
			setLocalStorage(LOCAL_STORAGE_TOKEN, res.token);
			setLocalStorage(LOCAL_STORAGE_USER, res.data);

			return res;
		}

		return Promise.resolve({
			status: res.status,
			message: res.message,
		});
	} catch (err) {
		return Promise.resolve({
			status: "error",
			message: err.response?.data?.message,
		});
	}
};
