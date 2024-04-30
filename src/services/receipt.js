import axios from "axios";
import { BASE_API } from "../utils/http-common";
import { getTokenCookie } from "../utils/HandleCookie";

const token = getTokenCookie();
const config = {
	headers: {
		Authorization: `Bearer ${token}`,
	},
};

const RECEIPT_URL = `${BASE_API}/receipt`;

export const getTransactionHistory = async () => {
	const HISTORY_URL = `${RECEIPT_URL}/history`;
	try {
		const data = await axios.get(HISTORY_URL, config);
		const res = data.data;

		if (res.success === true) {
			return {
				status: "success",
				cartInfo: res.cart,
				data: res.data,
			};
		} else {
			return { res: res, success: false };
		}
	} catch (error) {
		return {
			status: "error",
			message: error.response.data.message,
		};
	}
};

export const getPurchaseReceipt = async (purchaseId) => {
	const PURCHASERECEIPT_URL = `${RECEIPT_URL}/${purchaseId}`;
	try {
		const data = await axios.get(PURCHASERECEIPT_URL, config);
		const res = data.data;
		console.log(res.data);
		console.log(res.receipt);

		if (res.success === true) {
			return {
				status: "success",
				user: res.userData,
				cart: res.data,
				receipt: res.receipt,
			};
		} else {
			return { res: res, success: false };
		}
	} catch (error) {
		return {
			status: "error",
			message: error.response.data.message,
		};
	}
};

export const getRecentPurchase = async () => {
	const PURCHASES_URL = `${RECEIPT_URL}/merchant/purchases`;
	try {
		const data = await axios.get(PURCHASES_URL, config);
		const res = data.data;
		console.log(res);
		if (res.success === true) {
			return {
				status: "success",
				data: res.purchases,
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
