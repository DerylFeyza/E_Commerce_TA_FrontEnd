<<<<<<< HEAD
import { useState } from "react";
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
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {getLocalStorage(LOCAL_STORAGE_USER).username}
              </a>
            </li>
            <a className="nav-link active" aria-current="page" href="/cart">
              Cart
            </a>
            <a className="nav-link active" aria-current="page" href="/login">
              Login
            </a>
            <a className="btn btn-primary" aria-current="page" onClick={Logout}>
              Logout
            </a>
          </ul>
          <form
            className="d-flex"
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
            <input
              className="form-control me-2"
              value={search}
              onChange={(e) => handleContentChange(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
=======
import { useState } from "react";
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
		<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded={!isNavCollapsed ? true : false}
					aria-label="Toggle navigation"
					onClick={handleNavCollapse}
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								{getLocalStorage(LOCAL_STORAGE_USER).username}
							</a>
						</li>
						<a className="nav-link active" aria-current="page" href="/cart">
							Cart
						</a>
						<a className="nav-link active" aria-current="page" href="/login">
							Login
						</a>
						<a className="btn btn-primary" aria-current="page" onClick={Logout}>
							Logout
						</a>
						<a className="btn btn-primary" aria-current="page" href="/merchant">
							merchant dashboard
						</a>
						<a
							className="btn btn-primary"
							aria-current="page"
							href="/purchases"
						>
							History
						</a>
					</ul>
					<form
						className="d-flex"
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
						<input
							className="form-control me-2"
							value={search}
							onChange={(e) => handleContentChange(e.target.value)}
						/>
						<button type="submit" className="btn btn-primary">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
>>>>>>> fc15d8160421da67429b9a3cfcfb24a5064d8b55
