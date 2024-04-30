import { useEffect, useState } from "react";
import { getUserInfo, userRecharge } from "../../services/user";
import RechargeModal from "./RechargeModal";

const ProfileCard = () => {
	const [userData, setUserData] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);

	useEffect(() => {
		retrieveUserData();
	}, []);

	const retrieveUserData = async () => {
		try {
			const data = await getUserInfo();
			setUserData(data.data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleRecharge = async (value) => {
		await userRecharge(value);
		retrieveUserData();
	};

	return (
		<>
			<section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
				<div className="container py-5 h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col col-lg-6 mb-4 mb-lg-0">
							<div className="card mb-3" style={{ borderRadius: ".5rem" }}>
								<div className="row g-0">
									<div className="col-md-8">
										<div className="card-body p-4">
											<h6>User Information</h6>
											<hr className="mt-0 mb-4" />
											<h6>Email</h6>
											<p className="text-muted">{userData.email}</p>
											<h6>Username</h6>
											<p className="text-muted">{userData.username}</p>
											<h6>Role</h6>
											<p className="text-muted">{userData.role}</p>
											{userData.role === "seller" && (
												<>
													<h6>Shop Name</h6>
													<p className="text-muted">{userData.nama_toko}</p>
												</>
											)}
											<div className="col-6 mb-3">
												<h6>Balance</h6>
												<p className="text-muted">{userData.saldo}</p>
											</div>
											<button
												onClick={handleShowModal}
												className="btn restock-btn btn-success"
											>
												Recharge Account
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<RechargeModal
				show={showModal}
				handleClose={handleCloseModal}
				handleRecharge={handleRecharge}
			/>
		</>
	);
};

export default ProfileCard;
