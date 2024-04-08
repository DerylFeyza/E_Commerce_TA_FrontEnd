import { getLocalStorage } from "../../utils/LocalStorage";
import { LOCAL_STORAGE_USER } from "../../utils/http-common";
import { useState, useEffect } from "react";
import {
	getUserAddress,
	addAddress,
	deleteAddress,
	updateAddress,
} from "../../services/address";
import SmallTown from "../../assets/SmallTown.svg";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import "./Address.css";
const AddressPage = () => {
	const [userData] = useState(getLocalStorage(LOCAL_STORAGE_USER));
	const [address, setAddress] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [initialData, setInitialData] = useState(null);

	useEffect(() => {
		retrieveAddresses();
	}, []);

	const retrieveAddresses = async () => {
		try {
			const res = await getUserAddress();
			setAddress(res.data);
			console.log("walawe");
		} catch (err) {
			console.log(err);
		}
	};

	const handleDelete = async (id) => {
		try {
			await deleteAddress(id);
			retrieveAddresses();
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdate = async (id, values) => {
		try {
			await updateAddress(id, values);
			retrieveAddresses();
		} catch (error) {
			console.log(error);
		}
	};

	const updateForm = (addressData) => {
		setInitialData(addressData);
		setShowModal(true);
	};

	const handleAdd = async (values) => {
		try {
			const res = await addAddress(values);
			retrieveAddresses();
			return res;
		} catch (error) {
			console.log(error);
		}
	};

	const openModal = () => {
		setInitialData(null);
		setShowModal(true);
	};

	return (
		<>
			<div className="container-address">
				<div className="left-column">
					<h1 className="" style={{ fontSize: "60px" }}>
						{userData.username}&apos;s Addresses
					</h1>
					<img
						src={SmallTown}
						alt="Small Town Illustration"
						className="small-town-img"
						style={{ width: "80%", height: "auto" }}
					/>
					<button className="btn btn-primary" onClick={openModal}>
						Add Address
					</button>
					<AddressForm
						HandleAdd={handleAdd}
						initialData={initialData}
						showModal={showModal}
						setShowModal={setShowModal}
					/>
				</div>
				<div className="right-column">
					<div className="address-card-container">
						{address.length > 0 ? (
							address.map((address, index) => (
								<div key={index}>
									<AddressCard
										UserAddress={address}
										HandleDelete={handleDelete}
										TriggerUpdateForm={updateForm}
									/>
								</div>
							))
						) : (
							<p className="no-address">No address has been added</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default AddressPage;