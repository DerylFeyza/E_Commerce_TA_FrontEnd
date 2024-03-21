import { useState, useEffect } from "react";
import {
	addProduct,
	imageFetcher,
	getProductById,
	updateProduct,
} from "../../services/products";
import { useNavigate, useParams } from "react-router-dom";

const AddProduct = () => {
	const { id } = useParams();
	const [namaBarang, setNamaBarang] = useState("");
	const [gambarBarang, setGambarBarang] = useState(null);
	const [kategori, setKategori] = useState("");
	const [harga, setHarga] = useState("");
	const [stok, setStok] = useState("");
	const [details, setDetails] = useState("");
	const [imagePreview, setImagePreview] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const res = await getProductById(id);
				const product = res.data;
				setNamaBarang(product.nama_barang);
				setKategori(product.kategori);
				setHarga(product.harga);
				setStok(product.stok);
				setDetails(product.details);
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

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("nama_barang", namaBarang);
		formData.append("gambar_barang", gambarBarang);
		formData.append("kategori", kategori);
		formData.append("harga", harga);
		formData.append("stok", stok);
		formData.append("details", details);
		try {
			if (id) {
				console.log("updating...");
				const res = await updateProduct(id, formData);
				console.log(res);
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
			<section className="py-5">
				<form onSubmit={handleSubmit}>
					<div className="container px-4 px-lg-5 my-5">
						<div className="row gx-4 gx-lg-5 align-items-center">
							<div className="col-md-6">
								<label htmlFor="gambar_barang" className="form-label">
									Gambar Barang
								</label>
								<input
									type="file"
									className="form-control"
									id="gambar_barang"
									onChange={handleImageChange}
								/>
								{imagePreview && (
									<img
										src={imagePreview}
										className="img-fluid mt-2"
										alt="Preview"
									/>
								)}
							</div>
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
								<label htmlFor="details" className="form-label">
									Details
								</label>
								<textarea
									className="form-control"
									id="details"
									value={details}
									onChange={(e) => setDetails(e.target.value)}
								></textarea>
								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							</div>
						</div>
					</div>
				</form>
			</section>
		</>
	);
};

export default AddProduct;
