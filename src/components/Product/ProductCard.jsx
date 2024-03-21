import PropTypes from "prop-types";
import { BASE_API } from "../../utils/http-common";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import "./Product.css"

const ProductCard = () => {
	// const IMAGEURL = `${BASE_API}/produk/image/${product.gambar_barang}`;
	return (
		<>
        <section className="card-container">
        <section className="card">
            <img src="https://www.czone.com.pk/images/thumbnails-large/4-czone.com.pk-1540-12851-280122064621.jpg" className="card-img"></img>
			<div className="card-detail">
				<h6 className="card-title">Lenovo Legion 9 Series</h6>
				<h5 className="harga">Rp. 79.699.000</h5>
			</div>
			<div className="loc">
			<GrLocation /> Jakarta Pusat
			</div>
        </section>
		<section className="card">
            <img src="https://www.czone.com.pk/images/thumbnails-large/4-czone.com.pk-1540-12851-280122064621.jpg" className="card-img"></img>
			<div className="card-detail">
				<h6 className="card-title">Lenovo Legion 9 Series</h6>
				<h5 className="harga">Rp. 79.699.000</h5>
			</div>
			<div className="loc">
			<GrLocation /> Jakarta Pusat
			</div>
        </section>
		<section className="card">
            <img src="https://www.czone.com.pk/images/thumbnails-large/4-czone.com.pk-1540-12851-280122064621.jpg" className="card-img"></img>
			<div className="card-detail">
				<h6 className="card-title">Lenovo Legion 9 Series</h6>
				<h5 className="harga">Rp. 79.699.000</h5>
			</div>
			<div className="loc">
			<GrLocation /> Jakarta Pusat
			</div>
        </section>
		<section className="card">
            <img src="https://www.czone.com.pk/images/thumbnails-large/4-czone.com.pk-1540-12851-280122064621.jpg" className="card-img"></img>
			<div className="card-detail">
				<h6 className="card-title">Lenovo Legion 9 Series</h6>
				<h5 className="harga">Rp. 79.699.000</h5>
			</div>
			<div className="loc">
			<GrLocation /> Jakarta Pusat
			</div>
        </section>
		<section className="card">
            <img src="https://www.czone.com.pk/images/thumbnails-large/4-czone.com.pk-1540-12851-280122064621.jpg" className="card-img"></img>
			<div className="card-detail">
				<h6 className="card-title">Lenovo Legion 9 Series</h6>
				<h5 className="harga">Rp. 79.699.000</h5>
			</div>
			<div className="loc">
			<GrLocation /> Jakarta Pusat
			</div>
        </section>
        </section>
        </>
	);
};


export default ProductCard;
