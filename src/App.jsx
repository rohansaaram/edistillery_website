import { useState, useRef, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useLocation,
	withRouter,
} from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import Features from "./Components/HomeComponents/Features";
import Pricing from "./Components/HomeComponents/Pricing";
import TheAlcoholBook from "./Components/HomeComponents/TheAlcoholBook";
import Support from "./Components/HomeComponents/Support";
import MainRow from "./Components/HomeComponents/MainRow";
import StrategicVision from "./Components/HomeComponents/StrategicVision";
import WhyEdistillery from "./Components/HomeComponents/WhyEdistillery";
import WatchOurVideo from "./Components/HomeComponents/WatchOurVideo";
import Guide from "./Components/Guide/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ArrowBarUp } from "react-bootstrap-icons";

import { Helmet } from 'react-helmet'

import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { translate } from "./Localization/translate.js"




const App = (props) => {
	const [webPage, setWebPage] = useState("Home");
	const [isScrollable, setScrollable] = useState(false);

	const whyedistillery = useRef(null);
	const strategicvision = useRef(null);
	const features = useRef(null);
	const watchvideo = useRef(null);
	const pricing = useRef(null);
	const supportcare = useRef(null);
	const contactUs = useRef(null);

	const [backToTop, togglebackToTop] = useState(false);

	const handleScroll = (event) => {
		window.pageYOffset > 200 ? togglebackToTop(true) : togglebackToTop(false);
	};

	useEffect(() => {
		switch (window.location.pathname) {
			case "/why-edistillery":
				setWebPage("WhyEdistillery");
				break;
			case "/strategic-vision":
				setWebPage("StrategicVision");
				break;
			case "/features":
				setWebPage("Features");
				break;
			case "/watch-video":
				setWebPage("WatchVideo");
				break;
			case "/pricing":
				setWebPage("Pricing");
				break;
			case "/support":
				setWebPage("SupportCare");
				break;
			case "/contact-us":
				setWebPage("ContactUs");
				break;
			case "/app-guide":
				setWebPage("AppGuide");
				break;
		}


		if (webPage != "AppGuide")
			scroller.scrollTo(webPage, {
				duration: 1500,
				delay: 100,
				smooth: true,
			})

	});

	Events.scrollEvent.register('begin', function (to, element) {
		if (webPage != "AppGuide")
			arguments || arguments[1].offsetTop > 200 ? togglebackToTop(true) : togglebackToTop(false);
	});

	scrollSpy.update();

	const scrollToTop = () => {
		window.history.pushState("", "", "/");
		scroll.scrollToTop();
		setTimeout(function () { togglebackToTop(false) }, 500);
		webPage !== "AppGuide" ? setWebPage("Home") : setWebPage("AppGuide");
	};


	/*
	window.addEventListener(
		"scroll",
		() => {
			window.offsetTop > 200 ? togglebackToTop(true) : togglebackToTop(false);
		},
		{ passive: false }
	);
	*/




	return (
		<Router>
			<Helmet>
				<title>{"eDistillery - The solution for your alcohol warehouse"}</title>
				<meta name="description" content="Build your warehouse, Access from anywhere, Work out the alcoholic spirits." />
				<meta name="keywords" content="Alcohol managing application, distillery management application, distillery management software, alcohol record keeping, alcohol management tool, alcohol tex" />
			</Helmet>
			<div className="App d-flex" style={{ fontFamily: "Poppins,sans-serif", overflowX: "hidden" }}>
				<div className="container-fluid p-0">
					{backToTop && !window.location.pathname.includes("app-guide") ? (
						<button
							onClick={() => scrollToTop()}
							style={{
								position: "fixed",
								bottom: "30px",
								right: "20px",
								zIndex: "99",
								cursor: "pointer",
								backgroundColor: "#000",
								color: "#fff"
							}}
							className="btn"
							title="Go to top"
						>
							<ArrowBarUp />
						</button>
					) : (
							""
						)}

					<Switch>
						<Route path="/app-guide" >
							<Header setWebPage={setWebPage} setScrollable={setScrollable} />
							<Guide />
						</Route>

						<Route exact>
							<div >
								<div
									className="mainRow"
								>
									<Header setWebPage={setWebPage} setScrollable={setScrollable} />
									<MainRow />
								</div>



								<Element ref={whyedistillery} name="WhyEdistillery">
									<WhyEdistillery />
								</Element>



								<Element ref={features} name="Features">
									<Features />
								</Element>


								<Element name="TheAlcoholBook">
									<TheAlcoholBook />
								</Element>



								<Element ref={supportcare} name="SupportCare">
									<Support />
								</Element>




								<Element ref={pricing} name="Pricing">
									<Pricing />
								</Element>


								<Element ref={contactUs} name="ContactUs">
									<ContactUs />
								</Element>
							</div>
						</Route>
					</Switch>

					<Footer />
				</div>
			</div>
		</Router>
	);
};

export default App;
