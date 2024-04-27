import PropTypes from "prop-types";
import purchaseSuccessImage from "../../assets/purchase-success.png";
import { Link } from "react-router-dom";

const HistoryCard = ({ historyData }) => {
	const dateString = new Date(historyData.createdAt).toLocaleDateString(
		"en-US",
		{ timeZone: "Asia/Jakarta" }
	);
	const timeString = new Date(historyData.createdAt).toLocaleTimeString(
		"en-US",
		{ timeZone: "Asia/Jakarta" }
	);

	return (
		<tr className="border-b border-neutral-200">
			<td className="py-4 pr-10 text-black flex items-center justify-center flex-col">
				<img
					src={purchaseSuccessImage}
					className="w-[155px] h-[155px] inline-block shrink-0 rounded-2xl"
					alt="purchase-success-image"
				/>
				<p className="font-bold mt-2 text-center">Purchase Successful</p>
			</td>

			<td className="py-4 text-black pr-3">Rp. {historyData.totalharga}</td>
			<td className="py-4 text-black pr-3">
				{dateString}
				<br />
				{timeString}
			</td>
			<td className="py-4 text-black">
				<Link
					to={`/receipt/${historyData.id}`}
					className="bg-blue hover:bg-darkGrayishBlue text-white font-bold py-2 px-4 rounded"
					style={{ textDecoration: "none" }}
				>
					View Details
				</Link>
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
