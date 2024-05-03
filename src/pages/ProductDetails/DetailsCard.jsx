import { GrLocation } from "react-icons/gr";
import PropTypes from "prop-types";
import { BASE_API } from "../../utils/http-common";
import { useState } from "react";
import { addToCart } from "../../services/transaction";
import ToastNotification from "../../components/ToastNotification";
import iconLike from "../../assets/iconlike.png";
import iconShare from "../../assets/iconshare.png";

const DetailLayout = ({ product, additional }) => {
  const IMAGEURL = `${BASE_API}/produk/image/${product.gambar_barang}`;
  const [quantity, setQuantity] = useState(1);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === "" || (value > 0 && !isNaN(value))) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  const incrementQuantity = () => {
    if (quantity < product.stok) {
      setQuantity(quantity + 1);
    } else {
      setToastMessage("Insufficient Stock.");
      setToastType("warning");
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBlur = () => {
    if (quantity === "") {
      setQuantity(1);
    } else if (quantity > product.stok) {
      setQuantity(product.stok);
      setToastMessage("Insufficient Stock.");
      setToastType("warning");
    }
  };

  const handleAddToCart = async () => {
    const values = { id_produk: product.id, quantity: quantity };
    const res = await addToCart(values);
    if (res.status === "success") {
      setToastMessage("Product added to cart");
      setToastType("success");
    }
    if (res.status === "publisher") {
      setToastMessage("You can't buy your own products.");
      setToastType("error");
    }
  };

  return (
    <>
      <main>
        <div className="details-main-wrapper main-wrapper flex flex-col md:flex-row md:px-[200px] md:py-[100px] relative scroll-smooth">
          <div className="image md:w-[50%]">
            <div className="large-image">
              <img
                className="object-cover rounded-xl w-full md:w-[700px] h-[700px] mt-5"
                src={IMAGEURL}
                alt={product.nama_barang}
              />
            </div>
          </div>

          <div className="description p-6 md:w-[50%] md:py-[40px] mt-2">
            <p className="text-blue text-[14px] tracking-widest uppercase font-[700] mb-6">
              {additional[0].nama_toko}
            </p>

            <h1 className="text-3xl md:text-4xl capitalize font-[700] mb-2 ">
              {product.nama_barang}
            </h1>
            <p className="text-blue text-[20px] tracking-widest uppercase font-[700] flex items-center mb-6">
              <GrLocation className="mr-1" /> {additional[0].kota}
            </p>

            <h6 className="text-sm md:text-base mt-3">Stock: {product.stok}</h6>
            <p className="block text-darkGrayishBlue my-2 leading-7">
              {product.details}
            </p>

            <div className="price flex items-center mt-4">
              <span className="text-3xl font-[700]">Rp. {product.harga}</span>
            </div>
            <div className="buttons-container flex flex-col md:flex-row mt-6 space-x-10">
              <div className="state flex justify-center items-center space-x-6 rounded-lg p-3 md:p-2 md:mr-4 md:w-[150px]">
                <button
                  onClick={decrementQuantity}
                  className="minus text-[24px] md:text-[20px] font-[700] text-blue transition-all hover:opacity-50"
                >
                  -
                </button>
                <input
                  className=" md:text-[14px] font-bold text-center"
                  id="inputQuantity"
                  type="num"
                  value={quantity}
                  onChange={handleQuantityChange}
                  onBlur={handleBlur}
                  style={{ maxWidth: "4rem" }}
                />
                <button
                  onClick={incrementQuantity}
                  className="plus text-[24px] md:text-[20px] font-[700] text-blue transition-all hover:opacity-50"
                >
                  +
                </button>
              </div>

              <img src={iconLike} alt="iconlike" width={45} height={35} />
              <img src={iconShare} alt="iconshare" width={45} height={35} />
            </div>
            <button
              className="add-btn border-none bg-indigo-500 rounded-lg text-white font-[700] px-[70px] py-[18px] mt-4 md:mt-0 md:py-0 md:text-[14px] transition-all btn-shadow hover:opacity-50 h-10"
              type="button"
              onClick={handleAddToCart}
            >
              + Keranjang
            </button>
          </div>
        </div>
        <div>
          <div className=" h-20 grid justify-items-start ">
            <div className="p min-w-max">
              <ul className="hidden md:flex space-x-10 min-w-max py-4">
                <li>
                  <a
                    className="text-white transition-all hover:border-b-4 border-white hover:pb-[20px] hover:text-black "
                    href="#"
                  >
                    Deskripsi
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition-all hover:border-b-4 border-white hover:pb-[10px] hover:text-black"
                    href="#"
                  >
                    Ulasan
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition-all hover:border-b-4 border-white hover:pb-[10px] hover:text-black"
                    href="#"
                  >
                    Diskusi
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition-all hover:border-b-4 border-white hover:pb-[10px] hover:text-black"
                    href="#"
                  >
                    Rekomendasi
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="Deskipsi details-main-wrapper main-wrapper flex flex-col md:flex-col md:px-[200px] md:py-[100px] relative scroll-smooth">
            <div
              className="mt-[-3rem] size-50"
              style={{ marginLeft: "-10rem" }}
            >
              <h1 className="text-3xl md:text-3xl capitalize font-[700] mb-5 ">
                {product.nama_barang}
              </h1>
            </div>
            <div className="flex">
              <div className="ml-[-10rem]">
                <p className="block text-darkGrayishBlue">{product.details}</p>
              </div>
              <div className="container "></div>
            </div>
          </div>
        </div>

        <ToastNotification
          message={toastMessage}
          setMessage={setToastMessage}
          type={toastType}
        />
      </main>
    </>
  );
};

DetailLayout.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nama_barang: PropTypes.string.isRequired,
    gambar_barang: PropTypes.string.isRequired,
    kategori: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    harga: PropTypes.number.isRequired,
    stok: PropTypes.number.isRequired,
  }),
  additional: PropTypes.arrayOf(
    PropTypes.shape({
      nama_toko: PropTypes.string,
      kota: PropTypes.string,
    })
  ),
};

export default DetailLayout;
