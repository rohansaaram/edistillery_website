import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";



import taxFreeDispatches from "./../../images/Guide/taxFreeDispatches.jpg";
import importCSVDispatches from "./../../images/Guide/importCSVDispatches.jpg";


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
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Dispatches")}</h2>
                    <Element name="">
                        {window.locale.translate("When you are done with bottling runs and have the finished bottles/cans ready in hand in the warehouse, now you can dispatch them from the dispatches section.")}
                        <br /><br />
                        {window.locale.translate("You can choose multiple products to dispatch in a single entry or create a separte entry for each dispatch as per your requirement.")}
                    </Element>
                    <Element name="TaxFree" class="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Tax Free Dispatches")}</h4>
                        {window.locale.translate("By default, all the dispatches are taxable. If you want to make a dispatch tax free, you click tick the checkbox while creating a new dispatch entry as shown in the image below.")}
                        <br /><br />
                        <img src={taxFreeDispatches} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                    </Element>
                    <Element name="importCSV" class="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Importing Dispatches From CSV")}</h4>
                        {window.locale.translate("If the list of dispatches are too large and you find it feasible to add them in the csv file, then you can use the option of importing the dispatches from csv. This create a single entry for the products being dispatched.")}
                        <br /><br />
                        {window.locale.translate("The format of the csv file should be as shown in the image below. The headers should also be present in the first row and there should be only two columns, SKUs and Quantity. Sku should be exactly the same as in the system for that product so it can be matched and created. If there are SKUs that are not matching or are not in stock, you will be notified before the system creates an entry for that.")}
                        <br /><br />
                        <img src={importCSVDispatches} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                    </Element>




                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">
                        <TreeView>
                            <TreeItem nodeId="1" label="Tax Free Dispatches" onClick={() => setCurrentSubItem("TaxFree")} />
                            <TreeItem nodeId="2" label="Importing From CSV" onClick={() => setCurrentSubItem("importCSV")} />
                        </TreeView>

                    </div>
                </div>
            </div>
        </div>
    )


}