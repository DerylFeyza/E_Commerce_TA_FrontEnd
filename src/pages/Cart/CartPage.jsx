import "./Cart.css";
import PropTypes from "prop-types";
import { BASE_API } from "../../utils/http-common";

//ba

const CartPage = ({ CartData, handleDelete, qtyChange }) => {
  const handleQuantityChange = (idProduct, e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "" || (value > 0 && !isNaN(value))) {
      qtyChange(idProduct, value);
    } else {
      console.log("icikiwir");
    }
  };

  const handleBlur = (e, index) => {
    const value = e.target.value;

    if (value == 0) {
      e.target.value = 1;
      handleQuantityChange(CartData.products[index]?.data.id, e);
    }
    if (value > CartData.products[index]?.data.stok) {
      e.target.value = CartData.products[index]?.data.stok;
      handleQuantityChange(CartData.products[index]?.data.id, e);
    }
  };

  const handleDeleteItem = (idProduk) => {
    handleDelete(idProduk);
  };

  return (
    <div className="cart_section">
      {console.log(CartData)}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cart_container">
              <div className="cart_title">Shopping Cart</div>
              <div className="cart_items">
                <ul className="cart_list">
                  {CartData.cartItems.map((data, index) => (
                    <li className="cart_item clearfix" key={data.id}>
                      <div className="cart_item_image">
                        <img
                          src={`${BASE_API}/produk/image/${CartData.products[index]?.data?.gambar_barang}`}
                          alt={CartData.products[index]?.data.nama_barang}
                        />
                        {console.log(
                          CartData.products[index]?.data?.gambar_barang
                        )}
                      </div>
                      <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                        <div className="cart_item_name cart_info_col">
                          <div className="cart_item_title">Name</div>
                          <div className="cart_item_text">
                            {CartData.products[index]?.data.nama_barang}
                          </div>
                        </div>
                        <div className="cart_item_quantity cart_info_col">
                          <div className="cart_item_title">Quantity</div>
                          <div className="cart_item_text">
                            <input
                              id="quantity"
                              type="number"
                              onBlur={(e) => handleBlur(e, index)}
                              onChange={(e) =>
                                handleQuantityChange(
                                  CartData.products[index]?.data.id,
                                  e
                                )
                              }
                              value={CartData.cartItems[index]?.quantity}
                              className="form-control quantity-input"
                            />
                          </div>
                        </div>
                        <div className="cart_item_price cart_info_col">
                          <div className="cart_item_title">Price</div>
                          <div className="cart_item_text">
                            {CartData.products[index]?.data.harga}
                          </div>
                        </div>
                        <div className="cart_item_total cart_info_col">
                          <div className="cart_item_title">Total</div>
                          <div className="cart_item_text">
                            {CartData.cartItems[index]?.total}
                          </div>
                        </div>
                        <div className="cart_item_color cart_info_col">
                          <div className="cart_item_title">Action</div>
                          <div
                            className="cart_item_text btn btn-danger"
                            type="button"
                            onClick={() =>
                              handleDeleteItem(
                                CartData.products[index]?.data.id
                              )
                            }
                          >
                            Delete {CartData.products[index]?.data.id}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order_total">
                <div className="order_total_content text-md-right">
                  <div className="order_total_title">Order Total:</div>
                  <div className="order_total_amount">
                    {CartData.cartInfo.totalharga}
                  </div>
                </div>
              </div>
              <div className="cart_buttons">
                <button type="button" className="button cart_button_clear">
                  Continue Shopping
                </button>
                <button type="button" className="button cart_button_checkout">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartPage.propTypes = {
  CartData: PropTypes.shape({
    cartItems: PropTypes.arrayOf(PropTypes.object),
    products: PropTypes.arrayOf(PropTypes.object),
    cartInfo: PropTypes.shape({
      totalharga: PropTypes.number,
    }),
  }),
  handleDelete: PropTypes.func.isRequired,
  qtyChange: PropTypes.func.isRequired,
};

export default CartPage;
