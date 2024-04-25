import { useState, useEffect } from "react";
import { getProductById } from "../../services/products";
import { useParams } from "react-router-dom";
import DetailLayout from "./DetailsCard";

const ProductDetails = () => {
	const { id } = useParams();
	const [product, setProduct] = useState();
	const [additional, setAdditional] = useState([]);

	useEffect(() => {
		const retrieveProductById = async () => {
			try {
				const res = await getProductById(id);
				setProduct(res.data);
				setAdditional(res.additional_info);
			} catch (err) {
				console.log(err);
			}
		};

		retrieveProductById();
	}, [id]);

	if (!product || !additional) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className="ProductDetails-container">
				<div className="product">
					{console.log(additional[0].nama_toko)}
					<div>
						<DetailLayout product={product} additional={additional} />
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetails;
