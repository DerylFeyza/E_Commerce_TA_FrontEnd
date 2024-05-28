import { Outlet, Navigate } from "react-router-dom";
import { LOCAL_STORAGE_USER } from "./utils/http-common";

const LoginRoute = () => {
	let user = localStorage.getItem(LOCAL_STORAGE_USER);
	return user ? <Outlet /> : <Navigate to="/login" />;
};

export default LoginRoute;
