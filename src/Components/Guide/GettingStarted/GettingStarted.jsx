import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";


export default function GettingStarted() {
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
                    <h2 style={{ marginBottom: "20px" }}>{window.locale.translate("Getting Started")}</h2>
                    <Element name="Introduction">
                        <h5 style={{ marginBottom: "20px" }}>{window.locale.translate("Introduction")}</h5>
                        {window.locale.translate("Alcohol, as an excisable product, needs to be recorded in every step of its production. Therefore, the objective of this application is purely based on the record keeping of alcohol inside the warehouse. ")}
                        <br /><br />
                        {window.locale.translate("The application is built in coordination with distillers and spirit manufacturers just like you. The major concern that is being talked about is the calculations and conversions involved while producing or moving alcohol with different strengths. eDistillery does all that automatically for you. So mixing alcohol with different volumes or strength in edistillery is just like mixing physically. You do not need to specify the strength in the application however you can physically verify the strength with an Alcoholmeter or an Hydrometer.")}
                    </Element>
                    <Element name="Who" className="mt-5">
                        <h5 style={{ marginBottom: "20px" }}>{window.locale.translate("Who can use eDistillery ?")}</h5>
                        {window.locale.translate("eDistillery is developed for every spirit brand that needs to keep record of alcohol and may or may not be subject to report the stocks and disposals to the concerned authorities. ")}
                        <br /><br />
                        {window.locale.translate("eDistillery is best in the following cases:")}
                        <br />
                        -{window.locale.translate("If you have a bonded warehouse and you ferment and distill the alcohol yourself.")}
                        <br />
                        -{window.locale.translate("If you purcahse raw alcohol and distill it yourself to produce your own brand.")}
                        <br />
                        -{window.locale.translate("If you do not have a bonded warehouse and you do not ferment and distill the alcohol yourself but you purchase ready made spirits and either add flavor to it or not but package them to sell your own brand.")}
                    </Element>
                    <Element name="Steps" className="mt-5">
                        <h5 style={{ marginBottom: "20px" }}>{window.locale.translate("Steps Involved")}</h5>
                        {window.locale.translate("Depending upon the type of your business, you may or may not need all the modules in eDistillery. eDistillery gives you the flexibility to pay and use only the modules required by your business. ")}
                        <br /><br />
                        {window.locale.translate("For a typical spirit producing warehouse, the following steps are involved in producing alcoholic beverages that edistillery covers:")}
                        <br />
                        -{window.locale.translate("Fermentation")}
                        <br />
                        -{window.locale.translate("Distillation")}
                        <br />
                        -{window.locale.translate("Bulk Production")}
                        <br />
                        -{window.locale.translate("Dilution")}
                        <br />
                        -{window.locale.translate("Aging")}
                        <br />
                        -{window.locale.translate("Mixing")}
                        <br />
                        -{window.locale.translate("Packaging")}
                        <br />
                        -{window.locale.translate("Dispatches")}
                        <br />
                        -{window.locale.translate("Disposals of Feints")}
                        <br />
                        <br />
                        {window.locale.translate("eDistillery allows its customers to get a bird eye view of all these steps and the warehouse by giving a virtual overview of the warehouse.It consists of storage containers that are used to store alcoholic beverages and work upon them.")}
                        <br />
                        <br />
                        {window.locale.translate("Note: eDistillery currently does not support fermentation and is gathering feedback from its customers whether or not to implement in the scenario of alcohol record keeping. To give your feedback, please login to the application and go the section 'Contact Us'. More details can be found in the distillations section of this guide.")}

                    </Element>


                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">
                        <Sticky>
                            <TreeView>
                                <TreeItem nodeId="1" label="Introduction" onClick={() => setCurrentSubItem("Introduction")} />
                                <TreeItem nodeId="2" label="Who can use eDistillery ?" onClick={() => setCurrentSubItem("Who")} />
                                <TreeItem nodeId="3" label="Steps Involved" onClick={() => setCurrentSubItem("Steps")} />
                            </TreeView>
                        </Sticky>
                    </div>
                </div>
            </div>
        </div>
    )


}