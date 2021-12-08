import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";





import stocktaking from "./../../../../images/Guide/stocktaking.jpg";
import stocktaking2 from "./../../../../images/Guide/stocktaking2.jpg";

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
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Inventory Stocktakings")}</h2>
                    <Element name="">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Stock-takings")}</h4>
                        {window.locale.translate("Stocktakings are generally carried out in warehouses on monthly or weekly basis. Stocktakings are the ideal way to moniter and manage the inventory and allows you to maintain the detailed history of changes made and store them for later analysis. You are free to make stocktakings at any time of your choice.")}
                        <br /><br />
                        {window.locale.translate("Stocktakes document:")}
                        <br />
                        - {window.locale.translate("Reflects the stock counts and differences")}
                        <br />
                        - {window.locale.translate("Date of stocktake")}
                        <br />
                        - {window.locale.translate("Action taken to elimnate the differnce")}
                        <br /><br />
                        {window.locale.translate("These reports are crucial when reporting excise duties and records to customs and regulatory authorities of various countries.")}
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




                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    )


}