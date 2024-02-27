import React, { useState, useEffect } from "react";
import "./Cart.css";
import { getCartOnDraft } from "../../services/cart";
// import { getProductById } from "../../services/products";

const Cart = () => {
	const [cart, setcart] = useState();
	const [cartItems, setCartItems] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		retrieveCart();
	}, []);

	const retrieveCart = async () => {
		try {
			const dataCart = await getCartOnDraft();
			setCartItems(dataCart.data);
			console.log(cartItems);
		} catch (error) {
			console.log("pls");
		}
	};

	return (
		<>
			kontol
			{/* {console.log(cartItems)} */}
		</>

		// <main className="page">
		// 	<section className="shopping-cart dark">
		// 		<div className="container">
		// 			<div className="block-heading">
		// 				<h2>Shopping Cart</h2>
		// 				<p>
		// 					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
		// 					urna, dignissim nec auctor in, mattis vitae leo.
		// 				</p>
		// 			</div>
		// 			<div className="content">
		// 				<div className="row">
		// 					<div className="col-md-12 col-lg-8">
		// 						<div className="items">
		// 							{cart.map((cart) => (
		// 								<div className="cart" key={cart.id}>
		// 									<div className="row">
		// 										<div className="col-md-3">
		// 											<img
		// 												className="img-fluid mx-auto d-block image"
		// 												src={products.image}
		// 												alt={products.name}
		// 											/>
		// 										</div>
		// 										<div className="col-md-8">
		// 											<div className="info">
		// 												<div className="row">
		// 													<div className="col-md-5 cart-name">
		// 														<div className="cart-name">
		// 															<a href="#">{cart.name}</a>
		// 															<div className="cart-info"></div>
		// 														</div>
		// 													</div>
		// 													<div className="col-md-4 quantity">
		// 														<label htmlFor="quantity">Quantity:</label>
		// 														<input
		// 															id="quantity"
		// 															type="number"
		// 															value={cart.quantity}
		// 															className="form-control quantity-input"
		// 															onChange={(e) =>
		// 																handleQuantityChange(e, cart)
		// 															}
		// 														/>
		// 													</div>
		// 													<div className="col-md-3 price">
		// 														<span>${cart.price}</span>
		// 													</div>
		// 												</div>
		// 											</div>
		// 										</div>
		// 									</div>
		// 								</div>
		// 							))}
		// 						</div>
		// 					</div>
		// 					<div className="col-md-12 col-lg-4">
		// 						<div className="summary">
		// 							<h3>Summary</h3>
		// 							{/* <div className="summary-item">
		// 								<span className="text">Subtotal</span>
		// 								<span className="price">${subtotal}</span>
		// 							</div>
		// 							<div className="summary-item">
		// 								<span className="text">Discount</span>
		// 								<span className="price">${discount}</span>
		// 							</div>
		// 							<div className="summary-item">
		// 								<span className="text">Shipping</span>
		// 								<span className="price">${shipping}</span>
		// 							</div> */}
		// 							<div className="summary-item">
		// 								<span className="text">Total</span>
		// 								<span className="price">${cart.totalharga}</span>
		// 							</div>
		// 							<button
		// 								type="button"
		// 								className="btn btn-primary btn-lg btn-block"
		// 							>
		// 								Checkout
		// 							</button>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</section>
		// </main>
	);
};

export default Cart;
