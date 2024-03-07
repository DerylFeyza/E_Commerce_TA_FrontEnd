import { useState, useEffect } from "react";
import { getCartOnDraft } from "../../services/cart";
import { getProductById } from "../../services/products";
import { removeProductFromCart } from "../../services/transaction";
import { addToCart } from "../../services/transaction";
import CartPage from "./CartPage";

const Cart = () => {
	const [cartData, setCartData] = useState(null);

	useEffect(() => {
		retrieveCartandProducts();
	}, []);

	const retrieveCartandProducts = async () => {
		try {
			const res = await getCartOnDraft();
			const data = {
				cartInfo: res.cartInfo,
				cartItems: res.data,
				products: await Promise.all(
					res.data.map(async (item) => {
						return await getProductById(item.id_produk);
					})
				),
			};
			setCartData(data);
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

	return (
		<>
			<div className="home-container">
				<div>
					<h1>Product List</h1>
					{cartData && (
						<CartPage
							CartData={cartData}
							handleDelete={handleDelete}
							qtyChange={handleQuantityChange}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Cart;
