import HomeAd1 from "/Ads/HomeAd1.jpg";
import HomeAd2 from "/Ads/HomeAd2.jpg";

const HomeAd = () => {
	return (
		<div className="ad-container d-flex justify-content-center">
			<div className="home-ad-image-container shadow">
				<img
					src={HomeAd1}
					alt="ad"
					style={{ objectFit: "cover", width: "100%" }}
				/>
			</div>
			<div className="home-ad-image-container shadow">
				<img
					src={HomeAd2}
					alt="ad"
					style={{ objectFit: "cover", width: "100%" }}
				/>
			</div>
		</div>
	);
};

export default HomeAd;
