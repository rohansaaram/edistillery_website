import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";



import ReportsSnapshot from "./../../../../images/Guide/ReportsSnapshot.jpg";


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
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Inventory Snapshots")}</h2>
                    <Element name="">
                        {window.locale.translate("Snapshots of the inventory can be created and viewed in the reports -> inventory -> snapshots section.")}
                        <br /><br />
                        {window.locale.translate("Snapshots have a lot of uses cases. For example you might want to take snapshots manually before a stocktaking for your personal records. Sometimes, it is also required in the customs or excise reports if demended by the regulatories. Another most important use of snapshots are to generate the opening stock positions of inventories of products that can be used in many aspects for example reports generations. These snapshots also help in recording the closing inventories.")}
                        <br /><br />
                        {window.locale.translate("The snapshots in eDistillery are automatically captured daily at midnight. However, if you want to create a manual snapshot, you can do so as well at any time as shown in the below image.")}
                        <br /><br />
                        <br /><br />
                        <img src={ReportsSnapshot} style={{width:"100%"}} />
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