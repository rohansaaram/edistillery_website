import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import stocktaking from "./../../../images/Guide/stocktaking.jpg";
import stocktaking2 from "./../../../images/Guide/stocktaking2.jpg";

import containers from "./../../../images/Guide/hardedit_containers.jpg";
import manually from "./../../../images/Guide/hardedit_manually_stored_products.jpg";


export default function ChangeInventory() {
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
                    <Element name="">
                        <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Change Inventory")}</h2>
                        {window.locale.translate("There are two ways to manage and change your inventory when there is a difference between physical and application inventory.")}
                        <br /><br />
                        {window.locale.translate("The first and the ideal one is stocktakings that are generally carried out in warehouses on monthly or weekly basis. Stocktakings allows you to maintain the detailed history of changes made and store them for later analysis. You are free to make stocktakings at any time of your choice.")}
                        <br /><br />
                        {window.locale.translate("The second one is Hard editing the inventory. This method is not recommended as it has no collectively maintained history and might result in wastage of time while analyzing the changes made at the time of viewing various summaries and reports.")}
                    </Element>

                    <Element name="Stocktaking" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Stock-takings")}</h4>
                        {window.locale.translate("Stocktakings helps to analyze the differences in application inventory against physical inventory. This helps in recording the history of changes made and is the ideal way to visualize the differences and maintain your records.")}
                        <br /><br />
                        {window.locale.translate("Stocktakings can be carried out in eDistillery in Reports/Statictics page.")}
                        <br /><br />
                        <img src={stocktaking} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                        {window.locale.translate("Stocktakings are usually carried out in warehouse on monthly or weekly basis. However, in eDisillery, you are free to take as many as required at any time.")}
                        <br /><br />
                        <img src={stocktaking2} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                    </Element>

                    <Element name="HardEditing" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Hard Editing")}</h4>
                        {window.locale.translate("Hard editing the inventory is one way to overcome the difference in the inventory. However it is not recommended to use this method as it is logged separetely for every product and will be hard for you to compile and analyze the differences at the time of viewing the reports and statistics.")}
                        <br /><br />
                        {window.locale.translate("Hard edits can be made from settings -> products and settings -> containers.")}
                        <br /><br />
                        <b>{window.locale.translate("For destillates and bulk products :")}</b>
                        <br /><br />
                        <img src={containers} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                        <b>{window.locale.translate("For raw materials, imported products and finished products :")}</b>
                        <br /><br />
                        <img src={manually} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                    </Element>



                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">
                        <TreeView>
                            <TreeItem nodeId="1" label="Stock-takings" onClick={() => setCurrentSubItem("Stocktaking")} />
                            <TreeItem nodeId="2" label="Hard Editing" onClick={() => setCurrentSubItem("HardEditing")} />
                        </TreeView>
                    </div>
                </div>
            </div>
        </div>
    )


}