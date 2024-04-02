import ProductList from "../../components/Product/ProductList";
import ProductCarousel from "../../components/Product/ProductCarousel";
import { useState, useEffect } from "react";
import {
	getPaginatedDataProduct,
	getCheapestProducts,
} from "../../services/products";
import Carousel from "./Carousel";

function Home() {
	const [products, setProducts] = useState([]);
	const [carouselProducts, setCarouselProducts] = useState([]);

	useEffect(() => {
		retrieveProducts();
	}, []);

	const retrieveProducts = async () => {
		const queryParams = new URLSearchParams(window.location.search);
		const page = queryParams.get("page");
		try {
			const res = await getPaginatedDataProduct(page);
			const cheapestRes = await getCheapestProducts();
			setProducts(res.data);
			setCarouselProducts(cheapestRes.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<Carousel></Carousel>
			<ProductCarousel products={carouselProducts} />
			<ProductList products={products} />
		</>
	);
}

export default Home;
