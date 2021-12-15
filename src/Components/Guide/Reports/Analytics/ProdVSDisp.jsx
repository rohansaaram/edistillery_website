import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";





import prodvsdisp1 from "./../../../../images/Guide/prodvsdisp1.jpg";
import prodvsdisp2 from "./../../../../images/Guide/prodvsdisp2.jpg";
import prodvsdisp3 from "./../../../../images/Guide/prodvsdisp3.jpg";

export default function ProdVsdisp() {
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
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Analytics")}</h2>
                    <Element name="ProdVSDisp" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Productions & Dispatches")}</h4>
                        {window.locale.translate("This section of analytics provides the comparison for the productions and dispatches of finished products in a given time range.")}
                        <br /><br />
                        {window.locale.translate("These analytical reports enables you to be able to have a bigger insight of the total productions and sales of all or any particular product that can thus help in future in increasing the productions in your warehouse.")}
                        <br /><br />
                        {window.locale.translate("By going to Reports -> Analytics -> Productions & Dispatches, you can select a time range as shown in the below image:")}
                        <br /><br />
                        <img src={prodvsdisp1} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                        {window.locale.translate("The report summarizes the total alcohol in terms of:")}
                        <br /><br />
                        - {window.locale.translate("Opening litres of pure alcohol in finished products")}
                        <br />
                        - {window.locale.translate("Litres of pure alcohol filled inside bottles/cans")}
                        <br />
                        - {window.locale.translate("Litres of pure alcohol dispatched in terms of bottles/cans")}
                        <br />
                        - {window.locale.translate("The final closing litres of pure alcohol remaining in the finished packaged products.")}
                        <br /><br />
                        {window.locale.translate("As well as for each finished product:")}
                        <br /><br />
                        - {window.locale.translate("The opening stock")}
                        <br />
                        - {window.locale.translate("The filled quantity")}
                        <br />
                        - {window.locale.translate("The dispatched quantity ")}
                        <br />
                        - {window.locale.translate("The final closing quantity in warehouse")}
                        <br /><br />
                        <img src={prodvsdisp2} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                        <img src={prodvsdisp3} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                    </Element>




                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">
                        <TreeView>
                            <TreeItem nodeId="1" label="Productions & Dispatches" onClick={() => setCurrentSubItem("ProdVSDisp")} />
                        </TreeView>
                    </div>
                </div>
            </div>
        </div>
    )


}