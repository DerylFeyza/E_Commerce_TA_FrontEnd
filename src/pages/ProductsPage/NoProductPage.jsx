import noproduct from "../../assets/noproduct.png";

const NoProduct = ({ productname }) => {
	const handleBack = () => {
		history.go(-1);
	};
	return (
		<div className="noproduct d-flex align-items-center justify-content-center">
			<img src={noproduct}></img>
			<div className="text-center">
				<h1 className="display-1 fw-bold">Hmm..</h1>
				<p className="fs-3">
					<span>The product you&apos;re looking for doesn&apos;t exist</span>
					<br></br>
					<span className="text-danger">searching for: {productname}</span>
				</p>
				<button className="btn btn-primary" onClick={handleBack}>
					Go Home
				</button>
			</div>
		</div>
	);
};

export default NoProduct;
