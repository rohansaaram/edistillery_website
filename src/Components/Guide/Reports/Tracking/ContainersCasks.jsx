import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";





import trackingContainers1 from "./../../../../images/Guide/trackingContainers1.jpg";
import trackingContainers2 from "./../../../../images/Guide/trackingContainers2.jpg";

export default function TrackingContainersCasks() {
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
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Tracking")}</h2>
                    <Element name="ProdVSDisp" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Containers/Casks")}</h4>
                        {window.locale.translate("In this section of the report, it is possible to detemine all the activities done on a container or cask. These include movements, dilution, sampling and etc.")}
                        <br /><br />
                        {window.locale.translate("Tracking of container and casks helps figuring the history of it and allows to view for on what date and for what purpose something was added or removed from it. For example, adding spirit as a result of bulk production and then removing it from the container for the purpose of filling/bottling. Hence, all the history can be found here.")}
                        {window.locale.translate("The following actions are associated with tracking a product.")}
                        <br /><br />
                        - {window.locale.translate("In - means the product was created as a result and added to the inventory")}
                        <br />
                        - {window.locale.translate("Out - means the product was used in a module and being subtracted from the inventory")}
                        <br />
                        - {window.locale.translate("Change - means there was manual edit or update action performed on its inventory")}
                        <br />
                        <br /><br />
                        {window.locale.translate("The activities for actions are:")}
                        <br /><br />
                        - {window.locale.translate("Manual - when the edit/update action is performed manually on its inventory")}
                        <br />
                        - {window.locale.translate("Purchased - when it was purchased")}
                        <br />
                        - {window.locale.translate("Distillation")}
                        <br />
                        - {window.locale.translate("Redistillation")}
                        <br />
                        - {window.locale.translate("Bulk Production")}
                        <br />
                        - {window.locale.translate("Filling/Bottling")}
                        <br />
                        - {window.locale.translate("Dispatching")}
                        <br />
                        - {window.locale.translate("Disposal")}
                        <br />
                        - {window.locale.translate("Move - when it was moved from which container to which container")}
                        <br />
                        - {window.locale.translate("Water added - dilution")}
                        <br />
                        - {window.locale.translate("Sample picked - from which container and of which product")}
                        <br />
                        - {window.locale.translate("Vendor dispatches")}
                        <br />
                        - {window.locale.translate("Vendor receipts")}
                        <br />
                        <br /><br />
                        {window.locale.translate("The image below shows examples")}
                        <br /><br />
                        <br /><br />
                        <img src={trackingContainers1} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                        <img src={trackingContainers2} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                    </Element>




                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">
                        <TreeView>
                            <TreeItem nodeId="1" lable="Productions & Dispatches" onClick={() => setCurrentSubItem("ProdVSDisp")} />
                        </TreeView>
                    </div>
                </div>
            </div>
        </div>
    )


}