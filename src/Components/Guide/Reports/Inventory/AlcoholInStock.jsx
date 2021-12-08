import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";



import ReportsAlcoholInStock from "./../../../../images/Guide/ReportsAlcoholInStock.jpg";


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
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Alcohol In Stock")}</h2>
                    <Element name="">
                        {window.locale.translate("This section in the reports demonstrates all the alcohol present at each place and step in your warehouse at the current time as shown in the below image.")}
                        <br /><br />
                      
                        <br /><br />
                        <img src={ReportsAlcoholInStock} style={{ width: "100%" }} />
                        <br /><br />
                        {window.locale.translate("The categories involve:")}
                        <br /><br />
                        - {window.locale.translate("Raw materials including raw/neutral alcohol")}
                        <br />
                        - {window.locale.translate("The main storage containers of the inventory where bulk products and hearts the distillates are stored")}
                        <br />
                        - {window.locale.translate("The containers with feints i.e heads and tails")}
                        <br />
                        - {window.locale.translate("The trash containers containing feints that needs to be disposed")}
                        <br />
                        - {window.locale.translate("Casks")}
                        <br />
                        - {window.locale.translate("Imported products i.e ready made spirits purchased")}
                        <br />
                        - {window.locale.translate("The litres of pure alcohol in packaged bottles and cans")}
                        <br />
                        <br /><br />
                        {window.locale.translate("Further you can click on the more option to view more detailed level of pure alcohol present in any of the categories.")}
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