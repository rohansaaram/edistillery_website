import { logDOM } from "@testing-library/react";
import { MenuButtonWide } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import { useState } from 'react';
import { useSpring, animated, Spring } from 'react-spring'
import VisibilitySensor from "react-visibility-sensor";


import logo from "./../images/logo1.png";


function NavBar(props) {

	const [isInView, setIsInView] = useState(false);

	const onVisibilityChange = isInView => setIsInView(isInView);


	const fadeInButton = useSpring({
		from: { opacity: isInView ? 0 : 1 },
		to: { opacity: isInView ? 1 : 0, transform: isInView ? "translate(0, 0)" : "translate(0, -20px)" },
		delay: isInView ? 200 : 0,
		config: { duration: isInView ? 1000 : 0 }
	})


	return (
		<div className="" >
			<div
				className="row p-2 justify-content-center top-offer-bar"
			>
				<div className="col-sm-12" style={{ textAlign: "center" }}>
					<h6>
						<a href="#" className="top-bar-visit-link">
							Register now
						</a>
						and start your experience with 3 months absolutely free.
					</h6>
				</div>
			</div>
			<div
				className="row justify-content-center align-items-center "
			>
				<div className="col-sm-3">
					<a href="https://www.edistillery.net">
						<img src={logo} alt="" className="ml-5 mt-5" style={{ height: "125px", width: "700px" }} />
					</a>
				</div>

				<div className="col-sm-9 pl-5">

					<VisibilitySensor onChange={onVisibilityChange}>
						{({ isVisible }) => (
							<animated.div style={fadeInButton}>

								<nav class="navbar navbar-expand-lg ">
									<div class="container-fluid">
										<div class="navbar-header">
											<i
												type="button"
												className="d-lg-none navbar-toggle collapsed"
												data-toggle="collapse"
												data-target=".navbar-collapse"
												aria-expanded="false"
												style={{ color: "#414042" }}
											>
												<MenuButtonWide />
											</i>
										</div>
										<div class="collapse navbar-collapse" id="navbarNavDropdown" >
											<ul class="navbar-nav">
												<li class="nav-item">
													<Link
														className="nav-link"
														to="/why-edistillery"
														onClick={() => {
															props.setWebPage("WhyEdistillery");
															props.setScrollable(true);
														}}
													>
														Why eDistillery ?
													</Link>
												</li>

												<li class="nav-item">
													<Link
														className="nav-link"
														to="/features"
														onClick={() => {
															props.setWebPage("Features");
															props.setScrollable(true);
														}}
													>
														Features
													</Link>
												</li>


												<li class="nav-item">
													<Link
														className="nav-link"
														to="/the-alcohol-book"
														onClick={() => {
															props.setWebPage("TheAlcoholBook");
															props.setScrollable(true);
														}}
													>
														The Alcohol Book
													</Link>
												</li>
												{/* 
									<li class="nav-item">
										<Link
											className="nav-link"
											to="watch-video"
											onClick={() => {
												props.setWebPage("WatchVideo");
												props.setScrollable(true);
											}}
										>
											Watch Video
										</Link>
									</li>
									*/}

												<li class="nav-item">
													<Link
														className="nav-link"
														to="/support"
														onClick={() => {
															props.setWebPage("SupportCare");
															props.setScrollable(true);
														}}
													>
														Support & Care
													</Link>
												</li>
												<li class="nav-item">
													<Link
														className="nav-link"
														to="/pricing"
														onClick={() => {
															props.setWebPage("Pricing");
															props.setScrollable(true);
														}}
													>
														Pricing
													</Link>
												</li>
												<li class="nav-item">
													<Link
														className="nav-link"
														to="/app-guide"
														onClick={() => {
															props.setWebPage("AppGuide");
															props.setScrollable(false);
														}}
													>
														App Guide
													</Link>
												</li>
												<li class="nav-item">
													<Link
														className="nav-link"
														to="/contact-us"
														onClick={() => {
															props.setWebPage("ContactUs");
															props.setScrollable(true);
														}}
													>
														Contact Us
													</Link>
												</li>
											</ul>
										</div>
										{/* 
										<div className="dropdown">
											<button
												className="btn dropdown-toggle"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false"
												style={{ color: "#092e58" }}
											>
												EN
								</button>
											<div className="dropdown-menu" style={{ minWidth: "auto" }}>
												<a className="dropdown-item w-100" href="#">
													DE
									</a>
												<a className="dropdown-item w-100" href="#">
													FR
									</a>
											</div>
										</div>
										*/}
									</div>
								</nav>

							</animated.div>
						)}
					</VisibilitySensor>

			
				</div>
			</div>
		</div>
	);
}

export default NavBar;
