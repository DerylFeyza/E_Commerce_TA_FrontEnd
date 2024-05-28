import { Outlet, Navigate } from "react-router-dom";
import { LOCAL_STORAGE_USER } from "./utils/http-common";

const ProtectedRoutes = () => {
	let user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER));
	let isAuthorized = user && (user.role === "seller" || user.role === "admin");
	return isAuthorized ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default ProtectedRoutes;
