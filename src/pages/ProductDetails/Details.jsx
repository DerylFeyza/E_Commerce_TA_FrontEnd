import { useState, useEffect } from "react";
import { getProductById } from "../../services/products";
import { BASE_API } from "../../utils/http-common";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const IMAGEURL = `${BASE_API}/produk/image/${product.gambar_barang}`;

	useEffect(() => {
		const retrieveProductById = async () => {
			try {
				const res = await getProductById(id);
				console.log(res);
				setProduct(res.data);
			} catch (err) {
				console.log(err);
			}
		};

		retrieveProductById();
	}, [id]);

	if (!product) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className="ProductDetails-container">
				<div className="product">
					<h2>{product.nama_barang}</h2>
					<p>
						<strong>Kategori:</strong> {product.kategori}
					</p>
					<p>
						<strong>Harga:</strong> ${product.harga}
					</p>
					<p>
						<strong>Stok:</strong> {product.stok}
					</p>
					<img src={IMAGEURL} alt={product.nama_barang} />
					<p>
						<strong>Deskripsi:</strong> {product.details}
					</p>
				</div>
			</div>
		</>
	);
};

export default ProductDetails;
