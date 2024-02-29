import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginRegister/LoginForm";
import Register from "./pages/LoginRegister/RegisterForm";
import Home from "./pages/Home/HomePage";
import Quill from "./components/QuillEditor/Editor";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails/Details";
import ProductSearch from "./pages/SearchPage/SearchPage";
import Details from "./pages/ProductDetails/DetailsCard";
import Cart from "./pages/Cart/Cart";
function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/quiltest" element={<Quill />} />
				<Route path="/details" element={<Details />} />
				<Route path="/products/:id" element={<ProductDetails />} />
				<Route path="/search" element={<ProductSearch />} />
				<Route path="/login" element={<LoginForm />} />
				<Route path="/register" element={<Register />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</Router>
	);
}

export default App;
