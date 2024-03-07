import { useState } from "react";
import './Navbar.css'
import { getLocalStorage } from "../utils/LocalStorage";
import { LOCAL_STORAGE_USER } from "../utils/http-common";
import { Logout } from "../pages/LoginRegister/LoginHandler";



const Navbar = () => {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);
	const [search, setSearch] = useState("");

	const handleContentChange = (value) => {
		setSearch(value);
	};

	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

	return (
		<div className="nav">
			<div className="nav-logo">TAja</div>
				<ul className="nav-menu">
				<li><a href="#"></a>Beranda</li>
				<li><a href="#"></a>Sedang Trend</li>
				<li><a href="#"></a> Baru</li>
				<div className="nav-log">
				<li><a href="./LoginRegister/LoginForm"></a>Login</li>
				</div>
				<div className="nav-log">
				<li><a href="#"></a>Logout</li>
				</div>
			</ul>
		</div>
	);
};

export default Navbar;