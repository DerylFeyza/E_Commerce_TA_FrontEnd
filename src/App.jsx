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
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails/Details";
import ProductSearch from "./pages/ProductsPage/SearchPage";
import Cart from "./pages/Cart/Cart";
import Purchases from "./pages/TransHistory/History";
import NotFoundPage from "./pages/Errors/NotFound";
import Unauthorized from "./pages/Errors/Unauthorized";
import AddProduct from "./pages/MerchantDashboard/AddEditProduct";
import MerchantDashboard from "./pages/MerchantDashboard/Dashboard";
import AddressPage from "./pages/Address/AddressPage";
import MerchantForm from "./pages/MerchantForm";
import UserProfile from "./pages/UserProfile/UserProfileCard";
import ProtectedRoute from "./ProtectedRoute";
import LoginRoute from "./LoginRoute";
import "./App.css";
import "./index.css";

const AppLayout = () => (
	<>
		<Navbar />
		<main>
			<Outlet />
		</main>
	</>
);

const WithFooter = () => (
	<>
		<main>
			<Outlet />
		</main>
		<Footer />
	</>
);

const App = () => {
	return (
		<Router>
			<Routes>
				<Route element={<AppLayout />}>
					<Route element={<WithFooter />}>
						<Route path="/" element={<Home />} />
						<Route element={<ProtectedRoute />}>
							<Route path="/merchant" element={<MerchantDashboard />} />
							<Route path="/products/add" element={<AddProduct />} />
							<Route path="/products/update/:id" element={<AddProduct />} />
						</Route>
						<Route path="/search" element={<ProductSearch />} />
						<Route path="/home" element={<Home />} />
						<Route path="/products" element={<ProductSearch />} />
					</Route>

					<Route element={<LoginRoute />}>
						<Route path="/merchantregistration" element={<MerchantForm />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/purchases" element={<Purchases />} />
						<Route path="/address" element={<AddressPage />} />
						<Route path="/user" element={<UserProfile />} />
					</Route>

					<Route path="/products/:id" element={<ProductDetails />} />
					<Route path="/unauthorized" element={<Unauthorized />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>

				<Route path="/login" element={<LoginForm />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</Router>
	);
};

export default App;
