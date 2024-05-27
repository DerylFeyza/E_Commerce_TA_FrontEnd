import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { imageFetcher } from "../../services/products";
import PropTypes from "prop-types";
import ToastNotification from "../../components/ToastNotification";

const RestockForm = ({ Product, showModal, setShowModal, HandleRestock }) => {
	const [restock, setRestock] = useState(0);
	const [toastMessage, setToastMessage] = useState("");

	const handleClose = () => {
		setShowModal(false);
	};

	const handleSave = async (e) => {
		e.preventDefault();
		try {
			if (restock < 0) {
				setToastMessage("Stock has not been updated");
			} else {
				const res = await HandleRestock(Product.id, restock);
				if (res === "success") {
					setRestock(0);
				}
			}
		} catch (error) {
			console.log("failed to add product", error);
		}
	};

	if (!Product) return null;

	return (
		<>
			<Modal
				show={showModal}
				className="restock-form"
				onHide={handleClose}
				centered
			>
				<Modal.Header>
					<Modal.Title>Restock Product</Modal.Title>
				</Modal.Header>
				<Form onSubmit={(e) => handleSave(e)}>
					<Modal.Body className="restock-form-container">
						<img
							src={imageFetcher(Product.gambar_barang)}
							className="restock-product-image"
							alt={Product.nama_barang}
						/>
						<div className="product-information-container">
							<h2>{Product.nama_barang}</h2>
							<h5>Stock Remaining: {Product.stok}</h5>
							<Form.Group controlId="restock" className="restock-form">
								<Form.Control
									type="number"
									min="0"
									value={restock === 0 ? "" : restock}
									onChange={(ev) => setRestock(ev.target.value)}
								/>
							</Form.Group>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="warning" type="submit">
							Restock
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
			<ToastNotification
				message={toastMessage}
				setMessage={setToastMessage}
				type="error"
			/>
		</>
	);
};

RestockForm.propTypes = {
	Product: PropTypes.object,
	showModal: PropTypes.bool.isRequired,
	setShowModal: PropTypes.func.isRequired,
	HandleRestock: PropTypes.func.isRequired,
};

export default RestockForm;
