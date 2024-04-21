import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userToMerchant } from "../services/user";

const MerchantForm = () => {
	const [namaToko, setNamaToko] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		const values = { namatoko: namaToko, password };
		try {
			const res = await userToMerchant(values);
			if (res.success === true) {
				navigate("/home");
				window.location.reload();
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
							type="text"
							className="form-control"
							id="namatoko"
							placeholder="Your Shop Name"
							value={namaToko}
							onChange={(e) => setNamaToko(e.target.value)}
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
					<button type="submit">Register As A Merchant</button>
					<div className="social-icon">
						<a href="#" className="social-icon"></a>
						<i className="fab fa-twiter"></i>
					</div>
				</form>
			</div>
		</div>
	);
};

export default MerchantForm;
