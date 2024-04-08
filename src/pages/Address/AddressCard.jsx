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
					className="btn btn-danger"
					type="button"
					onClick={() => HandleDelete(UserAddress.id)}
				>
					Delete
				</div>
			</div>
		</div>
	);
};

export default AddressCard;
