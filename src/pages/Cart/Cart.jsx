import { useState, useEffect } from "react";
import { getCartOnDraft } from "../../services/cart";
import { getUserInfo } from "../../services/user";
import {
	removeProductFromCart,
	addToCart,
	Checkout,
} from "../../services/transaction";
import ToastNotification from "../../components/ToastNotification";
import CartPage from "./CartPage";

const Cart = () => {
	const [cartData, setCartData] = useState(null);
	const [userBalance, setUserBalance] = useState(0);
	const [toastMessage, setToastMessage] = useState("");
	const [toastType, setToastType] = useState("");

	useEffect(() => {
		retrieveCartandProducts();
	}, []);

	const retrieveCartandProducts = async () => {
		try {
			const res = await getCartOnDraft();
			const resUser = await getUserInfo();
			if (res.success === true && resUser.success === true) {
				const data = {
					cartInfo: res.cartInfo,
					cartItems: res.data,
					products: res.products,
				};
				setCartData(data);
				setUserBalance(resUser.data.saldo);
			} else {
				setCartData(null);
				setUserBalance(null);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (idProduk) => {
		try {
			await removeProductFromCart(idProduk);
			retrieveCartandProducts();
		} catch (error) {
			console.log(error);
		}
	};

	const handleQuantityChange = async (idProduct, quantityValues) => {
		try {
			const values = { id_produk: idProduct, quantity: quantityValues };
			await addToCart(values);
			retrieveCartandProducts();
		} catch (error) {
			console.log(error);
		}
	};

	const handleCheckout = async () => {
		const res = await Checkout();
		if (res.status === "Insufficient Balance") {
			setToastMessage("Insufficient Balance, please top up first.");
			setToastType("error");
		}
		if (res.success === true) {
			setToastMessage("Checkout Successful");
			setToastType("success");
		}
		retrieveCartandProducts();
	};

	const actions = {
		handleDelete,
		handleQuantityChange,
		handleCheckout,
	};

	return (
		<>
			{console.log(userBalance)}
			<div className="home-container">
				<div>
					{cartData && cartData.cartItems.length > 0 ? (
						<CartPage
							CartData={cartData}
							actions={actions}
							balance={userBalance}
						/>
					) : (
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								height: "100vh",
							}}
						>
							<h1 style={{ textAlign: "center", paddingTop: "50px" }}>
								<img src="/empty-cart.png" alt="Empty Cart" />
								Your Cart Is Empty!
							</h1>
						</div>
					)}
				</div>
			</div>
			<ToastNotification
				message={toastMessage}
				setMessage={setToastMessage}
				type={toastType}
			/>
		</>
	);
};

export default Cart;
