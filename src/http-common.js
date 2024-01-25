import axios from "axios";
import { getLocalStorage } from "./LocalStorage";

const LOCAL_STORAGE_TOKEN = "taja/token";
const LOCAL_STORAGE_USER = "taja/user";

export default axios.create({
	baseURL: "http://localhost:8000",
	headers: {
		"Content-Type": "application/json",
	},
	TOKEN: {
		headers: {
			Authorization: `Bearer ${getLocalStorage(LOCAL_STORAGE_TOKEN)}`,
		},
	},
});
