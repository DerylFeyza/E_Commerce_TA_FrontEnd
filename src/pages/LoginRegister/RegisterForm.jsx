import { useState } from "react";
import { RegisterHandler } from "./LoginHandler";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		const values = { username, email, password };

		try {
			const res = await RegisterHandler(values);
			console.log(res);
			if (res.success === true) {
				navigate("/login");
			}
		} catch (error) {
			console.error("pls:", error);
		}
	};

	return (
		<div className="LoginForm-container">
			<div className="wrapper">
				<form onSubmit={submitHandler}>
					<h1>TAja</h1>
					<div className="input-box">
						<input
							type="text"
							className="form-control"
							id="username"
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</div>
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

					<button type="submit">
						Registrasi<a href="#"></a>
					</button>
					<div className="register-link">
						<p>
							Anda sudah memiliki akun? <a href="/login">Login</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
