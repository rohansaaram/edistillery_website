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
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Bulk Productions")}</h2>
                    <Element name="">
                        {window.locale.translate("Bulk productions is the main asset of eDistillery. This section allows you to create your own bulk product of any type like liquor, whiskey or even macerate and reuse them by mixing any type of product with it.")}
                        <br /><br />
                        {window.locale.translate("It is possible to use raw/neutral alcohol, any kind of already created bulk product, distillates and even ready made spirits purchased from outside.")}
                        <br /><br />
                        {window.locale.translate("While mixing these spirits or beverages, the alcohol volume is automatically calculated by using the density and mass volumes table at standard 20ºC = 68ºF. The resulting litres and litres of pure alcohol are also automatically calculated by the system.  ")}
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