import { useState, useEffect } from "react";
import { getTransactionHistory } from "../../services/cart";
import HistoryCard from "./HistoryCard";
import "./TransactionHistory.css";

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

	return (
		<>
			{console.log(transactionHistory)}

			<div className="transaction-container">
				<div>
					{transactionHistory.map((transactionHistory, index) => (
						<HistoryCard key={index} {...transactionHistory} />
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
