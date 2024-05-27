import { useState, useEffect } from "react";
import {
	addProduct,
	imageFetcher,
	MerchantRetrieveProductDataById,
	updateProduct,
} from "../../services/products";
import { useNavigate, useParams } from "react-router-dom";
import { getUserAddress } from "../../services/address";
import { Link } from "react-router-dom";
import BlankImg from "../../assets/blankimg.jpg";
import ToastNotification from "../../components/ToastNotification";

const AddProduct = () => {
	const { id } = useParams();
	const [namaBarang, setNamaBarang] = useState("");
	const [gambarBarang, setGambarBarang] = useState(null);
	const [kategori, setKategori] = useState("");
	const [harga, setHarga] = useState("");
	const [stok, setStok] = useState("");
	const [details, setDetails] = useState("");
	const [pickedAddress, setPickedAddress] = useState(null);
	const [userAddress, setUserAddress] = useState([]);
	const [saleStatus, setSaleStatus] = useState("");
	const [imagePreview, setImagePreview] = useState("");
	const [toastMessage, setToastMessage] = useState("");
	const [toastType, setToastType] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const res = await MerchantRetrieveProductDataById(id);
				const product = res.data;
				setNamaBarang(product.nama_barang);
				setKategori(product.kategori);
				setHarga(product.harga);
				setStok(product.stok);
				setDetails(product.details);
				setPickedAddress(product.id_alamat);
				setSaleStatus(product.status);
				if (product.gambar_barang) {
					setImagePreview(imageFetcher(product.gambar_barang));
				}
			} catch (error) {
				console.log("Failed to fetch product");
			}
		};
		if (id) {
			fetchProduct();
		}
		retrieveProductAddress();
	}, [id]);

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		console.log(file);
		setGambarBarang(file);
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const retrieveProductAddress = async () => {
		try {
			const res = await getUserAddress();
			setUserAddress(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	const onChangeAddress = (e) => {
		const value = e.target.value;
		setPickedAddress(value);
	};

	const handleSaleStatusChange = (status) => {
		setSaleStatus(status);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (
			namaBarang === "" ||
			imagePreview === null ||
			kategori === "" ||
			harga === "" ||
			stok === 0 ||
			details === "" ||
			pickedAddress === "" ||
			userAddress.length === 0
		) {
			setToastMessage("Please Fill All Fields.");
			setToastType("error");
		} else {
			const formData = new FormData();
			formData.append("nama_barang", namaBarang);
			formData.append("gambar_barang", gambarBarang);
			formData.append("kategori", kategori);
			formData.append("id_alamat", pickedAddress);
			formData.append("harga", harga);
			formData.append("stok", stok);
			formData.append("details", details);
			formData.append("status", saleStatus);
			try {
				if (id) {
					const res = await updateProduct(id, formData);
					if (res.success === true) {
						navigate("/merchant");
					}
				} else if (!id) {
					const res = await addProduct(formData);
					if (res.success === true) {
						navigate("/merchant");
					}
				}
			} catch (error) {
				console.log("failed to add product", error);
			}
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				{console.log(pickedAddress)}
				<div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
					<div className="container max-w-screen-lg mx-auto">
						<div>
							<div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
								<div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-5">
									<div className="lg:col-span-2">
										<div className="shadow-md rounded-xl">
											{imagePreview ? (
												<img
													className="object-cover rounded-xl w-full h-auto md:h-[700px]"
													src={imagePreview}
													alt="Preview"
												/>
											) : (
												<img
													className="object-cover rounded-xl w-full h-auto md:h-[700px]"
													src={BlankImg}
													alt="Blank"
												/>
											)}
										</div>

										<input
											type="file"
											className=" border mt-2 rounded w-full bg-gray-50 form-control"
											id="gambar_barang"
											onChange={handleImageChange}
										/>
									</div>
									<div className="lg:col-span-3">
										<div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
											<div className="md:col-span-5">
												<label htmlFor="product_name">Product Name</label>

												<input
													type="text"
													className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
													id="product_name"
													value={namaBarang}
													onChange={(e) => setNamaBarang(e.target.value)}
												/>
											</div>

											<div className="md:col-span-3">
												<label htmlFor="kategori">Product Category</label>
												<input
													type="text"
													className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
													id="kategori"
													value={kategori}
													onChange={(e) => setKategori(e.target.value)}
												/>
											</div>

											<div className="md:col-span-2">
												<label htmlFor="address">Product Address</label>
												{userAddress.length > 0 ? (
													<select
														name="address"
														id="address"
														className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
														onChange={onChangeAddress}
														defaultValue={pickedAddress}
													>
														<option value="">Pick an address</option>
														{userAddress.map((address, index) => {
															return (
																<option key={index} value={address.id}>
																	{address.nama} - {address.kota}
																</option>
															);
														})}
													</select>
												) : (
													<Link to="/Address" className="btn btn-primary">
														No Address Found, Add An Address
													</Link>
												)}
											</div>

											<div className="md:col-span-2">
												<label htmlFor="stok">Stock: </label>
												<div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
													<input
														type="number"
														min="0"
														className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
														id="stok"
														value={stok}
														onChange={(e) => setStok(e.target.value)}
													/>
												</div>
											</div>

											<div className="md:col-span-3">
												<label htmlFor="harga">Product Price: </label>
												<div className="h-10  bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
													<input
														type="number"
														min="0"
														className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
														id="harga"
														value={harga}
														onChange={(e) => setHarga(e.target.value)}
													/>
												</div>
											</div>
											<div className="md:col-span-5">
												<label
													htmlFor="details"
													className="block mb-2 text-sm text-gray-900"
												>
													Product Details:
												</label>
												<textarea
													id="details"
													rows="4"
													className="mb-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
													value={details}
													onChange={(e) => setDetails(e.target.value)}
												></textarea>
											</div>

											<div className="md:col-span-2">
												<div className="form-check">
													<input
														type="radio"
														className="form-check-input"
														id="putOnSale"
														checked={saleStatus === "OnSale"}
														onChange={() => handleSaleStatusChange("OnSale")}
													/>
													<label
														className="form-check-label"
														htmlFor="putOnSale"
													>
														Put Product On Sale
													</label>
												</div>
											</div>
											<div className="md:col-span-2">
												<div className="form-check">
													<input
														type="radio"
														className="form-check-input"
														id="haltSale"
														checked={saleStatus === "Halted"}
														onChange={() => handleSaleStatusChange("Halted")}
													/>
													<label
														className="form-check-label"
														htmlFor="haltSale"
													>
														Halt Sale
													</label>
												</div>
											</div>

											<div className="md:col-span-5 text-right">
												<div className="inline-flex items-end">
													<button
														className="mt-3 bg-blue hover:bg-darkGrayishBlue text-white font-bold py-2 px-4 rounded"
														type="submit"
													>
														Submit
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
			<ToastNotification
				message={toastMessage}
				setMessage={setToastMessage}
				type={toastType}
			/>
		</>
	);
};

export default AddProduct;
