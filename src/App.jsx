import {
	BrowserRouter as Router,
	Route,
	Routes,
	Outlet,
} from "react-router-dom";
import LoginForm from "./pages/LoginRegister/LoginForm";
import Register from "./pages/LoginRegister/RegisterForm";
import Home from "./pages/Home/HomePage";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails/Details";
import ProductSearch from "./pages/SearchPage/SearchPage";
import Details from "./pages/ProductDetails/DetailsCard";
import Cart from "./pages/Cart/Cart";
// import SuccessPopup from "./components/Alerts/SuccessPopup";
import NotFoundPage from "./pages/NotFound/NotFound";
// import Test from "./components/Product/ProductCard"
// import Iklan from "./components/Iklan/Iklan"
import Footer from "./pages/Footer/Footer";


const AppLayout = () => (
	<>
		<Navbar />
		<main>
			<Outlet />
		</main>
	</>
);

const App = () => {
	return (
		<Router>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/details" element={<Details />} />
					<Route path="/products/:id" element={<ProductDetails />} />
					<Route path="/search" element={<ProductSearch />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<NotFoundPage />} />
					{/* <Route path="/iklan" element={<Iklan />} /> */}

				</Route>

				<Route path="/login" element={<LoginForm />} />
				<Route path="/register" element={<Register />} />
				{/* <Route path="/test" element={<Test />} /> */}
				{/* <Route path="/iklan" element={<Iklan />} /> */}
				<Route path="/footer" element={<Footer />} />
			</Routes>
		</Router>
	);
};

export default App;
