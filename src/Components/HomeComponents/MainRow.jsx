import { useState } from 'react';
import { useSpring, animated, Spring } from 'react-spring'
import VisibilitySensor from "react-visibility-sensor";


function MainRow() {

	const [isInView, setIsInView] = useState(true);
	const [isInView1, setIsInView1] = useState(false);

	const fadeIn = useSpring({
		from: { opacity: isInView ? 0. : 1 },
		to: { opacity: isInView ? 1 : 0 },
		delay: isInView ? 100 : 0,
		config: { duration: isInView ? 2000 : 1000 }
	})


	const fadeIn1 = useSpring({
		transform: "translate(0px, -10px)",
		from: { opacity: isInView1 ? 0 : 1 },
		to: { opacity: isInView1 ? 1 : 0, transform: isInView1 ? "translate(0, 0)" : "translate(0, 0px)" },
		delay: isInView1 ? 200 : 0,
		config: { duration: isInView1 ? 1000 : 0 }
	})





	const onVisibilityChange = isInView => isInView ? setIsInView(isInView) : null;
	const onVisibilityChange1 = isInView1 => setIsInView1(isInView1);



	return (
		<div className="row " >
			<div
				className="col-sm-12 justify-content-center align-items-center"
				style={{
					backgroundImage: "url('')",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					minHeight: "70vh",
					backgroundColor: "",
					color: "#000",
					marginTop: "50px"
				}}
			>
				<div className="row ">
					<div className="col-2"></div>
					<div className="col-sm-8 d-flex justify-content-center align-items-center text-center">



						<VisibilitySensor onChange={onVisibilityChange}>
							{({ isVisible }) => (
								<animated.div style={fadeIn}>
									<h1 className="h1Class custom1" style={{ fontSize: "60px" }}>
										{window.locale.translate('The Alcohol Book Manager')}
									</h1>
								</animated.div>
							)}
						</VisibilitySensor>

					</div>


					<div className="col-2"></div>
					<div className="col-12 d-flex justify-content-center align-items-center mt-4">

						<VisibilitySensor onChange={onVisibilityChange1}>
							{({ isVisible }) => (
								<animated.div style={fadeIn1}>
									<a href="https://app.edistillery.net/register" target="_blank">
										<button className="btn btn-lg mb-3 register-button">
											{window.locale.translate('Go To Application')}
										</button>
									</a>
								</animated.div>
							)}
						</VisibilitySensor>

					</div>


					<div className="col-sm-12">
						<div className="row mt-4">
							<div className="col-sm-12 d-flex text-center justify-content-center align-items-center mt-3">


								<VisibilitySensor onChange={onVisibilityChange}>
									{({ isVisible }) => (
										<animated.div style={fadeIn}>
											<h3 className="custom2" style={{ fontSize: "22px" }}>
												{window.locale.translate('A comprehensive tool for working with alcohol and keeping its record.')}
											</h3>
										</animated.div>
									)}
								</VisibilitySensor>

							</div>
						</div>
					</div>

					<div className="col-sm-12">
						<div className="row ">
							<div className="col-sm-2"></div>
							<div className="col-sm-8 d-flex text-center justify-content-center align-items-center ">


								<VisibilitySensor onChange={onVisibilityChange}>
									{({ isVisible }) => (
										<animated.div style={fadeIn}>
											<h3 className="custom3" style={{ fontSize: "22px" }}>
												{window.locale.translate('Build your warehouse, Access from anywhere, Work out the alcoholic spirits. ')}
											</h3>
										</animated.div>
									)}
								</VisibilitySensor>

							</div>
							<div className="col-sm-2"></div>
						</div>
					</div>



				</div>
			</div>
		</div>
	);
}

export default MainRow;
