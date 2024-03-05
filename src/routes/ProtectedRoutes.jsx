import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../utils/LocalStorage";
import { LOCAL_STORAGE_USER } from "../utils/http-common";

const userAuth = () => {
	const user = getLocalStorage(LOCAL_STORAGE_USER);
	if (user) {
		return {
			user: user,
		};
	} else {
		return false;
	}
};

const ProtectedRoutes = () => {
	const { user } = userAuth();
	return user ? <Navigate to="/home" /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
