import { useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification = ({ message, setMessage, type }) => {
	useEffect(() => {
		if (message) {
			toast[type](message, {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Bounce,
			});
			setMessage("");
		}
	}, [message, setMessage, type]);

	return (
		<ToastContainer
			position="top-right"
			autoClose={3000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="light"
			transition={Bounce}
		/>
	);
};

ToastNotification.propTypes = {
	message: PropTypes.string,
	setMessage: PropTypes.func,
	type: PropTypes.oneOf(["success", "error", "warning", "info"]),
};

export default ToastNotification;
