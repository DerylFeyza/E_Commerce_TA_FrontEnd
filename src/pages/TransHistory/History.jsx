import { useState, useEffect } from "react";
import { getTransactionHistory } from "../../services/receipt";
import HistoryCard from "./HistoryCard";
import purchaseSuccessImage from "../../assets/purchase-success.png";

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
			<div className="history-container mx-auto mt-5 pt-5">
				<div className="flex flex-wrap mx-3 mb-5">
					<div className="w-full max-w-full px-3 mb-6 mx-auto">
						<div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
							<div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
								<div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
									<h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
										<span className="mr-3 font-semibold text-4xl text-black">
											Transaction History
										</span>
									</h3>
								</div>
								<div className="flex-auto block py-8 pt-6 px-9">
									<table className="w-full my-0 align-middle text-dark border-neutral-200">
										<thead className="align-bottom">
											<tr className="font-semibold text-secondary-dark">
												<th className="pb-3 pr-10 text-end text-black"></th>
												<th className="pb-3 min-w-[100px] text-black">Total</th>
												<th className="pb-3 text-black">Date</th>
												<th className="pb-3 text-black">Action</th>
											</tr>
										</thead>
										<tbody className="align-middle overflow-y-auto">
											{transactionHistory.map((transaction, index) => (
												<HistoryCard key={index} historyData={transaction} />
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
