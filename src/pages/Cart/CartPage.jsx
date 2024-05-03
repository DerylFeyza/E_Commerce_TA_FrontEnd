import PropTypes from "prop-types";
import { BASE_API } from "../../utils/http-common";
import { Link } from "react-router-dom";

const CartPage = ({ CartData, actions }) => {
  const handleQuantityChange = (idProduct, e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "" || (value > 0 && !isNaN(value))) {
      actions.handleQuantityChange(idProduct, value);
    } else {
      console.log("icikiwir");
    }
  };

  const handleBlur = (e, index) => {
    const value = e.target.value;

    if (value == 0) {
      e.target.value = 1;
      handleQuantityChange(CartData.products[index]?.id, e);
    }
    if (value > CartData.products[index]?.stok) {
      e.target.value = CartData.products[index]?.stok;
      handleQuantityChange(CartData.products[index]?.id, e);
    }
  };

  const handleDeleteItem = (idProduk) => {
    actions.handleDelete(idProduk);
  };

  const handleCheckout = () => {
    actions.handleCheckout();
  };

  return (
    <div className="cart_section">
      <div className="container-fluid pt-10 ">
        <div className="row flex flex-col space-y-4">
          <div className="col-lg-10 offset-lg-1">
            <div className="cart_container ">
              <div className="cart_items">
                <div className="flex flex-row">
                  <ul className="cart_list rounded-l-lg">
                    <div className="font-semibold-900 pt-8 text-4xl">
                   <h3 className="font-bold">Keranjangmu</h3> 
                    </div>
                    {CartData.cartItems.map((data, index) => (
                      <li className="cart_item clearfix" key={data.id}>
                        <hr class="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                        <div className="cart_item_image pl-5">
                          <img
                            src={`${BASE_API}/produk/image/${CartData.products[index]?.gambar_barang}`}
                            alt={CartData.products[index]?.nama_barang}
                          />
                          {console.log(CartData.products[index]?.gambar_barang)}
                        </div>
                        <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                          <div className="cart_item_name cart_info_col">
                            <div className="cart_item_text mt-1  font-semibold">
                              {CartData.products[index]?.nama_barang}
                            </div>
                            <div className="cart_item_text mt-2 font-bold">
                              Rp.
                              {CartData.products[index]?.harga}
                            </div>
                            <div className="cart_item_text mt-1">
                              <input
                                id="quantity"
                                type="number"
                                onBlur={(e) => handleBlur(e, index)}
                                onChange={(e) =>
                                  handleQuantityChange(
                                    CartData.products[index]?.id,
                                    e
                                  )
                                }
                                value={CartData.cartItems[index]?.quantity}
                                className="form-control quantity-input "
                              />
                            </div>
                            <div>
                              <div
                                className="cart_item_text btn btn-danger"
                                type="button"
                                onClick={() =>
                                  handleDeleteItem(CartData.products[index]?.id)
                                }
                              >
                                Delete {CartData.products[index]?.id}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="total px-20 rounded-r-lg">
                    <h3 className="mb-10 mt-12">Ringkasan</h3>
                    <hr class="h-px my-8 bg-gray-500 border-2 dark:bg-black-700"></hr>
                    <div className="order_total mt-2">
                      <div className="order_total_content text-md-right mt-1">
                        <div className="order_total_title">Order Total:</div>
                        <div className="order_total_amount">
                            Rp.{CartData.cartInfo.totalharga}
                        </div>
                      </div>
                    </div>
                    <div
                      className="button cart_button_checkout mt-2"
                      type="button "
                      onClick={handleCheckout}
                    >
                      Checkout
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart_buttons">
                <Link to="/home" className="button cart_button_clear">
                  Continue Shopping
                </Link>
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
  actions: PropTypes.shape({
    handleDelete: PropTypes.func.isRequired,
    handleQuantityChange: PropTypes.func.isRequired,
    handleCheckout: PropTypes.func.isRequired,
  }),
};

export default CartPage;
