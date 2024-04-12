const AddressPicker = ({ userAddress }) => {
	const placeholderAddresses = [
		{ id: 1, nama: "Home", kota: "Jakarta", alamat: "Jl Sokerna" },
		{ id: 2, nama: "Work", kota: "Malang", alamat: "Jl Danau Ranau" },
	];
	return (
		<div className="col-md-4">
			<div className="input-group">
				<select>
					{userAddress.map((address, index) => {
						{
							console.log(address.nama);
						}
						return (
							<option key={index} value={address.nama}>
								{address.nama} - {address.kota}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
};

export default AddressPicker;
