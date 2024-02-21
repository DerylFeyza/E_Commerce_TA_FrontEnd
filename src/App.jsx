import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/Login/LoginForm";
import Home from "./pages/Home/HomePage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<LoginForm />} />
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
