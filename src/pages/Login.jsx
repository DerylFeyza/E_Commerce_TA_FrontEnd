import { useState } from "react";
import { LoginHandler } from "./LoginHandler";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitHandler = async (e) => {
		e.preventDefault(); // Prevent the default form submission behavior

		const values = { email, password };
		const res = await LoginHandler(values);
		console.log(res);
	};

	return (
		<form onSubmit={submitHandler}>
			<label>
				Email:
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</label>
			<br />
			<label>
				Password:
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</label>
			<br />
			<button type="button" onClick={submitHandler}>
				Login
			</button>
		</form>
	);
};

export default LoginForm;
