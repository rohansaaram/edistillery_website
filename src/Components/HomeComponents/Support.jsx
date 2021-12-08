import { useState } from 'react';
import { useSpring, animated, Spring } from 'react-spring'
import VisibilitySensor from "react-visibility-sensor";


function Support() {


	const [isInView, setIsInView] = useState(false);
	const [isInView1, setIsInView1] = useState(false);
	const [isInView2, setIsInView2] = useState(false);

	const onVisibilityChange = isInView => isInView ? setIsInView(isInView) : null;
	const onVisibilityChange1 = isInView1 => isInView1 ? setIsInView1(isInView1) : null;
	const onVisibilityChange2 = isInView2 => isInView2 ? setIsInView2(isInView2) : null;

	const fadeIn = useSpring({
		transform: "translate(0px, -20px)",
		from: { opacity: isInView ? 1 : 1 },
		to: { opacity: isInView ? 1 : 1, transform: isInView ? "translate(0, 0)" : "translate(0, -0px)" },
		delay: isInView ? 0 : 0,
		config: { duration: isInView ? 0 : 0 }
	})

	const fadeIn1 = useSpring({
		transform: "translate(0px, -10px)",
		from: { opacity: isInView1 ? 1 : 1 },
		to: { opacity: isInView1 ? 1 : 1, transform: isInView1 ? "translate(0, 0)" : "translate(0, -0px)" },
		delay: isInView1 ? 0 : 0,
		config: { duration: isInView1 ? 0 : 0 }
	})
	const fadeIn2 = useSpring({
		transform: "translate(0px, 0px)",
		from: { opacity: isInView2 ? 1 : 1 },
		to: { opacity: isInView2 ? 1 : 1, transform: isInView2 ? "translate(0, 0)" : "translate(0, 0px)" },
		delay: isInView2 ? 0 : 0,
		config: { duration: isInView2 ? 0 : 0 }
	})


	return (
		<div>
			<div
				className="row pt-5  text-center justify-content-center align-items-center support-div"
				style={{ backgroundColor: "", color: "" }}
			>
				<div className="col-sm-8 pt-5 pb-5 ">

					<VisibilitySensor onChange={onVisibilityChange}>
						{({ isVisible }) => (
							<animated.div style={fadeIn}>
								<h1 className="h1Class" style={{ fontSize: "60px", color: "#fff" }}>Support & Care</h1>
							</animated.div>
						)}
					</VisibilitySensor>
					<VisibilitySensor onChange={onVisibilityChange2}>
						{({ isVisible }) => (
							<animated.div style={fadeIn2}>
								<h3 className="pt-5 pb-5">
									eDistillery is developed in the supervision of distillers just like
									you and therefore we welcome you to join our community and
									make the most out of your job.
								</h3>
							</animated.div>
						)}
					</VisibilitySensor>
					<VisibilitySensor onChange={onVisibilityChange1}>
						{({ isVisible }) => (
							<animated.div style={fadeIn1}>
								<div className="row  justify-content-center mt-3">

									<div className="col-sm-6  stylish-ul-support">
										<ul>
											<li className="" >Complaints & bug reporting</li>
											<li className="" >Suggesstions & advices</li>
										</ul>
									</div>
									<div className="col-sm-6 stylish-ul-support">
										<ul>
											<li className="">24 hour response time</li>
											<li className="">Security & Backups</li>
										</ul>
									</div>
									<div className="col-sm-8 stylish-ul-support">
										<ul>
											<li className="">All above free of cost with warm welcome</li>
										</ul>
									</div>
								</div>
							</animated.div>
						)}

					</VisibilitySensor>
				</div>
			</div>
		</div>
	);
}

export default Support;
