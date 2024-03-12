import PropTypes from "prop-types";
import "./TransactionHistory.css";
import purchaseSuccessImage from "../../assets/purchase-success.png";
import { Link } from "react-router-dom";

const HistoryCard = ({ historyData, handleDelete }) => {
	const dateString = new Date(historyData.updatedAt).toLocaleDateString(
		"en-US",
		{ timeZone: "Asia/Jakarta" }
	);
	const timeString = new Date(historyData.updatedAt).toLocaleTimeString(
		"en-US",
		{ timeZone: "Asia/Jakarta" }
	);

	const handleDeleteReceipt = async (id) => {
		handleDelete(id);
	};

	return (
		<div className="purchase-success-container">
			<div className="purchase-success">
				<div className="image-container">
					<img
						src={purchaseSuccessImage}
						alt="Purchase success"
						className="success-image"
					/>
				</div>
				<h3>Purchase success</h3>
				<p>
					{dateString} on {timeString} UTC+7
				</p>
				<p>$ {historyData.totalharga}</p>
				<div className="button-container-history">
					<Link to={`/receipt/${historyData.id}`} className="btn btn-success">
						View Details
					</Link>
					<div
						className="btn btn-danger"
						type="button"
						onClick={() => handleDeleteReceipt(historyData.id)}
					>
						Delete
					</div>
				</div>
			</div>
		</div>
	);
};

HistoryCard.propTypes = {
	historyData: PropTypes.shape({
		id: PropTypes.number.isRequired,
		updatedAt: PropTypes.string.isRequired,
		totalharga: PropTypes.number.isRequired,
	}).isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default HistoryCard;
