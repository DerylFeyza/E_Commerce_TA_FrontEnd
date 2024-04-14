import { useState, useEffect } from "react";
import { getTransactionHistory } from "../../services/receipt";
import HistoryCard from "./HistoryCard";

const Home = () => {
	const [transactionHistory, setTransactionHistory] = useState([]);

	useEffect(() => {
		retrieveTransactionHistory();
	}, []);

	const retrieveTransactionHistory = async () => {
		try {
			const res = await getTransactionHistory();
			setTransactionHistory(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	if (!transactionHistory) {
		return <div>Loading...</div>;
	}

	return (
		<>
			{console.log(transactionHistory)}

			<div className="transaction-container">
				<div>
					{transactionHistory.reverse().map((transaction, index) => (
						<HistoryCard key={index} historyData={transaction} />
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
