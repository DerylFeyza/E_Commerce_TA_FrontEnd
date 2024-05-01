import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const SaleDetail = ({ showModal, setShowModal, userData, saleDetail }) => {
	const handleClose = () => {
		setShowModal(false);
	};

	if (!saleDetail || !userData) return null;

	return (
		<Modal
			show={showModal}
			size="xl"
			className="history-modal custom-modal-sale"
			onHide={handleClose}
			centered
		>
			<Modal.Header className="history-modal-header">
				<Modal.Title className="text-white">Sale Info</Modal.Title>
			</Modal.Header>
			<Modal.Body className="history-modal-body">
				<div className="history-modal-body-container">
					<h3>Date: {new Date(saleDetail.updatedAt).toDateString()}</h3>
					<div className="receipt-info">
						<div className="container">
							<h4>Purchased By: </h4>
							<h3>{userData}</h3>
						</div>
					</div>
					<div className="sale-details-card">
						<div className="receipt-details-container-card">
							<div className="left-column-history-card">
								<div className="receipt-card-product-title fw-normal fs-5 mb-3">
									{saleDetail.namaproduk}
								</div>
								<div className="fw-bold fs-4">
									{saleDetail.quantity} x{"  Rp."}
									{saleDetail.hargaproduk}
								</div>
							</div>
							<div className="right-column-history-card">
								<p className="fs-3">Total</p>
								<div className="fs-2 fw-bolder">Rp. {saleDetail.total}</div>
							</div>
						</div>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

SaleDetail.propTypes = {
	showModal: PropTypes.bool.isRequired,
	setShowModal: PropTypes.func.isRequired,
	userData: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	saleDetail: PropTypes.shape({
		updatedAt: PropTypes.string.isRequired,
		namaproduk: PropTypes.string.isRequired,
		quantity: PropTypes.number.isRequired,
		hargaproduk: PropTypes.number.isRequired,
		total: PropTypes.number.isRequired,
	}),
};
export default SaleDetail;
