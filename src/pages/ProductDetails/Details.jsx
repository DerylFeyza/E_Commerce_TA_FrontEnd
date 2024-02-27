import { useState, useEffect } from "react";
import { getProductById } from "../../services/products";
import { useParams } from "react-router-dom";
import DetailLayout from "./DetailsCard";

const ProductDetails = () => {
	const { id } = useParams();
	const [product, setProduct] = useState();

	useEffect(() => {
		const retrieveProductById = async () => {
			try {
				const res = await getProductById(id);
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
					<div>
						<DetailLayout product={product} />
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDetails;
