import { useState, useEffect } from "react";
import {
	getTransactionHistory,
	deleteUserReceipt,
} from "../../services/receipt";
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

	const handleDelete = async (id) => {
		try {
			await deleteUserReceipt(id);
			retrieveTransactionHistory();
		} catch (error) {
			console.log(error);
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
						<HistoryCard
							key={index}
							historyData={transaction}
							handleDelete={handleDelete}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
