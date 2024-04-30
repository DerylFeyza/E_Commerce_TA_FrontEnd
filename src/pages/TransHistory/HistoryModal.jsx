import { Modal } from "react-bootstrap";
import { FaShop } from "react-icons/fa6";
import PropTypes from "prop-types";

const HistoryModal = ({
	showModal,
	setShowModal,
	History,
	userData,
	shopList,
	receiptDetails,
}) => {
	const handleClose = () => {
		setShowModal(false);
	};

	if (!History || !receiptDetails || !userData) return null;

	return (
		<Modal
			show={showModal}
			size="xl"
			className="history-modal custom-modal"
			onHide={handleClose}
			centered
		>
			{console.log(receiptDetails)}
			<Modal.Header className="history-modal-header">
				<Modal.Title className="text-white">Purchase Info</Modal.Title>
			</Modal.Header>
			<Modal.Body className="history-modal-body">
				<div className="history-modal-body-container">
					<h3>Date: {new Date(History.updatedAt).toDateString()}</h3>
					<div className="receipt-info">
						<div className="container">
							<h4>Receipt #{History.id}</h4>
							<h3>{userData}</h3>
						</div>
					</div>
					<div className="receipt-details-card">
						{receiptDetails.map((item, index) => (
							<div key={index} className="receipt-details-container-card">
								<div className="left-column-history-card">
									<div className="receipt-card-product-title fw-normal fs-5 mb-3">
										{item.namaproduk}
									</div>
									<div className="fw-bold fs-4">
										{item.quantity} x{"  Rp."}
										{item.hargaproduk}
									</div>
									<div className="fw-normal fs-5 flex mt-2">
										<FaShop className="mt-1 mr-3" />
										{shopList[index].nama_toko}
									</div>
								</div>
								<div className="right-column-history-card">
									<p className="fs-3">Total</p>

									<div className="fs-2 fw-bolder">Rp. {item.total}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer className="history-modal-footer">
				<div className="fw-bolder fs-2 total-container-history">
					Total: {History.totalharga}
				</div>
			</Modal.Footer>
		</Modal>
	);
};

HistoryModal.propTypes = {
	showModal: PropTypes.bool.isRequired,
	setShowModal: PropTypes.func.isRequired,
	History: PropTypes.object,
	userData: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	shopList: PropTypes.arrayOf(PropTypes.object),
	receiptDetails: PropTypes.arrayOf(PropTypes.object),
};

export default HistoryModal;
