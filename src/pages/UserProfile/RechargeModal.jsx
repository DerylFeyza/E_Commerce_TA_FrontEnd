import { useState } from "react";
import { Modal, Button, Form, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import ToastNotification from "../../components/ToastNotification";

const RechargeModal = ({ show, handleClose, handleRecharge }) => {
	const [amount, setAmount] = useState(0);
	const [cardNumber, setCardNumber] = useState("");
	const [expiryDate, setExpiryDate] = useState("");
	const [cvv, setCvv] = useState("");
	const [toastMessage, setToastMessage] = useState("");
	const [cardType, setCardType] = useState("Visa");

	const validateCreditCardNumber = (number) => {
		const regex = new RegExp("^[0-9]{16}$");
		if (!regex.test(number)) return false;

		let sum = 0;
		let shouldDouble = false;
		for (let i = number.length - 1; i >= 0; i--) {
			let digit = parseInt(number.charAt(i));

			if (shouldDouble) {
				digit *= 2;
				if (digit > 9) digit -= 9;
			}

			sum += digit;
			shouldDouble = !shouldDouble;
		}

		return sum % 10 === 0;
	};

	const handleSubmit = () => {
		if (!validateCreditCardNumber(cardNumber)) {
			setToastMessage("Invalid credit card number.");
		} else {
			handleRecharge(amount);
			setAmount(0);
			setCardNumber("");
			setExpiryDate("");
			setCvv("");
			handleClose();
		}
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
					<Nav
						fill
						variant="pills"
						className="mt-4 mb-4"
						activeKey={cardType}
						onSelect={(selectedKey) => setCardType(selectedKey)}
					>
						<Nav.Item>
							<Nav.Link eventKey="Visa">Visa</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="MasterCard">MasterCard</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="American Express">American Express</Nav.Link>
						</Nav.Item>
					</Nav>
					<Form.Group controlId="cardNumber" className="mt-4">
						<Form.Label>Card Number</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter card number"
							value={cardNumber}
							onChange={(ev) => setCardNumber(ev.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId="expiryDate" className="mt-4">
						<Form.Label>Expiry Date</Form.Label>
						<Form.Control
							type="text"
							placeholder="MM/YY"
							value={expiryDate}
							onChange={(ev) => setExpiryDate(ev.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId="cvv" className="mt-4">
						<Form.Label>CVV</Form.Label>
						<Form.Control
							type="text"
							placeholder="CVV"
							value={cvv}
							onChange={(ev) => setCvv(ev.target.value)}
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
			<ToastNotification
				message={toastMessage}
				setMessage={setToastMessage}
				type="error"
			/>
		</Modal>
	);
};

RechargeModal.propTypes = {
	show: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	handleRecharge: PropTypes.func.isRequired,
};

export default RechargeModal;
