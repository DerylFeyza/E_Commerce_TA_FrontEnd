import { useState, useEffect } from "react";
import { getCartOnDraft } from "../../services/cart";
import { getProductById } from "../../services/products";
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

	return (
		<>
			<div className="home-container">
				<div>
					<h1>Product List</h1>
					{cartData && <CartPage CartData={cartData} />}
				</div>
			</div>
			{/* <main className="page">
				{cartData && (
					<section className="shopping-cart dark">
						{console.log(cartData.cartItems[1].quantity)}
						{console.log(cartData)}
						<div className="container">
							<div className="block-heading">
								<h2>Shopping Cart</h2>
							</div>
							<div className="content">
								<div className="row">
									<div className="col-md-12 col-lg-8">
										<div className="items">
											{cartData.cartItems.map((data, index) => (
												<div className="cart" key={data.id}>
													<div className="row">
														<div className="col-md-3">
															{console.log(index)}
															<img
																className="img-fluid mx-auto d-block image"
																src={
																	cartData.products[index]?.data?.gambar_barang
																}
																alt={cartData.products[index]?.data.nama_barang}
															/>
														</div>
														<div className="col-md-8">
															<div className="info">
																<div className="row">
																	<div className="col-md-5 cart-name">
																		<div className="cart-name">
																			<a href="#">
																				{
																					cartData.products[index]?.data
																						.nama_barang
																				}
																			</a>
																			<div className="cart-info"></div>
																		</div>
																	</div>
																	<div className="col-md-4 quantity">
																		<label htmlFor="quantity">Quantity:</label>
																		<input
																			id="quantity"
																			type="number"
																			value={
																				cartData.cartItems[index]?.quantity
																			}
																			className="form-control quantity-input"
																		/>
																	</div>
																	<div className="col-md-3 price">
																		<span>${data.cartItems?.total}</span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
									<div className="col-md-12 col-lg-4">
										<div className="summary">
											<h3>Summary</h3>
											<div className="summary-item">
												<span className="text">Total</span>
												<span className="price">
													{cartData.cartInfo.totalharga}
												</span>
											</div>
											<button
												type="button"
												className="btn btn-primary btn-lg btn-block"
											>
												Checkout
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				)}
			</main> */}
		</>
	);
};

export default Cart;
