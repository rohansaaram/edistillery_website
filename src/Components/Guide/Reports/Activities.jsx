import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";



import finishDistillation from "./../../../images/Guide/finishDistillation.jpg";


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
                <div className="col-sm-9 pb-5 mb-5">
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Activities")}</h2>
                    <Element name="" className="">
                        {window.locale.translate("The Reports section reflects all the records that covers the entire manufacturing process from starting with the raw materials used till dispatching the products.")}
                        <br /><br />
                        {window.locale.translate("In the reports section, you can find out and download the PDF and CSV versions for the activites that have been done in a given time period in each section of the application.")}
                        <br /><br />
                        {window.locale.translate("For each section, you will find all the records individually and also a summary of the total number of lots being produced along with the litres of pure alcohol on aggregate.")}
                        <br /><br />
                        {window.locale.translate("These involve:")}
                        <br /><br />
                        - {window.locale.translate("Purchases")}
                        <br />
                        - {window.locale.translate("Production processes")}
                        <br />
                        - {window.locale.translate("Packaging")}
                        <br />
                        - {window.locale.translate("Stock on hand")}
                        <br />
                        - {window.locale.translate("Sales & Dispatches")}
                        <br />
                        - {window.locale.translate("Tax free dispatches")}
                        <br />
                        - {window.locale.translate("Disposals")}
                        <br />
                        - {window.locale.translate("Samples Picked")}
                        <br />
                    </Element>

                    <Element name="Purchases" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Purchases")}</h4>
                        {window.locale.translate("All the purchases of the raw materials and ready made spirits can be found out here.")}
                        <br /><br />
                        {window.locale.translate("The section summarizes and lists:")}
                        <br /><br />
                        - {window.locale.translate("Raw material/Product")}
                        <br />
                        - {window.locale.translate("Batch/Lot number")}
                        <br />
                        - {window.locale.translate("Quantity, Strength and Litres of pure alcohol")}
                        <br />
                        - {window.locale.translate("Weight of raw material")}
                        <br />
                    </Element>

                    <Element name="Distillations" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Distillations/Redistillations")}</h4>
                        {window.locale.translate("The distillation section summarizes and lists:")}
                        <br /><br />
                        - {window.locale.translate("Date of distillation")}
                        <br />
                        - {window.locale.translate("Still used")}
                        <br />
                        - {window.locale.translate("Batch/Lot number")}
                        <br />
                        - {window.locale.translate("Type of distillate")}
                        <br />
                        - {window.locale.translate("Transferred from container")}
                        <br />
                        - {window.locale.translate("Quantity, Strength and Litres of pure alcohol transferred to the still")}
                        <br />
                        - {window.locale.translate("Transferred to container")}
                        <br />
                        - {window.locale.translate("Quantity, Strength and Litres of pure alcohol transferred from the still")}
                        <br />
                    </Element>

                    <Element name="BulkProductions" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Bulk Productions")}</h4>
                        {window.locale.translate("The bulk production section records summarizes and lists:")}
                        <br /><br />
                        - {window.locale.translate("Date of bulk production")}
                        <br />
                        - {window.locale.translate("Batch/Lot number")}
                        <br />
                        - {window.locale.translate("Type of bulk product")}
                        <br />
                        - {window.locale.translate("Transferred from containers")}
                        <br />
                        - {window.locale.translate("Quantity, Strength and Litres of pure alcohol used")}
                        <br />
                        - {window.locale.translate("Transferred to containers")}
                        <br />
                        - {window.locale.translate("Quantity, Strength and Litres of pure alcohol resulted")}
                        <br />
                    </Element>


                    <Element name="Packaging" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Packaging/Bottling Runs")}</h4>
                        {window.locale.translate("The packaging section summarizes and lists:")}
                        <br /><br />
                        - {window.locale.translate("Date of packaging/bottling")}
                        <br />
                        - {window.locale.translate("Product type")}
                        <br />
                        - {window.locale.translate("Batch/Lot number")}
                        <br />
                        - {window.locale.translate("Packaging size")}
                        <br />
                        - {window.locale.translate("Quantity, strength and litres of pure alcohol filled")}
                        <br />
                        - {window.locale.translate("Total units filled")}
                        <br />
                        - {window.locale.translate("Packaging losses incurred")}
                        <br />
                        - {window.locale.translate("Filled from container")}
                        <br />
                    </Element>




                    <Element name="VendorFilling" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Packaging Through Vendors")}</h4>
                        {window.locale.translate("The list of all the stock dispatched to vendors and the packaged finished products received back can be found here in the listed format:")}
                        <br /><br />
                        - {window.locale.translate("Date of dispatch")}
                        <br />
                        - {window.locale.translate("Product type and Product name")}
                        <br />
                        - {window.locale.translate("Batch/Lot numbers dispatched")}
                        <br />
                        - {window.locale.translate("Containers from which it is being sent out")}
                        <br />
                        - {window.locale.translate("Quantity, strength and litres of pure alcohol of the containers")}
                        <br />
                        - {window.locale.translate("Date of receipts")}
                        <br />
                        - {window.locale.translate("Quantities received of finished products in units")}
                        <br />
                    </Element>

                    <Element name="Dispatches" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Sales & Dispatches")}</h4>
                        {window.locale.translate("The dispatches sections lists:")}
                        <br /><br />
                        - {window.locale.translate("Date of dispatch")}
                        <br />
                        - {window.locale.translate("Product type and Product name")}
                        <br />
                        - {window.locale.translate("Batch/Lot number")}
                        <br />
                        - {window.locale.translate("Taxable or Tax-free")}
                        <br />
                        - {window.locale.translate("Packaging size")}
                        <br />
                        - {window.locale.translate("Quantity, strength and litres of pure alcohol being dispatched")}
                        <br />
                        - {window.locale.translate("Total units dispatched")}
                        <br />
                    </Element>




                    <Element name="Disposals" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Disposals")}</h4>
                        {window.locale.translate("The records for all the feints that have been disposed can be found here in summarzed and listed format:")}
                        <br /><br />
                        - {window.locale.translate("Date of disposal")}
                        <br />
                        - {window.locale.translate("Batch/Lot numbers disposed")}
                        <br />
                        - {window.locale.translate("Quantity, strength and litres of pure alcohol being disposed")}
                        <br />
                    </Element>




                    <Element name="Samples" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Samples Picked")}</h4>
                        {window.locale.translate("The list of all the samples being picked from each cask can be found here in the listed format:")}
                        <br /><br />
                        - {window.locale.translate("Date of sample taken")}
                        <br />
                        - {window.locale.translate("Product type and Product name")}
                        <br />
                        - {window.locale.translate("Batch/Lot numbers from which sample is picked")}
                        <br />
                        - {window.locale.translate("Cask identification number")}
                        <br />
                        - {window.locale.translate("Quantity, strength and litres of pure alcohol of the sample and the cask")}
                        <br />
                        - {window.locale.translate("Age of the spirit")}
                        <br />
                    </Element>

                 


                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">
                        <TreeView>
                            <TreeItem nodeId="1" label="Purchases" onClick={() => setCurrentSubItem("Purchases")} />
                            <TreeItem nodeId="2" label="Distillations/Redistillations" onClick={() => setCurrentSubItem("Distillations")} />
                            <TreeItem nodeId="3" label="Bulk Productions" onClick={() => setCurrentSubItem("BulkProductions")} />
                            <TreeItem nodeId="4" label="Packaging" onClick={() => setCurrentSubItem("Packaging")} />
                            <TreeItem nodeId="5" label="Packaging Through Vendors" onClick={() => setCurrentSubItem("VendorFilling")} />
                            <TreeItem nodeId="6" label="Sales & Dispatches" onClick={() => setCurrentSubItem("Dispatches")} />
                            <TreeItem nodeId="7" label="Disposals" onClick={() => setCurrentSubItem("Disposals")} />
                            <TreeItem nodeId="8" label="Samples Picked" onClick={() => setCurrentSubItem("Samples")} />
                        </TreeView>
                    </div>
                </div>
            </div>
        </div>
    )


}