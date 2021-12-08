import { useState } from 'react';
import { useSpring, animated, Spring } from 'react-spring'
import VisibilitySensor from "react-visibility-sensor";



function Pricing() {

	const [isInView, setIsInView] = useState(false);
	const [isInView1, setIsInView1] = useState(false);
	const [isInView2, setIsInView2] = useState(false);
	const [isInView3, setIsInView3] = useState(false);
	const [isInView4, setIsInView4] = useState(false);
	const [isInView5, setIsInView5] = useState(false);

	const onVisibilityChange = isInView => isInView ? setIsInView(isInView) : null;
	const onVisibilityChange1 = isInView1 => isInView1 ? setIsInView1(isInView1) : null;
	const onVisibilityChange2 = isInView2 => isInView2 ? setIsInView2(isInView2) : null;
	const onVisibilityChange3 = isInView3 => setIsInView3(isInView3);
	const onVisibilityChange4 = isInView4 => isInView4 ? setIsInView4(isInView4) : null;
	const onVisibilityChange5 = isInView5 => isInView5 ? setIsInView5(isInView5) : null;


	const fadeIn = useSpring({
		transform: "translate(0px, -20px)",
		from: { opacity: isInView ? 1 : 1 },
		to: { opacity: isInView ? 1 : 1, transform: isInView ? "translate(0, 0)" : "translate(0, 0px)" },
		delay: isInView ? 200 : 0,
		config: { duration: isInView ? 1000 : 0 }
	})

	const fadeIn1 = useSpring({
		transform: "translate(0px, 0px)",
		from: { opacity: isInView1 ? 0 : 1 },
		to: { opacity: isInView1 ? 1 : 0, transform: isInView1 ? "translate(0, 0)" : "translate(0, 0px)" },
		delay: isInView1 ? 200 : 0,
		config: { duration: isInView1 ? 1000 : 0 }
	})
	const fadeIn2 = useSpring({
		transform: "translate(0px, 0px)",
		from: { opacity: isInView2 ? 0 : 1 },
		to: { opacity: isInView2 ? 1 : 0, transform: isInView2 ? "translate(0, 0)" : "translate(0, 0px)" },
		delay: isInView2 ? 200 : 0,
		config: { duration: isInView2 ? 1500 : 0 }
	})

	const fadeIn3 = useSpring({
		transform: "translate(0px, -20px)",
		from: { opacity: isInView3 ? 0 : 1 },
		to: { opacity: isInView3 ? 1 : 0, transform: isInView3 ? "translate(0, 0)" : "translate(0, -0px)" },
		delay: isInView3 ? 100 : 0,
		config: { duration: isInView3 ? 1000 : 0 }
	})



	const fadeIn4 = useSpring({
		transform: "translate(-50px, 0px)",
		from: { opacity: isInView4 ? 0 : 1 },
		to: { opacity: isInView4 ? 1 : 0, transform: isInView4 ? "translate(0, 0)" : "translate(-0, 0px)" },
		delay: isInView4 ? 200 : 0,
		config: { duration: isInView4 ? 1000 : 0 }
	})




	const fadeIn5 = useSpring({
		transform: "translate(50px, 0px)",
		from: { opacity: isInView5 ? 0 : 1 },
		to: { opacity: isInView5 ? 1 : 0, transform: isInView5 ? "translate(0, 0)" : "translate(0, 0px)" },
		delay: isInView5 ? 200 : 0,
		config: { duration: isInView5 ? 1000 : 0 }
	})



	return (
		<div className="row pt-5 pb-5 text-center justify-content-center align-items-center pricing-div">
			<div className="col-sm-12 mb-5">

				<VisibilitySensor onChange={onVisibilityChange}>
					{({ isVisible }) => (
						<animated.div style={fadeIn}>
							<h1 className="" style={{ fontSize: "60px", color:"#414042" }}>Pricing </h1>
						</animated.div>
					)}
				</VisibilitySensor>

			</div>
			<div className="col-sm-12">

				<VisibilitySensor onChange={onVisibilityChange1}>
					{({ isVisible }) => (
						<animated.div style={fadeIn1}>
							<h4 className="h4Class" style={{ color:"#414042" }}>At eDistillery, you pay only for what you use</h4>
						</animated.div>
					)}
				</VisibilitySensor>

			</div>
			<div className="col-sm-12">

				<VisibilitySensor onChange={onVisibilityChange2}>
					{({ isVisible }) => (
						<animated.div style={fadeIn2}>
							<h6 className="h4Class" style={{ color:"#414042" }}>
								Start your experience now and get all features & modules absolutely
								free for the first 90 days.
						</h6>
						</animated.div>
					)}
				</VisibilitySensor>

			</div>


			<div className="col-sm-12 mt-5 mb-5">

				<VisibilitySensor onChange={onVisibilityChange3}>
					{({ isVisible }) => (
						<animated.div style={fadeIn3}>
							<a href="https://app.edistillery.net/register" target="_blank">
								<button class="btn btn-lg mb-3 register-button">
									Start Your Trial Now
							</button>
							</a>
						</animated.div>
					)}
				</VisibilitySensor>
			</div>





			<div className="col-sm-12 pt-3 pl-5 pr-5">



				<div className="row justify-content-center">
					<div className="col-sm-4">

						<VisibilitySensor onChange={onVisibilityChange4}>
							{({ isVisible }) => (
								<animated.div style={fadeIn4}>
									<h3 className="pricing-plan" style={{ fontSize: "40px" }}>Standard Plan</h3>
								</animated.div>
							)}
						</VisibilitySensor>
					</div>
					<div className="col-sm-4">
						<VisibilitySensor onChange={onVisibilityChange5}>
							{({ isVisible }) => (
								<animated.div style={fadeIn5}>
									<h3 className="pricing-plan" style={{ fontSize: "40px" }}>$249</h3>
								</animated.div>
							)}
						</VisibilitySensor>
					</div>
					<div className="col-sm-8">
						<hr />
					</div>

				</div>



				<div className="row justify-content-center mt-5 mb-5">
					<div className="col-sm-8">
						<VisibilitySensor onChange={onVisibilityChange4}>
							{({ isVisible }) => (
								<animated.div style={fadeIn4}>
									<h3 style={{ fontSize: "30px", color:"#1b75bc" }}> <u> Additional Modules </u> </h3>
								</animated.div>
							)}
						</VisibilitySensor>
					</div>
				</div>




				<div className="row justify-content-center mb-3">
					<div className="col-sm-4">
						<VisibilitySensor onChange={onVisibilityChange4}>
							{({ isVisible }) => (
								<animated.div style={fadeIn4}>
									<h6 style={{ fontSize: "20px" }}>Ready Made Spirits
									<br />
										<p className="pricing-plan" style={{ marginTop: '0', fontSize: "15px" }}>
											(Purchases, Bulk Production, Bottling & Dispatches)
										</p>
									</h6>
								</animated.div>
							)}
						</VisibilitySensor>
					</div>
					<div className="col-sm-4">
						<VisibilitySensor onChange={onVisibilityChange5}>
							{({ isVisible }) => (
								<animated.div style={fadeIn5}>
									<h6 className="pricing-amount" style={{ fontSize: "20px" }}>$39</h6>
								</animated.div>
							)}
						</VisibilitySensor>
					</div>
					<div className="col-sm-8">
						<hr />
					</div>

				</div>


				<div className="row justify-content-center mb-3">
					<div className="col-sm-4">
						<VisibilitySensor onChange={onVisibilityChange4}>
							{({ isVisible }) => (
								<animated.div style={fadeIn4}>
									<h6 style={{ fontSize: "20px" }}>Disitillations
										<br />
										<p className="pricing-plan" style={{ marginTop: '0', fontSize: "15px" }}>
											(Hearts & Feints, Redistillations)
										</p>
									</h6>
								</animated.div>
							)}
						</VisibilitySensor>
					</div>
					<div className="col-sm-4">
						<VisibilitySensor onChange={onVisibilityChange5}>
							{({ isVisible }) => (
								<animated.div style={fadeIn5}>
									<h6 className="pricing-amount" style={{ fontSize: "20px" }}>$99</h6>
								</animated.div>
							)}
						</VisibilitySensor>
					</div>
					<div className="col-sm-8">
						<hr />
					</div>

				</div>


				<div className="row justify-content-center mb-3">
					<div className="col-sm-4">
						<VisibilitySensor onChange={onVisibilityChange4}>
							{({ isVisible }) => (
								<animated.div style={fadeIn4}>
									<h6 style={{ fontSize: "20px" }}>Aging In Casks/Barrels
										<br />
										<p className="pricing-plan" style={{ marginTop: '0', fontSize: "15px" }}>
										</p>
									</h6>
								</animated.div>
							)}
						</VisibilitySensor>
					</div>
					<div className="col-sm-4">
						<VisibilitySensor onChange={onVisibilityChange5}>
							{({ isVisible }) => (
								<animated.div style={fadeIn5}>
									<h6 className="pricing-amount" style={{ fontSize: "20px" }}>$99</h6>
								</animated.div>
							)}
						</VisibilitySensor>
					</div>
					<div className="col-sm-8">
						<hr />
					</div>

				</div>




				<div className="row justify-content-center mb-3">
					<div className="col-sm-4">
						<VisibilitySensor onChange={onVisibilityChange4}>
							{({ isVisible }) => (
								<animated.div style={fadeIn4}>
									<h6 style={{ fontSize: "20px" }}>Bottling through Vendors
										<br />
										<p className="pricing-plan" style={{ marginTop: '0', fontSize: "15px" }}>
											(Dispatches, Receipts)
										</p>
									</h6>
								</animated.div>
							)}
						</VisibilitySensor>
					</div>
					<div className="col-sm-4">
						<VisibilitySensor onChange={onVisibilityChange5}>
							{({ isVisible }) => (
								<animated.div style={fadeIn5}>
									<h6 className="pricing-amount" style={{ fontSize: "20px" }}>$39</h6>
								</animated.div>
							)}
						</VisibilitySensor>
					</div>
				</div>



			</div>
		</div>
	);
}

export default Pricing;
