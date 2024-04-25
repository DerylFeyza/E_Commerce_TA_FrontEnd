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
				console.log(product);
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
				console.log("updating...");
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
	};

	return (
		<>
			{/* <section className="py-5">
				<form onSubmit={handleSubmit}>
					<div className="container px-4 px-lg-5 my-5">
						<div className="row gx-4 gx-lg-5 align-items-center">
							<input
								type="file"
								className="form-control"
								id="gambar_barang"
								onChange={handleImageChange}
							/>
							<div className="col-md-6">
								<label htmlFor="nama_barang" className="form-label">
									Nama Barang
								</label>
								<input
									type="text"
									className="form-control"
									id="nama_barang"
									value={namaBarang}
									onChange={(e) => setNamaBarang(e.target.value)}
								/>
								<label htmlFor="kategori" className="form-label">
									Kategori
								</label>
								<input
									type="text"
									className="form-control"
									id="kategori"
									value={kategori}
									onChange={(e) => setKategori(e.target.value)}
								/>
								<label htmlFor="harga" className="form-label">
									Harga
								</label>
								<input
									type="number"
									className="form-control"
									id="harga"
									value={harga}
									onChange={(e) => setHarga(e.target.value)}
								/>
								<label htmlFor="stok" className="form-label">
									Stok
								</label>
								<input
									type="number"
									className="form-control"
									id="stok"
									value={stok}
									onChange={(e) => setStok(e.target.value)}
								/>
								{userAddress.length > 0 ? (
									<div className="col-md-6">
										<div className="input-group">
											<select
												className="form-select"
												aria-label="Default select example"
												onChange={onChangeAddress}
											>
												{userAddress.map((address, index) => {
													return (
														<option
															key={index}
															value={address.id}
															selected={address.id === pickedAddress}
														>
															{address.nama} - {address.kota}
														</option>
													);
												})}
											</select>
										</div>
									</div>
								) : (
									<div className="col-md-6">
										<Link to="/Address" className="btn btn-primary">
											No Address Found, Add An Address
										</Link>
									</div>
								)}
								<label htmlFor="details" className="form-label">
									Details
								</label>
								<textarea
									className="form-control"
									id="details"
									value={details}
									onChange={(e) => setDetails(e.target.value)}
								></textarea>
								<div className="form-check">
									<input
										type="radio"
										className="form-check-input"
										id="putOnSale"
										checked={saleStatus === "OnSale"}
										onChange={() => handleSaleStatusChange("OnSale")}
									/>
									<label className="form-check-label" htmlFor="putOnSale">
										Put product on Sale
									</label>
								</div>
								<div className="form-check">
									<input
										type="radio"
										className="form-check-input"
										id="haltSale"
										checked={saleStatus === "Halted"}
										onChange={() => handleSaleStatusChange("Halted")}
									/>
									<label className="form-check-label" htmlFor="haltSale">
										Halt Sale
									</label>
								</div>
								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							</div>
						</div>
					</div>
				</form>
			</section> */}

			<form onSubmit={handleSubmit}>
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
													>
														{userAddress.map((address, index) => {
															return (
																<option
																	key={index}
																	value={address.id}
																	selected={address.id === pickedAddress}
																>
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
		</>
	);
};

export default AddProduct;
