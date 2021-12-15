import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";





import trackingProducts1 from "./../../../../images/Guide/trackingProducts.jpg";
import trackingProducts2 from "./../../../../images/Guide/trackingProducts1.jpg";

export default function TrackingProducts() {
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
                <div className="col-sm-9 pb-5 mb-5">
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Tracking")}</h2>
                    <Element name="ProdVSDisp" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Products & Lots")}</h4>
                        {window.locale.translate("The tracking section of the reports allows users to view the extensive reports on the actions performed on any product and/or particularly any lot.")}
                        <br /><br />
                        {window.locale.translate("For each module for example purchases, production, packaging, dispatches or disposals etc, it is possible to view at what time which product came in or was used to create a product and how much was produced as a result.")}
                        <br /><br />
                        {window.locale.translate("This way a detailed analysis can be done on any product or a particular lot in a given time range.")}
                        <br /><br />
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
                        <img src={trackingProducts1} alt="" srcset="" style={{ height: "100%" }} />
                        <br /><br />
                        <img src={trackingProducts2} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
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