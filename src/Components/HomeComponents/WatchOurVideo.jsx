function WatchOurVideo() {
	return (
		<div className="row mt-5 d-flex text-center justify-content-center align-items-center">
			<div className="col-sm-12">
				<div className="row">
					<div className="col-12">
						<h1>Watch our video for a better understanding</h1>
					</div>
					<div className="col-12 mt-5 d-flex justify-content-center align-items-center">
						<div
							style={{
								backgroundImage:
									"url('https://i.pinimg.com/originals/ea/6b/3e/ea6b3e63fe72791652317e2c3a6ca807.png')",
								backgroundRepeat: "no-repeat",
								backgroundSize: "contain",
								height: "450px",
								width: "500px",
								backgroundColor: "#fff",
							}}
							className="justify-content-center align-items-center"
						>
							<iframe
								src="https://www.youtube.com/embed/E7wJTI-1dvQ"
								frameborder="0"
								allow="autoplay; encrypted-media"
								allowfullscreen="true"
								title="video"
								className="border border-dark"
								style={{
									marginTop: "25px",
									height: "235px",
									width: "400px",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WatchOurVideo;
