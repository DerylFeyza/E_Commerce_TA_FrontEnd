import { useState } from "react";
import '../Navbar/Navbar.css';
import user from "../../assets/user.png";
import cart from "../../assets/cart.png";
import fav from "../../assets/fav.png"
import { getLocalStorage } from "../../utils/LocalStorage";
import { LOCAL_STORAGE_USER } from "../../utils/http-common";
import { Logout } from "../../pages/LoginRegister/LoginHandler";

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
				{/* <li><a href="#"></a>Beranda</li>
				<li><a href="#"></a>Sedang Populer</li>
				<li><a href="#"></a> Baru</li> */}
				<div className="nav-user-cart-fav">
				<img src={fav} alt=" " /> 
					<img src={cart} alt=" " />
					<img src={user} alt=" " />
				</div>
				{/* <div className="nav-cart">
					<img src={cart} alt=" "/>
				</div>
				<div className="nav-fav">
					<img src={fav} alt=" "/>
				</div> */}
				{/* <div className="nav-log">
				<li><a href="./LoginRegister/LoginForm"></a>Login</li>
				</div>
				<div className="nav-log">
				<li><a href="#"></a>Logout</li>
				</div> */}
			</ul>
		</div>
	);
};

export default Navbar;