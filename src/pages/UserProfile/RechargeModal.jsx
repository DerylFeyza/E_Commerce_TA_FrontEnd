import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const RechargeModal = ({ show, handleClose, handleRecharge }) => {
	const [amount, setAmount] = useState(0);

	const handleSubmit = () => {
		handleRecharge(amount);
		setAmount(0);
		handleClose();
	};

	return (
		<Modal show={show} onHide={handleClose} centered>
			<Modal.Header closeButton>
				<Modal.Title>Recharge Account</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId="rechargeAmount">
						<Form.Label>Amount</Form.Label>
						<Form.Control
							type="number"
							value={amount === 0 ? "" : amount}
							onChange={(ev) => setAmount(ev.target.value)}
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleSubmit}>
					Submit
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

RechargeModal.propTypes = {
	show: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	handleRecharge: PropTypes.func.isRequired,
};

export default RechargeModal;
