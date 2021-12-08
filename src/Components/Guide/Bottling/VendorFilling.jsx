import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";



import dilution from "./../../../images/Guide/dilution.jpg";
import dilution1 from "./../../../images/Guide/dilution1.jpg";


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
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Filling Through Vendors")}</h2>
                    <Element name="">
                        {window.locale.translate("Filling through vendors is the process when you send you spirit in bulk to be packaged by other vendors. In this case, you create a new dispatch entry in Litres that has been sent. When the packaged bottles/cans are received, you mark that dispatch entry as received and enter the number of bottles and cans received that will be added to your inventory.")}
                        <br /><br />
                        {window.locale.translate("Dispatching the spirits to be filled by vendors is possible from both storage containers and imported products (ready made spirits that you purchase).")}
                        <br /><br />
                        {window.locale.translate("These dispatches are marked as tax-free diapatches in the system and are classified accordingly in the reports section.")}
                        <br /><br />
                        {window.locale.translate("The losses incurred during the process of filling through vendors is on the vendor and hence you are not liable to record those losses and system does not maintain that record.  It is simple the amount of litres you transfer and the amount of packaged quantity you receive.")}
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