import { useState } from "react";
import { LoginHandler } from "./LoginHandler";
import { useNavigate } from "react-router-dom";
import ToastNotification from "../../components/ToastNotification";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [toastMessage, setToastMessage] = useState("");
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		const values = { email, password };

		try {
			const res = await LoginHandler(values);
			if (res.success === true) {
				navigate("/home");
				window.location.reload();
			} else if (res.success === false) {
				setToastMessage("Login failed! Please check your credentials.");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="LoginForm-container">
			<div className="wrapper">
				<form onSubmit={submitHandler}>
					<h1>TAja</h1>

					<div className="input-box">
						<input
							type="email"
							className="form-control"
							id="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="input-box">
						<input
							type="password"
							className="form-control"
							id="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button type="submit">Login</button>
					<div className="register-link">
						<p>
							Anda belum memiliki akun? <a href="./register">Registrasi</a>
						</p>
					</div>
					<div className="social-icon">
						<a href="#" className="social-icon"></a>
						<i className="fab fa-twiter"></i>
					</div>
				</form>
			</div>
			<ToastNotification
				message={toastMessage}
				setMessage={setToastMessage}
				type="error"
			/>
		</div>
	);
};

export default LoginForm;
