import { useState } from "react";
import { LoginHandler } from "./LoginHandler";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		const values = { email, password };

		try {
			const res = await LoginHandler(values);
			console.log(res);
			if (res.success === true) {
				navigate("/home");
			}
		} catch (error) {
			console.error("pls:", error);
		}
	};

	return (
		<div className="container" style={{ paddingTop: "50px" }}>
			<div className="row justify-content-center">
				<div className="col-md-6">
					<form onSubmit={submitHandler}>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email:
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="password" className="form-label">
								Password:
							</label>
							<input
								type="password"
								className="form-control"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
