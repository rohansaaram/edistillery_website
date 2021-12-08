import { useState } from 'react';
import { useSpring, animated, a } from 'react-spring'
import VisibilitySensor from "react-visibility-sensor";

import allMonths from "./../../images/all_months.jpg";
import specificMonth from "./../../images/specific_month.jpg";




export default function TheAlcoholBook() {

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
        delay: isInView ? 200 : 0,
        config: { duration: isInView ? 1000 : 0 }
    })
    const fadeIn1 = useSpring({
        transform: "translate(0px, -20px)",
        from: { opacity: isInView1 ? 0 : 1 },
        to: { opacity: isInView1 ? 1 : 0, transform: isInView1 ? "translate(0, 0)" : "translate(0, -0px)" },
        delay: isInView1 ? 100 : 0,
        config: { duration: isInView1 ? 1000 : 0 }
    })
    const fadeIn2 = useSpring({
        transform: "translate(0px, 0px)",
        from: { opacity: isInView2 ? 0 : 1 },
        to: { opacity: isInView2 ? 1 : 0, transform: isInView2 ? "translate(0, 0)" : "translate(0, 0px)" },
        delay: isInView2 ? 100 : 0,
        config: { duration: isInView2 ? 500 : 0 }
    })

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 300, friction: 80 },
    })


    return (

        <div className="alcohol-book-div">

            <div className="row">
                <div className="col-sm-12 text-center">

                    <VisibilitySensor onChange={onVisibilityChange}>
                        <animated.div style={fadeIn}>
                            <h1 className="h1Class" style={{ fontSize: "60px", color:"#1b75bc" }}>
                                The Alcohol Book
                            </h1>
                        </animated.div>
                    </VisibilitySensor>

                </div>
            </div>



            <div className="row text-center justify-content-center mt-5">

                <div className="col-sm-10">

                    {/* 
                    <VisibilitySensor onChange={onVisibilityChange2}>
                        <animated.div style={fadeIn2}>
                            <div
                                className=""
                                style={{
                                    backgroundImage: `url("${allMonths}")`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    minHeight: "90vh",
                                    width: "100%"
                                }}
                            >
                            </div>
                        </animated.div>
                    </VisibilitySensor>
                    */}



                    <div className="containerr" onMouseEnter={() => set(state => true)} onMouseLeave={() => set(state => false)}>
                        <a.div
                            style={{
                                position: "absolute",
                                backgroundImage: `url("")`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                minHeight: "90vh",
                                willChange: "transform, opacity",
                                opacity: opacity.to(o => 1 - o), transform
                            }}
                        >
                            <img src={allMonths} alt="" />
                        </a.div>

                        <a.div
                            style={{
                                backgroundImage: `url("")`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                minHeight: "90vh",
                                willChange: "transform, opacity",
                                opacity,
                                transform,
                                rotateX: '180deg',
                            }}
                        >
                            <img src={specificMonth} alt="" />
                        </a.div>
                    </div>

                </div>

            </div>


            <div className="row mt-5">
                <div className="col-sm-12 text-center">

                    <VisibilitySensor onChange={onVisibilityChange1}>
                        <animated.div style={fadeIn1}>
                            <h5 >
                                <span style={{ color: "grey" }}>Opening</span>
                                <span style={{ color: "grey" }}> + Incoming</span>
                                <span style={{ color: "grey" }}> - Outgoing</span>
                                <span style={{ color: "grey" }}> - Losses</span>
                                <span style={{ color: "grey" }}> = Closing Litres Of Pure Alcohol</span>
                            </h5>
                        </animated.div>
                    </VisibilitySensor>

                </div>
            </div>

        </div>

    )


}