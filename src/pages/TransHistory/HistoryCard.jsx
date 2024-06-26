import PropTypes from "prop-types";
import purchaseSuccessImage from "../../assets/purchase-success.png";
import { propTypes } from "react-bootstrap/esm/Image";

const HistoryCard = ({ historyData, modalShow }) => {
	const dateString = new Date(historyData.createdAt).toLocaleDateString(
		"en-US",
		{ timeZone: "Asia/Jakarta" }
	);
	const timeString = new Date(historyData.createdAt).toLocaleTimeString(
		"en-US",
		{ timeZone: "Asia/Jakarta" }
	);

	return (
		<tr className="border-b border-neutral-200 history-table-row">
			<td className="py-4 pr-10 text-black flex items-center justify-center flex-col">
				<div className="image-container">
					<img
						src={purchaseSuccessImage}
						className="image-content"
						alt="purchase-success-image"
					/>
				</div>
				<p className="font-bold mt-2 text-center">Purchase Successful</p>
			</td>

			<td className="py-4 text-black pr-3">Rp. {historyData.totalharga}</td>
			<td className="py-4 text-black pr-3">
				{dateString}
				<br />
				{timeString}
			</td>
			<td className="py-4 text-black">
				<button
					className="bg-blue hover:bg-darkGrayishBlue text-white font-bold py-2 px-4 rounded"
					style={{ width: "auto", height: "auto" }}
					onClick={() => modalShow(historyData.id)}
				>
					View Details
				</button>
			</td>
		</tr>
	);
};

HistoryCard.propTypes = {
	historyData: PropTypes.shape({
		id: PropTypes.number.isRequired,
		createdAt: PropTypes.string.isRequired,
		totalharga: PropTypes.number.isRequired,
	}).isRequired,
};

export default HistoryCard;
