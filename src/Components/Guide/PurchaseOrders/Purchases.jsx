import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import intiazlizeContainer from "./../../../images/Guide/intiazlizeContainer.jpg";
import intiazlizeProduct from "./../../../images/Guide/intiazlizeProducts.jpg";



export default function Purchases() {
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
                        <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Purchase Orders")}</h2>
                        {window.locale.translate("Both raw materials and imported products can be added to eDistillery by means of purchase orders. Purchase orders in eDistillery are to keep record of the incoming mash, raw/neutral alcohol and ready made spirits. These are not typical invoices generated. ")}
                        <br /><br />
                        {window.locale.translate("Please also note that raw materials and imported products are not stored in containers. ")}
                        <br /><br />
                        {window.locale.translate("While adding a purchase record, you can either specify lot numbers or leave it as blank. If you leave it as blank, all items of a single purchase order will be allocated the same lot number automatically that is the current date and time. ")}
                        <br /><br />
                        {window.locale.translate("Purchase records can be added from: ")}
                        <br /><br />
                        1. <a href="https://app.edistillery.net/raw-materials/purchases" target="_blank">{window.locale.translate("Purchases -> Raw Materials")}</a>.
                        <br />
                        2. <a href="https://app.edistillery.net/imported-products/purchases" target="_blank">{window.locale.translate("Purchases -> Imported Products")}</a>.


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