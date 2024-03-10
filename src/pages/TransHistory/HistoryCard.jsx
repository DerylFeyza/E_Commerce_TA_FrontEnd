import "./TransactionHistory.css";
import purchaseSuccessImage from "../../assets/purchase-success.png";

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
						<button>View Details</button>
						<button className="delete-button">Delete History</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default HistoryCard;
