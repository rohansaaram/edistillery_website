import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";



import sampling from "./../../images/Guide/sampling.jpg";
import sampling1 from "./../../images/Guide/sampling1.jpg";
import sampling2 from "./../../images/Guide/sampling2.jpg";
import agingMoving from "./../../images/Guide/agingMoving.jpg";
import agingResetAge from "./../../images/Guide/agingResetAge.jpg";


export default function Sampling() {
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
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Aging In Casks/Barrels")}</h2>
                    <Element name="">
                        {window.locale.translate("Aging is the process of storing distilled spirits (or wines) in barrels for a specific period of time. The goal of maturation is to remove harsh flavors from the raw alcohol while adding distinct flavor characteristics found in the barrel's wood.")}
                        <br /><br />
                        {window.locale.translate("eDistillery provides the all the features needed to mature the spirits in your warehouse.")}
                    </Element>
                    <Element name="Moving" class="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Moving")}</h4>
                        {window.locale.translate("To start aging the spirits, you need to move from storage containers to casks. It is not possible to move directly to cask after the distillation process. If in reality, you move directly to cask after distillation, then in eDistillery you can use the feature of a virtual container to do that.")}
                        <br /><br />
                        {window.locale.translate("Please note that you cannot move bulk products into casks. Only distillates can be moved to and from casks.")}
                        <br /><br />
                        {window.locale.translate("It is also possible to move spirit between casks as shown in the image below. If you want to mix two spirits together, the resulting alcohol content will be automatically calculated by the system using the density and mass volume tables at standard 20ºC = 68ºF. If the age of spirits differ, then the new age will be the age that is older/maximum.")}
                        <br /><br />
                        <img src={agingMoving} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                        {window.locale.translate("Once the aging is completed as per your satisfaction, you can move it back to the storage containers and it will then appear in the 'Aged' section on the storage page. From here you can start filling it into bottles. If in reality you want to fill directly from a cask, then you can use the feature of virtual containers in eDistillery to move it to the storage container first and then start filling.")}
                        <br /><br />
                    </Element>
                    <Element name="Sampling" class="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Sampling")}</h4>
                        {window.locale.translate("Sampling, usually done when aging the spirits, is possible in the casks sections as shown in the images belows.")}
                        <br /><br />
                        <img src={sampling} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                        {window.locale.translate("You may specify the amount of sample taken in litres and it will be deducted from the cask. ")}
                        <br /><br />
                        <img src={sampling1} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                        {window.locale.translate("The history of samples picked can be viewed in the reports -> samples picked section and reports -> tracking if you want to view for a particular casks. It is also possible to view the history of samples picked for those particular lots only present currently inside in the cask in the inspect section on the casks page as shown in the image below. ")}
                        <br /><br />
                        <img src={sampling2} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                    </Element>
                    <Element name="ResetAge" class="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Reset Age")}</h4>
                        {window.locale.translate("If you have just starting to use eDistillery and have been maturing spirits for a while before, or for any other reason the age of the spirit is not stored accordingly, then in this case you can use the feature of resetting the age to a new age.")}
                        <br /><br />
                        <img src={agingResetAge} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                        {window.locale.translate("Simply select a date and the system will store the new age from that date up till the current date and will start continuing to increment based on this age.")}
                    </Element>




                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">
                        <TreeView>
                            <TreeItem nodeId="1" label="Moving" onClick={() => setCurrentSubItem("Moving")} />
                            <TreeItem nodeId="2" label="Sampling" onClick={() => setCurrentSubItem("Sampling")} />
                            <TreeItem nodeId="3" label="Reset Age" onClick={() => setCurrentSubItem("ResetAge")} />
                        </TreeView>

                    </div>
                </div>
            </div>
        </div>
    )


}