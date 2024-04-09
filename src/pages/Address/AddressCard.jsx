import PropTypes from "prop-types";

const AddressCard = ({ UserAddress, HandleDelete, TriggerUpdateForm }) => {
	return (
		<div className="card mt-4">
			<div className="card-header">{UserAddress.nama}</div>
			<div className="card-body">
				<h5 className="card-title">{UserAddress.kota}</h5>
				<p className="card-text">{UserAddress.alamat} </p>
				<div
					className="btn btn-success"
					type="button"
					onClick={() => TriggerUpdateForm(UserAddress)}
				>
					Update
				</div>
				<div
					className="btn btn-danger mx-2"
					type="button"
					onClick={() => HandleDelete(UserAddress.id)}
				>
					Delete
				</div>
			</div>
		</div>
	);
};

AddressCard.propTypes = {
	UserAddress: PropTypes.shape({
		id: PropTypes.number.isRequired,
		nama: PropTypes.string.isRequired,
		kota: PropTypes.string.isRequired,
		alamat: PropTypes.string.isRequired,
	}).isRequired,
	HandleDelete: PropTypes.func.isRequired,
	TriggerUpdateForm: PropTypes.func.isRequired,
};

export default AddressCard;
