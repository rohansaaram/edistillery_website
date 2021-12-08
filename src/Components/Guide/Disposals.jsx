import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";



import dispose from "./../../images/Guide/dispose.jpg";
import disposeUpdate from "./../../images/Guide/disposeUpdate.jpg";


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
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Disposals")}</h2>
                    <Element name="">
                        {window.locale.translate("Not all distilleries or warehouses redistill the feints obtained from distillation. In fact, they just dispose the feints after notifying the concerned custom authorities.")}
                        <br /><br />
                        {window.locale.translate("In case you want to dispose feints, you must first transfer them into a trash container, the resulting alcohol content will automatically be calculated by the system using the density and mass volume tables at standard 20ºC = 68ºF. Once you have transferred into a trash container, now you can dispose them from the storage page in the 'Trash Containers' tab as shown in the image below.")}
                        <br /><br />
                        <img src={dispose} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                    </Element>
                    <Element name="Moving" className="mt-5">
                        <h4>{window.locale.translate("Moving")}</h4>
                        {window.locale.translate("For trash inventory i.e feints, it is not possible to move it back again to a storage container. Please be cautious while moving something into the trash container as it cannot be undone.")}
                        <br /><br />
                        {window.locale.translate("Moving trash inventory is only possible between trash containers only and no where else except for disposing")}
                    </Element>
                    <Element name="Editing" className="mt-5">
                        <h4>{window.locale.translate("Editing/Updating An Entry")}</h4>
                        {window.locale.translate("To edit or update an entry of disposal, you can go to the disposals section and update that entry as shown in the image below.")}
                        <br /><br />
                        <img src={disposeUpdate} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                        {window.locale.translate("Please note that by changing the quantity of the disposed stock, the inventory will not be affected.")}
                        <br /><br />
                    </Element>



                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">
                        <TreeView>
                            <TreeItem nodeId="1" label="Moving" onClick={() => setCurrentSubItem("Moving")} />
                            <TreeItem nodeId="2" label="Updating Entry" onClick={() => setCurrentSubItem("Editing")} />
                        </TreeView>
                    </div>
                </div>
            </div>
        </div>
    )


}