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
import ProductSearch from "./pages/ProductsPage/SearchPage";
import Details from "./pages/ProductDetails/DetailsCard";
import Cart from "./pages/Cart/Cart";
import Purchases from "./pages/TransHistory/History";
import NotFoundPage from "./pages/NotFound/NotFound";
import PurchaseReceipt from "./pages/Receipt/Receipt";
import AddProduct from "./pages/MerchantDashboard/AddEditProduct";
import MerchantDashboard from "./pages/MerchantDashboard/Dashboard";

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
					<Route path="/merchant" element={<MerchantDashboard />} />
					<Route path="/home" element={<Home />} />
					<Route path="/details" element={<Details />} />
					<Route path="/products/:id" element={<ProductDetails />} />
					<Route path="/products/add" element={<AddProduct />} />
					<Route path="/products/update/:id" element={<AddProduct />} />
					<Route path="/receipt/:id" element={<PurchaseReceipt />} />
					<Route path="/search" element={<ProductSearch />} />
					<Route path="/products" element={<ProductSearch />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/purchases" element={<Purchases />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>

				<Route path="/login" element={<LoginForm />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</Router>
	);
};

export default App;
