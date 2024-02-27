import PropTypes from "prop-types";

const CartPage = ({ cartData }) => {
	return (
		<>
			<main className="page">
				<>{console.log(cartData)}</>
				<section className="shopping-cart dark">
					<div className="container">
						<div className="block-heading">
							<h2>Shopping Cart</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
								quam urna, dignissim nec auctor in, mattis vitae leo.
							</p>
						</div>
						<div className="content">
							<div className="row">
								<div className="col-md-12 col-lg-8">
									<div className="items">
										{cartData.cartItems.map((data, index) => (
											<div className="cart" key={cartData.id}>
												<div className="row">
													<div className="col-md-3">
														<img
															className="img-fluid mx-auto d-block image"
															src={data.products[index].image}
															alt={data.products[index].name}
														/>
													</div>
													<div className="col-md-8">
														<div className="info">
															<div className="row">
																<div className="col-md-5 cart-name">
																	<div className="cart-name">
																		<a href="#">{data.products[index].name}</a>
																		<div className="cart-info"></div>
																	</div>
																</div>
																<div className="col-md-4 quantity">
																	<label htmlFor="quantity">Quantity:</label>
																	<input
																		id="quantity"
																		type="number"
																		value={data.cartItems.quantity}
																		className="form-control quantity-input"
																	/>
																</div>
																<div className="col-md-3 price">
																	<span>${data.cartItems.total}</span>
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
			</main>
		</>
	);
};

CartPage.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			cartItems: PropTypes,
			CartInfo: PropTypes.string.isRequired,
			harga: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default CartPage;
