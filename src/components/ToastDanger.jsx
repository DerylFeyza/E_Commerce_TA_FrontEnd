import { useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";

const ToastDanger = ({ message, setMessage }) => {
	useEffect(() => {
		if (message) {
			toast.error(message, {
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
	}, [message, setMessage]);

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

ToastDanger.propTypes = {
	message: PropTypes.string.isRequired,
	setMessage: PropTypes.func.isRequired,
};

export default ToastDanger;
