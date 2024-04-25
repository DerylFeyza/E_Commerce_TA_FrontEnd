import { GrLocation } from "react-icons/gr";
import PropTypes from "prop-types";
import { BASE_API } from "../../utils/http-common";
import { useState } from "react";
import { addToCart } from "../../services/transaction";
import ToastNotification from "../../components/ToastNotification";

const DetailLayout = ({ product, additional }) => {
	const IMAGEURL = `${BASE_API}/produk/image/${product.gambar_barang}`;
	const [quantity, setQuantity] = useState(1);
	const [toastMessage, setToastMessage] = useState("");
	const [toastType, setToastType] = useState("");

	const handleQuantityChange = (e) => {
		const value = e.target.value;
		if (value === "" || (value > 0 && !isNaN(value))) {
			setQuantity(value);
		} else {
			setQuantity(1);
		}
	};

	const incrementQuantity = () => {
		if (quantity < product.stok) {
			setQuantity(quantity + 1);
		} else {
			setToastMessage("Insufficient Stock.");
			setToastType("warning");
		}
	};

	const decrementQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleBlur = () => {
		if (quantity === "") {
			setQuantity(1);
		} else if (quantity > product.stok) {
			setQuantity(product.stok);
			setToastMessage("Insufficient Stock.");
			setToastType("warning");
		}
	};

	const handleAddToCart = async () => {
		const values = { id_produk: product.id, quantity: quantity };
		const res = await addToCart(values);
		if (res.status === "success") {
			setToastMessage("Product added to cart");
			setToastType("success");
		}
		if (res.status === "publisher") {
			setToastMessage("You can't buy your own products.");
			setToastType("error");
		}
	};

	return (
		<>
			<main>
				<div className="details-main-wrapper main-wrapper flex flex-col md:flex-row md:px-[200px] md:py-[100px] relative">
					<div className="image md:w-[50%]">
						<div className="large-image">
							<img
								className="object-cover rounded-xl w-full md:w-[700px] h-[700px] mt-5"
								src={IMAGEURL}
								alt={product.nama_barang}
							/>
						</div>
					</div>

					<div className="description p-6 md:w-[50%] md:py-[40px] mt-2">
						<p className="text-blue text-[14px] tracking-widest uppercase font-[700] mb-6">
							{additional[0].nama_toko}
						</p>

						<h1 className="text-3xl md:text-4xl capitalize font-[700] mb-2 ">
							{product.nama_barang}
						</h1>
						<p className="text-blue text-[20px] tracking-widest uppercase font-[700] flex items-center mb-6">
							<GrLocation className="mr-1" /> {additional[0].kota}
						</p>

						<h6 className="text-sm md:text-base mt-3">Stock: {product.stok}</h6>
						<p className="block text-darkGrayishBlue my-2 leading-7">
							{product.details}
						</p>

						<div className="price flex items-center mt-4">
							<span className="text-3xl font-[700]">Rp. {product.harga}</span>
						</div>
						<div className="buttons-container flex flex-col md:flex-row mt-6">
							<div className="state flex justify-center items-center space-x-6 rounded-lg p-3 md:p-2 md:mr-4 md:w-[150px]">
								<button
									onClick={decrementQuantity}
									className="minus text-[24px] md:text-[20px] font-[700] text-blue transition-all hover:opacity-50"
								>
									-
								</button>
								<input
									className=" md:text-[14px] font-bold text-center"
									id="inputQuantity"
									type="num"
									value={quantity}
									onChange={handleQuantityChange}
									onBlur={handleBlur}
									style={{ maxWidth: "4rem" }}
								/>
								<button
									onClick={incrementQuantity}
									className="plus text-[24px] md:text-[20px] font-[700] text-blue transition-all hover:opacity-50"
								>
									+
								</button>
							</div>
							<button
								className="btn btn-outline-dark flex-shrink-0 md:p-2 md:mr-4 md:w-[200px]"
								type="button"
								onClick={handleAddToCart}
							>
								Add to cart
							</button>
						</div>
					</div>
				</div>
				<ToastNotification
					message={toastMessage}
					setMessage={setToastMessage}
					type={toastType}
				/>
			</main>
		</>
	);
};

DetailLayout.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		nama_barang: PropTypes.string.isRequired,
		gambar_barang: PropTypes.string.isRequired,
		kategori: PropTypes.string.isRequired,
		details: PropTypes.string.isRequired,
		harga: PropTypes.number.isRequired,
		stok: PropTypes.number.isRequired,
	}),
	additional: PropTypes.arrayOf(
		PropTypes.shape({
			nama_toko: PropTypes.string,
			kota: PropTypes.string,
		})
	),
};

export default DetailLayout;
