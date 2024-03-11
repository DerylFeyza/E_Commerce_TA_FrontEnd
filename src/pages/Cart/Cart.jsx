import { useState, useEffect } from "react";
import { getCartOnDraft } from "../../services/cart";

import {
	removeProductFromCart,
	addToCart,
	Checkout,
} from "../../services/transaction";
import CartPage from "./CartPage";

const Cart = () => {
	const [cartData, setCartData] = useState(null);

	useEffect(() => {
		retrieveCartandProducts();
	}, []);

	const retrieveCartandProducts = async () => {
		try {
			const res = await getCartOnDraft();
			if (res.status === "success") {
				const data = {
					cartInfo: res.cartInfo,
					cartItems: res.data,
					products: res.products,
				};
				setCartData(data);
			} else {
				setCartData(null);
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
		await Checkout();
		retrieveCartandProducts();
	};

	const actions = {
		handleDelete,
		handleQuantityChange,
		handleCheckout,
	};

	return (
		<>
			{console.log(cartData)}
			<div className="home-container">
				<div>
					{cartData && cartData.cartItems.length > 0 ? (
						<CartPage CartData={cartData} actions={actions} />
					) : (
						<h1 style={{ textAlign: "center", paddingTop: "50px" }}>
							Your cart is empty
						</h1>
					)}{" "}
				</div>
			</div>
		</>
	);
};

export default Cart;
