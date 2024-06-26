import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const AddressForm = ({
	HandleAdd,
	showModal,
	setShowModal,
	isUpdate,
	HandleUpdate,
}) => {
	const [onUpdate, setOnUpdate] = useState(false);
	const [nama, setNama] = useState("");
	const [kota, setKota] = useState("");
	const [alamat, setAlamat] = useState("");
	const [warning, setWarning] = useState(null);
	const handleClose = () => {
		setShowModal(false);
		setWarning(null);
	};

	useEffect(() => {
		if (showModal && isUpdate) {
			setNama(isUpdate.nama);
			setKota(isUpdate.kota);
			setAlamat(isUpdate.alamat);
			setOnUpdate(true);
		} else if (!isUpdate) {
			setNama("");
			setKota("");
			setAlamat("");
			setOnUpdate(false);
		}
	}, [showModal, isUpdate]);

	const handleSave = async (e) => {
		e.preventDefault();
		if (!nama || !kota || !alamat) {
			setWarning("Please fill out all fields");
			return;
		}
		const values = { nama, kota, alamat };
		try {
			if (onUpdate) {
				const res = await HandleUpdate(isUpdate.id, values);
				if (res.success === true) {
					setShowModal(false);
					setWarning(null);
					setAlamat("");
					setKota("");
					setNama("");
				}
				if (res.success === false) {
					setWarning(res.message);
				}
			} else {
				const res = await HandleAdd(values);
				if (res.success === true) {
					setShowModal(false);
					setWarning(null);
					setAlamat("");
					setKota("");
					setNama("");
				}
				if (res.success === false) {
					setWarning(res.message);
				}
			}
		} catch (error) {
			console.log("failed to add product", error);
		}
	};

	return (
		<>
			<Modal show={showModal} onHide={handleClose} centered>
				<Modal.Header>
					<Modal.Title>
						{onUpdate ? "Update Address" : "Add Address"}
					</Modal.Title>
				</Modal.Header>
				<Form onSubmit={(e) => handleSave(e)}>
					<Modal.Body className="">
						<Form.Group className="mb-3 " controlId="name">
							<Form.Label>Address Name</Form.Label>
							<Form.Control
								type="text"
								name="nama"
								placeholder="My Home"
								value={nama}
								onChange={(ev) => setNama(ev.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="city">
							<Form.Label>City</Form.Label>
							<Form.Control
								type="text"
								name="city"
								placeholder="Jakarta Pusat"
								value={kota}
								onChange={(ev) => setKota(ev.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="address">
							<Form.Label>Street</Form.Label>
							<Form.Control
								type="text"
								name="address"
								placeholder="Joe Biden Street No. 1"
								value={alamat}
								onChange={(ev) => setAlamat(ev.target.value)}
							/>
						</Form.Group>
						{warning && (
							<Form.Text className="text-danger">Warning: {warning}</Form.Text>
						)}
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={() => setShowModal(false)}>
							Close
						</Button>

						<Button variant="primary" type="submit">
							Save
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
};

AddressForm.propTypes = {
	HandleAdd: PropTypes.func.isRequired,
	showModal: PropTypes.bool.isRequired,
	setShowModal: PropTypes.func.isRequired,
	isUpdate: PropTypes.object,
	HandleUpdate: PropTypes.func.isRequired,
};

export default AddressForm;
