import React from "react";

class SuccessPopup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		};
	}

	render() {
		const { show } = this.state;
		return (
			<div className="text-center">
				{/* Button HTML (to Trigger Modal) */}
				<a
					className="trigger-btn btn-primary"
					onClick={() => this.setState({ show: true })}
				>
					Click to Open Confirm Modal
				</a>

				{/* Modal HTML */}
				<div
					id="myModal"
					className={`modal fade ${show ? "show" : ""}`}
					style={{ display: show ? "block" : "none" }}
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden={!show}
				>
					<div className="modal-dialog modal-confirm" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<div className="icon-box">
									<i className="material-icons">&#xE876;</i>
								</div>
								<h4 className="modal-title w-100">Awesome!</h4>
							</div>
							<div className="modal-body">
								<p className="text-center">
									Your booking has been confirmed. Check your email for details.
								</p>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-success btn-block"
									onClick={() => this.setState({ show: false })}
								>
									OK
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`modal-backdrop fade ${show ? "show" : ""}`}
					style={{ display: show ? "block" : "none" }}
				></div>
			</div>
		);
	}
}

export default SuccessPopup;
