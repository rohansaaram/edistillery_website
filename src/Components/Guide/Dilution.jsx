import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";



import dilution from "./../../images/Guide/dilution.jpg";
import dilution1 from "./../../images/Guide/dilution1.jpg";


export default function Dilution() {
    const [currentSubItem, setCurrentSubItem] = useState(null);


    useEffect(() => {

        if (currentSubItem)
            scroller.scrollTo(currentSubItem)
        else
            scroll.scrollToTop()

    });


    return (
        <div>
            <div className="row">
                <div className="col-sm-9">
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Dilution")}</h2>
                    <Element name="">
                        {window.locale.translate("Dilution is the process of decreasing the alcohol content of a spirit. In eDistillery, dilution can be done only on distillates in either containers or casks as shown in the image below.")}
                        <br /><br />
                        <img src={dilution} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                        {window.locale.translate("The system is designed to calcualate the resulting volume and other parameters on itself. You can either provide the target alcohol content OR litres of water to add and the system will use the formulae using density and mass volume tables to generate the other resulting parameters.")}
                        <br /><br />
                        <img src={dilution1} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                        {window.locale.translate("You can also find the history of water added on the dashboard as well as reports sections. If you just want to view the history of water added in a particular cask or container, you can go to reports -> tracking and then select the particular container or cask.  ")}
                    </Element>




                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    )


}