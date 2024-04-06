import ProductList from "../../components/Product/ProductList";
import ProductCarousel from "../../components/Product/ProductCarousel";
import { useState, useEffect } from "react";
import {
	getPaginatedDataProduct,
	getCheapestProducts,
} from "../../services/products";
import Carousel from "./Carousel";
import HomeAd from "./HomeAd";
import { Link } from "react-router-dom";

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
			<Carousel />
			<ProductCarousel products={carouselProducts} />
			<HomeAd />
			<div className="ProductListContainer-home">
				<h1>Khusus Untukmu</h1>
				<ProductList products={products} />
			</div>
			<div className="button-home-container">
				<Link to="/products" className="load-more-button-home ">
					Muat Lebih Banyak
				</Link>
			</div>
		</>
	);
}

export default Home;
