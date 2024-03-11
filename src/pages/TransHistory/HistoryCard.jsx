import "./TransactionHistory.css";
import purchaseSuccessImage from "../../assets/purchase-success.png";
import { Link } from "react-router-dom";

const HistoryCard = (HistoryData) => {
	const dateString = new Date(HistoryData.updatedAt).toLocaleDateString(
		"en-US",
		{ timeZone: "Asia/Jakarta" }
	);
	const timeString = new Date(HistoryData.updatedAt).toLocaleTimeString(
		"en-US",
		{ timeZone: "Asia/Jakarta" }
	);
	return (
		<>
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
						{dateString} on {timeString}
					</p>
					<p>$ {HistoryData.totalharga}</p>
					<div className="button-container-history">
						<Link to={`/receipt/${HistoryData.id}`} className="btn btn-success">
							View Details
						</Link>
						<button className="btn btn-danger">Delete History</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default HistoryCard;
