import { useState } from "react";
import { addProduct } from "../../services/products";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
	const [namaBarang, setNamaBarang] = useState("");
	const [gambarBarang, setGambarBarang] = useState(null);
	const [kategori, setKategori] = useState("");
	const [harga, setHarga] = useState("");
	const [stok, setStok] = useState("");
	const [details, setDetails] = useState("");
	const [imagePreview, setImagePreview] = useState("");
	const navigate = useNavigate();

	const handleImageChange = (e) => {
		const file = e.target.files[0];
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
			const res = await addProduct(formData);
			if (res.success === true) {
				navigate("/home");
			}
			console.log(res);
		} catch (error) {
			console.log("failed to add product");
		}
	};

	return (
		<div className="container mt-5">
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
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
				</div>
				<div className="mb-3">
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
						<img src={imagePreview} className="img-fluid mt-2" alt="Preview" />
					)}
				</div>
				<div className="mb-3">
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
				</div>
				<div className="mb-3">
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
				</div>
				<div className="mb-3">
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
				</div>
				<div className="mb-3">
					<label htmlFor="details" className="form-label">
						Details
					</label>
					<textarea
						className="form-control"
						id="details"
						value={details}
						onChange={(e) => setDetails(e.target.value)}
					></textarea>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddProduct;
