import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import intiazlizeContainer from "./../../../images/Guide/intiazlizeContainer.jpg";
import intiazlizeProduct from "./../../../images/Guide/intiazlizeProducts.jpg";



export default function Overview() {
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
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Inventory")}</h2>
                    <Element name="Overview">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Overview")}</h4>
                        {window.locale.translate("Inventory in eDistillery is maintained by the representation of lots. A lot is a set of any product that represents the specific property or time as which it was entered into the system. You are free to use your defined lots or leave it as blank if you do not prefer to maintain the record of lots. If you leave it blank, system will automatically mark the current date and time for that entry.  ")}
                        <br /><br />
                        {window.locale.translate("Besides lots, There are different ways in which inventory can be stored in eDistilery depending on the product type. This is how you can store different types of products:  ")}
                        <br /><br />
                        <b>{window.locale.translate("Storage Containers")}:</b>
                        <br />
                        - {window.locale.translate("Distillates")}
                        <br />
                        - {window.locale.translate("Bulk Products")}
                        <br /><br />
                        <b>{window.locale.translate("Casks")}:</b>
                        <br />
                        - {window.locale.translate("Distillates Only")}
                        <br /><br />
                        <b>{window.locale.translate("Manually")}:</b>
                        <br />
                        - {window.locale.translate("Raw Materials")}
                        <br />
                        - {window.locale.translate("Imported Products")}
                        <br />
                        - {window.locale.translate("Finished Products")}
                    </Element>

                    <Element name="Purchasable" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Purchasable Products")}</h4>
                        {window.locale.translate("In eDistillery, only raw materials and imported products can be entered manaully in the form of purchases can be stored manually in the form of lots (optional).")}
                        <br /><br />
                        {window.locale.translate("Raw Materials refers to mash and raw/neutral alcohol while imported products are the ready made spirits bought from spirit manufacturars.")}
                        <br /><br />
                        {window.locale.translate("eDistillery does not provide invoicing system as it is an alcohol record book application. Purchases are just representation of items being entered into the system.")}

                    </Element>

                    <Element name="Workable" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Workable Products")}</h4>
                        {window.locale.translate("Distillates and bulk products can be made from the productions section of the application using the raw materials and imported products.  .")}
                        <br /><br />
                        {window.locale.translate("Already manufactured distillates and bulk products can also be used for redistillation or new bulk products..")}
                        <br /><br />
                        {window.locale.translate("Finished products can be entered from the packaging section of the application. These are the distillates, bulk products or even imported products that are filled into bottles and cans and are ready to be dispatched. Dispatches of finished products can be done from dispatches sections.")}

                    </Element>



                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">
                        <TreeView>
                            <TreeItem nodeId="1" label="Overview" onClick={() => setCurrentSubItem("Overview")} />
                            <TreeItem nodeId="2" label="Purchasable Products" onClick={() => setCurrentSubItem("Purchasable")} />
                            <TreeItem nodeId="3" label="Workable Products" onClick={() => setCurrentSubItem("Workable")} />
                        </TreeView>
                    </div>
                </div>
            </div>
        </div>
    )


}