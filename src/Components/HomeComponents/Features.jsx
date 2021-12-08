import { useState } from 'react';
import { useSpring, animated, Spring } from 'react-spring'
import VisibilitySensor from "react-visibility-sensor";

import sidepaneImage from "../../images/features_sidepane.png";
import { ArrowReturnRight } from "react-bootstrap-icons";

function Features() {

	const [isInView, setIsInView] = useState(false);
	const [isInView3, setIsInView3] = useState(false);
	const [isInView4, setIsInView4] = useState(false);
	const [isInView5, setIsInView5] = useState(false);


	const onVisibilityChange = isInView => isInView ? setIsInView(isInView) : null;
	const onVisibilityChange3 = isInView3 => isInView3 ? setIsInView3(isInView3) : null;
	const onVisibilityChange4 = isInView4 => isInView4 ? setIsInView4(isInView4) : null;
	const onVisibilityChange5 = isInView5 => isInView5 ? setIsInView5(isInView5) : null;

	const fadeIn = useSpring({
		transform: "translate(0px, -20px)",
		from: { opacity: isInView ? 1 : 1 },
		to: { opacity: isInView ? 1 : 1, transform: isInView ? "translate(0, 0)" : "translate(0, 0px)" },
		delay: isInView ? 200 : 0,
		config: { duration: isInView ? 1000 : 0 }
	})


	const fadeIn3 = useSpring({
		transform: "translate(0px, 0px)",
		from: { opacity: isInView3 ? 0 : 1 },
		to: { opacity: isInView3 ? 1 : 0, transform: isInView3 ? "translate(0, 0)" : "translate(0, 0px)" },
		delay: isInView3 ? 100 : 0,
		config: { duration: isInView3 ? 1500 : 0 }
	})
	const fadeIn4 = useSpring({
		transform: "translate(0px, 0px)",
		from: { opacity: isInView4 ? 0 : 1 },
		to: { opacity: isInView4 ? 1 : 0, transform: isInView4 ? "translate(0, 0)" : "translate(0, 0px)" },
		delay: isInView4 ? 100 : 0,
		config: { duration: isInView4 ? 1500 : 0 }
	})
	const fadeIn5 = useSpring({
		transform: "translate(0px, 0px)",
		from: { opacity: isInView5 ? 0 : 1 },
		to: { opacity: isInView5 ? 1 : 0, transform: isInView5 ? "translate(0, 0)" : "translate(0, 0px)" },
		delay: isInView5 ? 100 : 0,
		config: { duration: isInView5 ? 1500 : 0 }
	})


	return (
		<div
			className="row   justify-content-center  pt-5 pb-5 features-div">
			<div className="col-sm-12 text-center">
				<VisibilitySensor onChange={onVisibilityChange}>
					{({ isVisible }) => (
						<animated.div style={fadeIn}>
							<h2 className="h1Class" style={{ fontSize: "60px" }}>Features</h2>
						</animated.div>
					)}
				</VisibilitySensor>

			</div>

			<div className="col-sm-12 p-5">

				<div className="row">



					<div className="col-sm-4">
						<div className="circle-div text-center justify-content-center align-items-center">
							<VisibilitySensor onChange={onVisibilityChange3}>
								{({ isVisible }) => (
									<animated.div style={fadeIn3}>
										<h5 className="features-h5">Inventory Management</h5>
										<hr class="features-hr" />
										<p>Flexible Snapshots</p>
										<p>Anytime Stocktakings</p>
										<p>Opening & Closing Stocks</p>
										<p>Minimun Stock Alerts</p>
									</animated.div>
								)}
							</VisibilitySensor>

						</div>
					</div>


					<div className="col-sm-4">
						<div className="circle-div text-center justify-content-center align-items-center">

							<VisibilitySensor onChange={onVisibilityChange3}>
								{({ isVisible }) => (
									<animated.div style={fadeIn3}>


										<h5 className="features-h5">Purchases</h5>
										<hr class="features-hr" />
										<p>Raw Materials</p>
										<p>Raw/Neutral Alcohol</p>
										<p>Ready Made Spirits</p>

									</animated.div>
								)}
							</VisibilitySensor>
						</div>
					</div>

					<div className="col-sm-4">
						<div className="circle-div text-center justify-content-center align-items-center">
							<VisibilitySensor onChange={onVisibilityChange3}>
								{({ isVisible }) => (
									<animated.div style={fadeIn3}>

										<h5 className="features-h5">Productions</h5>
										<hr class="features-hr" />
										<p>Distillations</p>
										<p>Redistillations</p>
										<p>Bulk Spirit Productions</p>
										<p>Loss Management</p>

									</animated.div>
								)}
							</VisibilitySensor>

						</div>
					</div>

					<div className="col-sm-4 mt-5">
						<div className="circle-div text-center justify-content-center align-items-center">

							<VisibilitySensor onChange={onVisibilityChange4}>
								<animated.div style={fadeIn4}>

									<h5 className="features-h5">Storage Containers</h5>
									<hr class="features-hr" />
									<p>Storage & Movements</p>
									<p>Heads, Hearts & Tails</p>
									<p>Dilution</p>
									<p>Loss Management</p>
									<p>Disposals</p>

								</animated.div>
							</VisibilitySensor>

						</div>
					</div>


					<div className="col-sm-4 mt-5">
						<div className="circle-div text-center justify-content-center align-items-center">

							<VisibilitySensor onChange={onVisibilityChange4}>
								<animated.div style={fadeIn4}>


									<h5 className="features-h5">Aging in Casks</h5>
									<hr class="features-hr" />
									<p>Cask Tracking</p>
									<p>Dilution</p>
									<p>Sampling</p>
									<p>Aging Losses</p>
								</animated.div>
							</VisibilitySensor>

						</div>
					</div>


					<div className="col-sm-4 mt-5">
						<div className="circle-div text-center justify-content-center align-items-center">

							<VisibilitySensor onChange={onVisibilityChange4}>
								<animated.div style={fadeIn4}>

									<h5 className="features-h5">Bottling </h5>
									<hr class="features-hr" />
									<p>Bottling Runs</p>
									<p>Packaging By Vendors</p>
									<p>Loss Management</p>
								</animated.div>
							</VisibilitySensor>
						</div>
					</div>


					<div className="col-sm-4 mt-5">
						<div className="circle-div text-center justify-content-center align-items-center">
							<VisibilitySensor onChange={onVisibilityChange5}>
								<animated.div style={fadeIn5}>
									<h5 className="features-h5">Dispatches</h5>
									<hr class="features-hr" />
									<p>Taxable Dispatches</p>
									<p>Tax Free Dispatches</p>
								</animated.div>
							</VisibilitySensor>
						</div>
					</div>


					<div className="col-sm-4 mt-5">
						<div className="circle-div text-center justify-content-center align-items-center">
							<VisibilitySensor onChange={onVisibilityChange5}>
								<animated.div style={fadeIn5}>
									<h5 className="features-h5">Statistics/Reports</h5>
									<hr class="features-hr" />
									<p>Extensive Lookups</p>
									<p>Productions & Dispatches Logs</p>
									<p>Product Tracking & History</p>
									<p>Equipment Tracking & History</p>
									<p>Lot Traceability</p>
								</animated.div>
							</VisibilitySensor>
						</div>
					</div>


					<div className="col-sm-4 mt-5">
						<div className="circle-div text-center justify-content-center align-items-center">
							<VisibilitySensor onChange={onVisibilityChange5}>
								<animated.div style={fadeIn5}>
									<h5 className="features-h5">User Management</h5>
									<hr class="features-hr" />
									<p>User Roles</p>
									<p>User Privileges</p>
								</animated.div>
							</VisibilitySensor>
						</div>
					</div>


				</div>

			</div>


			<div className="col-sm-12 text-center ">
				<a href="app-guide" className="features-guide-check-out">
					<ArrowReturnRight style={{ marginRight: "10px" }} />
					Check out our guide for a detailed lookup
				</a>
			</div>
		</div>
	);
}

export default Features;
