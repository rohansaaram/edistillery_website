import { useState } from 'react';
import { useSpring, animated, Spring } from 'react-spring'
import VisibilitySensor from "react-visibility-sensor";




export default function WhyEdistillery() {


    const [isInView, setIsInView] = useState(false);
    const [isInView1, setIsInView1] = useState(false);
    const [isInView2, setIsInView2] = useState(false);
    const [isInView3, setIsInView3] = useState(false);
    const [isInView4, setIsInView4] = useState(false);

    const onVisibilityChange = isInView => isInView ? setIsInView(isInView) : null;
    const onVisibilityChange1 = isInView1 => isInView1 ? setIsInView1(isInView1) : null;
    const onVisibilityChange2 = isInView2 => isInView2 ? setIsInView2(isInView2) : null;
    const onVisibilityChange3 = isInView3 => isInView3 ? setIsInView3(isInView3) : null;
    const onVisibilityChange4 = isInView4 => isInView4 ? setIsInView4(isInView4) : null;


    const fadeIn = useSpring({
        transform: "translate(0px, -20px)",
        from: { opacity: 1 },
        to: { opacity: 1, transform: isInView ? "translate(0, 0)" : "translate(0, 0px)" },
        delay: isInView ? 200 : 0,
        config: { duration: isInView ? 1000 : 0 }
    })

    const fadeIn1 = useSpring({
        transform: "translate(0px, 0px)",
        from: { opacity: isInView1 ? 0 : 1 },
        to: { opacity: isInView1 ? 1 : 0, transform: isInView1 ? "translate(0, 0)" : "translate(0, 0px)" },
        delay: isInView1 ? 0 : 0,
        config: { duration: isInView1 ? 0 : 0 }
    })
    const fadeIn2 = useSpring({
        transform: "translate(0px, 0px)",
        from: { opacity: isInView2 ? 0 : 1 },
        to: { opacity: isInView2 ? 1 : 0, transform: isInView2 ? "translate(0, 0)" : "translate(0, 0px)" },
        delay: isInView2 ? 0 : 0,
        config: { duration: isInView2 ? 0 : 0 }
    })
    const fadeIn3 = useSpring({
        transform: "translate(0px, 0px)",
        from: { opacity: 1 },
        to: { opacity: 1, transform: isInView3 ? "translate(0, 0)" : "translate(0, 0px)" },
        delay: isInView3 ? 0 : 0,
        config: { duration: isInView3 ? 0 : 0 }
    })
    const fadeIn4 = useSpring({
        transform: "translate(0px, 0px)",
        from: { opacity: 1 },
        to: { opacity: 1, transform: isInView4 ? "translate(0, 0)" : "translate(0, 0px)" },
        delay: isInView4 ? 0 : 0,
        config: { duration: isInView4 ? 0 : 0 }
    })

    return (
        <div className="row  text-center  justify-content-center why-edistillery-div">
            <div className="col-sm-12 mb-5 text-center align-items-center justify-content-center">


                <VisibilitySensor onChange={onVisibilityChange}>
                    {({ isVisible }) => (
                        <animated.div style={fadeIn}>
                            <h1 className="h1Class" style={{ fontSize: "60px", color: "#fff" }}>Why eDistillery ?</h1>
                        </animated.div>
                    )}
                </VisibilitySensor>


            </div>

            {/*}
            <div className="col-sm-10 text-center align-items-center justify-content-center">
                <VisibilitySensor onChange={onVisibilityChange1}>
                    {({ isVisible }) => (
                        <animated.div style={fadeIn1}>
                            <h4>
                                Alcohol monitoring at your finger tips now
                             </h4>
                        </animated.div>
                    )}
                </VisibilitySensor>

            </div>
            <div className="col-sm-12 text-center align-items-center justify-content-center">
                <VisibilitySensor onChange={onVisibilityChange2}>
                    {({ isVisible }) => (
                        <animated.div style={fadeIn2}>
                            <h5>
                                eDistillery takes care of the conversions & calculations needed for the movement of alcohol
                           </h5>
                        </animated.div>
                    )}
                </VisibilitySensor>

            </div>
                    */}
            <div className="col-sm-12">
                <div className="row pt-5 pl-5 pr-5 ">
                    <div className="col-sm-6">
                        <div className="card border-0">
                            <div className="card-header text-center">
                                <h4>Dedicated For</h4>
                            </div>
                            <div className="card-body ">
                                <div className="pl-5 pr-5 pt-2 text-center">
                                    <VisibilitySensor onChange={onVisibilityChange3}>
                                        {({ isVisible }) => (
                                            <animated.div style={fadeIn3}>
                                                <ul>
                                                    <li>Bonded Warehouses</li>
                                                    <li>Manufacturers & Distillers Of Alcohol Beverages</li>
                                                    <li>Bulk Spirit Producers </li>
                                                    <li>Companies Obliged To Excise Regulations.</li>
                                                </ul>
                                            </animated.div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card border-0">
                            <div className="card-header text-center">
                                <h4>The Alcohol Book</h4>
                            </div>
                            <div className="card-body">
                                <div className="pl-5 pr-5 pt-2">
                                    <VisibilitySensor onChange={onVisibilityChange3}>
                                        {({ isVisible }) => (
                                            <animated.div style={fadeIn3}>
                                                <ul>
                                                    <li>Opening Alcohol</li>
                                                    <li>Incoming/Purchased/Fermented Alcohol</li>
                                                    <li> Outgoing Alcohol</li>
                                                    <li> Losses Incurred During Each Step</li>
                                                    <li> Closing Level Of Alcohol</li>
                                                </ul>
                                            </animated.div>
                                        )}
                                    </VisibilitySensor>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row pr-5 pt-2 pl-5 ">
                    <div className="col-sm-6">
                        <div className="card border-0">
                            <div className="card-header text-center">
                                <h4>Easy Conversions</h4>
                            </div>
                            <div className="card-body">
                                <div className="pl-5 pr-5 pt-2">
                                    <VisibilitySensor onChange={onVisibilityChange4}>
                                        {({ isVisible }) => (
                                            <animated.div style={fadeIn4}>
                                                <ul>
                                                    <li>Integrated Density & Mass Volume Tables</li>
                                                    <li>Automated Conversions While Mixing</li>
                                                    <li>Versatility of both KG & Litres</li>
                                                    <li>An Explicit Incorporated Conversion Tool</li>
                                                </ul>
                                            </animated.div>
                                        )}
                                    </VisibilitySensor>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card border-0">
                            <div className="card-header text-center">
                                <h4>Credibility & Reliablity</h4>
                            </div>
                            <div className="card-body">
                                <div className="pl-5 pr-5 pt-2">
                                    <VisibilitySensor onChange={onVisibilityChange4}>
                                        {({ isVisible }) => (
                                            <animated.div style={fadeIn4}>
                                                <ul>
                                                    <li>Downloadable PDFs & Excels</li>
                                                    <li>Automated Email Service</li>
                                                    <li>Daily, Weekly & Monthly Data</li>
                                                    <li>Unlimited Backup Emails</li>
                                                </ul>
                                            </animated.div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}