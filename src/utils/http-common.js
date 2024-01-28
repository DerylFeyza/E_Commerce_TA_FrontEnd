import { getLocalStorage } from "./LocalStorage";

const BASE_API = "http://localhost:8000";
const BASE_API_IMAGE = "http://localhost:8000/images";

const LOCAL_STORAGE_TOKEN = "taja/token";
const LOCAL_STORAGE_USER = "taja/user";

const TOKEN = {
	headers: {
		Authorization: `Bearer ${getLocalStorage(LOCAL_STORAGE_TOKEN)}`,
	},
};

export {
	BASE_API,
	BASE_API_IMAGE,
	LOCAL_STORAGE_TOKEN,
	LOCAL_STORAGE_USER,
	TOKEN,
};
