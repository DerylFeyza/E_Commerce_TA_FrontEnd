const Unauthorized = () => {
	const handleBack = () => {
		history.go(-1);
	};
	return (
		<div className="d-flex align-items-center justify-content-center vh-100">
			<div className="text-center">
				<h1 className="display-1 fw-bold">403</h1>
				<p className="fs-3">
					<span className="text-danger">Forbidden</span>
				</p>
				<p className="lead">You dont have permission to access this page.</p>
				<button className="btn btn-primary" onClick={handleBack}>
					Go Home
				</button>
			</div>
		</div>
	);
};

export default Unauthorized;
