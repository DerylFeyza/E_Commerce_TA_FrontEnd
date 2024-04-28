import { useState, useEffect } from "react";
import { getLocalStorage } from "../utils/LocalStorage";
import { LOCAL_STORAGE_USER } from "../utils/http-common";
import { Logout } from "../pages/LoginRegister/LoginHandler";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline, IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
	const [userData] = useState(getLocalStorage(LOCAL_STORAGE_USER));
	const [search, setSearch] = useState("");
	const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

	useEffect(() => {
		if (!search) {
			setSearch(getQueryParam());
		}
	}, []);

	const handleContentChange = (value) => {
		setSearch(value);
	};

	const handleFocus = () => {
		setIsPlaceholderVisible(false);
	};

	const handleBlur = () => {
		if (!search.trim()) {
			setIsPlaceholderVisible(true);
		}
	};

	const getQueryParam = () => {
		const params = new URLSearchParams(window.location.search);
		return params.get("k") || "";
	};

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top p-0">
			<div className="container-fluid navbar-bg p-4">
				<div className="navbar-brand nav-logo">
					<Link to="/" className="nav-logo-title">
						TAja
					</Link>
				</div>
				<form
					className="w-75 "
					role="search"
					onSubmit={(e) => {
						e.preventDefault();
						{
							if (!search) {
								window.location.href = `/`;
							} else {
								window.location.href = `/search?k=${search}`;
							}
						}
					}}
				>
					<div className="input-group mx-4 ">
						<input
							type="text"
							className="form-control rounded-pill pl-4 search-form"
							placeholder={
								isPlaceholderVisible ? "Cari barang yang kamu inginkan" : ""
							}
							value={search}
							onChange={(e) => handleContentChange(e.target.value)}
							onFocus={handleFocus}
							onBlur={handleBlur}
							style={{
								paddingLeft: "2rem",
							}}
						/>
						<div className="input-group-prepend">
							<span className="input-group-text bg-transparent border-0">
								<i>
									<CiSearch style={{ color: "#fff", fontSize: "2rem" }} />
								</i>
							</span>
						</div>
					</div>
				</form>
				<div className="d-flex justify-content-around align-items-center flex-grow-1 navbar-logo-container">
					<Link to="/cart" className="mx-3">
						<IoCartOutline style={{ color: "#fff", fontSize: "3rem" }} />
					</Link>
					{userData ? (
						<div className="nav-item dropdown">
							<IoPersonCircleSharp
								className="nav-link dropdown-toggle"
								style={{ color: "#fff", fontSize: "2.8rem", cursor: "pointer" }}
								id="dropdownMenuButton"
								data-bs-toggle="dropdown"
							/>
							<ul className="dropdown-menu">
								<li>
									<Link className="dropdown-item" to="/user">
										{userData.username}{" "}
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/address">
										Addresses
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/purchases">
										History
									</Link>
								</li>
								{userData.role === "seller" && (
									<li>
										<Link className="dropdown-item" to="/merchant">
											Merchant Dashboard
										</Link>
									</li>
								)}
								{userData.role === "customer" && (
									<li>
										<Link className="dropdown-item" to="/merchantregistration">
											Be a merchant
										</Link>
									</li>
								)}
								<li>
									<Link className="dropdown-item" onClick={Logout} to="/login">
										Logout
									</Link>
								</li>
							</ul>
						</div>
					) : (
						<Link className="btn btn-primary" to="/login">
							Login
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
