import PropTypes from "prop-types";
import { BASE_API } from "../../utils/http-common";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import BlankImg from "../../assets/blankimg.jpg";

const CartPage = ({ CartData, actions, balance }) => {
	const handleQuantityChange = (idProduct, e) => {
		const value = e.target.value;
		console.log(value);
		if (value === "" || (value > 0 && !isNaN(value))) {
			actions.handleQuantityChange(idProduct, value);
		} else {
			console.log("icikiwir");
		}
	};

	const handleBlur = (e, index) => {
		const value = e.target.value;

		if (value == 0) {
			e.target.value = 1;
			handleQuantityChange(CartData.products[index]?.id, e);
		}
		if (value > CartData.products[index]?.stok) {
			e.target.value = CartData.products[index]?.stok;
			handleQuantityChange(CartData.products[index]?.id, e);
		}
	};

	const handleDeleteItem = (idProduk) => {
		actions.handleDelete(idProduk);
	};

	const handleCheckout = () => {
		actions.handleCheckout();
	};

	return (
		<div className="cart_section">
			<div className="container-fluid pt-10 ">
				<div className="row flex flex-col space-y-4">
					<div className="col-lg-10 offset-lg-1">
						<div className="cart_container ">
							<div className="cart_items">
								<div className="flex flex-row">
									<ul className="cart_list rounded-l-lg">
										<div className="font-semibold-900 pt-8 text-4xl keranjangmu">
											<h3 className="font-bold">Keranjangmu</h3>
										</div>
										{CartData.cartItems.map((data, index) => (
											<li className="cart_item clearfix" key={data.id}>
												<div className="cart_item_image">
													<img
														src={
															`${BASE_API}/produk/image/${CartData.products[index]?.gambar_barang}` || {
																BlankImg,
															}
														}
														alt={CartData.products[index]?.nama_barang}
													/>
													{console.log(CartData.products[index]?.gambar_barang)}
												</div>
												<div className="cart_item_info">
													<div className="cart_item_name cart_info_col">
														<div className="cart_item_text mt-1  font-semibold">
															{CartData.products[index]?.nama_barang ||
																"Deleted Product"}
														</div>
														<div className="cart_item_text mt-2 font-bold">
															Total: Rp. {""}
															{CartData.cartItems[index]?.total}
														</div>
														<div className="cart_item_text mt-2 font-bold">
															Rp. {""}
															{CartData.products[index]?.harga}
														</div>
														<div className="cart_item_text mt-2 font-bold">
															Stok: {CartData.products[index]?.stok}
														</div>
														<div className="button-container">
															<div className="mt-1">
																<input
																	id="quantity"
																	type="number"
																	onBlur={(e) => handleBlur(e, index)}
																	onChange={(e) =>
																		handleQuantityChange(
																			CartData.products[index]?.id,
																			e
																		)
																	}
																	value={CartData.cartItems[index]?.quantity}
																	className="form-control quantity-input "
																/>
															</div>
															<div className="mx-4">
																<IoTrashOutline
																	size={40}
																	type="button"
																	onClick={() =>
																		handleDeleteItem(
																			CartData.products[index]?.id
																		)
																	}
																>
																	Delete {CartData.products[index]?.id}
																</IoTrashOutline>
															</div>
														</div>
													</div>
												</div>
											</li>
										))}
									</ul>
									<div className="total px-20 rounded-r-lg">
										<h3 className="mb-10 mt-12">Details</h3>
										<p className="fs-5 fw-normal">Total : </p>
										<div className="fw-bolder fs-1">
											Rp.{CartData.cartInfo.totalharga}
										</div>
										<div className="order_total_content text-md-right">
											<div className="order_total_title fw-bold">Balance :</div>
											<div className="order_total_amount">
												Rp. {balance != null ? balance : 0}
											</div>
										</div>
										<div
											className="button cart_button_checkout mt-2"
											type="button "
											onClick={handleCheckout}
										>
											Checkout
										</div>
										<div className="cart_buttons">
											<Link to="/home" className="button cart_button_clear">
												Continue Shopping
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

CartPage.propTypes = {
	CartData: PropTypes.shape({
		cartItems: PropTypes.arrayOf(PropTypes.object),
		products: PropTypes.arrayOf(PropTypes.object),
		cartInfo: PropTypes.shape({
			totalharga: PropTypes.number,
		}),
	}),
	actions: PropTypes.shape({
		handleDelete: PropTypes.func.isRequired,
		handleQuantityChange: PropTypes.func.isRequired,
		handleCheckout: PropTypes.func.isRequired,
	}),
	balance: PropTypes.number.isRequired,
};

export default CartPage;
