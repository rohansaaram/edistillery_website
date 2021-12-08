import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";



import alcoholbook1 from './../../../images/Guide/alcoholbook1.jpg'
import alcoholbook2 from './../../../images/Guide/alcoholbook2.jpg'

export default function TheAlcoholBook() {
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
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("The Alcohol Book")}</h2>
                    <Element name="ProdVSDisp" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Overview")}</h4>
                        {window.locale.translate("Alcohol book, is essentially the idea of eDistillery. This book helps you gather data about all the alcohol present inside your warehouse and more importantly how much alcohol is present at what stage.")}
                        <br /><br />
                        {window.locale.translate("Customs and excise regulatory authorities around the world in every country requires these reports to find out the alcohol levels in your warehouse. They bound us to keep track of all the activities and more importantly maintain the records of losses encountered during each process and finally submit the report monthly or intervally. That is why, edistillery is designed and makes your work extensively easy and speedy.")}
                        <br /><br />
                        {window.locale.translate("The alcohol book helps you do that all by maintaining all the records that include buying alcohol, usage in distillations or productions, manufactured by the process of distillation or bulk production, then the bottling process and then its dispatch. And finally, the losses encourtered at every step and disposals or other actions performed on it.")}
                        <br /><br />
                        <b>{window.locale.translate("It is worked out as follows:")}</b>
                        <br />
                        {window.locale.translate("Opening alcohol + incoming alcohol - outgoing alcohol - losses = closing litres of pure alcohol")}
                        <br /><br />
                        {window.locale.translate("In the alcohol book, any number you see is just the litres of pure alcohol (not the quantity powered by alcohol volume).")}
                        <br /><br />
                        {window.locale.translate("This is how the data can be seen on the monthly table.")}
                        <br /><br />
                        <img src={alcoholbook1} alt="" style={{width:"100%"}} />
                        <br /><br />
                        {window.locale.translate("For each month, you can finalize the sheets by going inside of the sheet. If the sheet is not finilized, the opening level of alcohol is fetched from the snapshots taken by the system.")}
                        <br /><br />
                        {window.locale.translate("Based on the opening stock, the closing stock is calculated using the formula above on this page.")}
                        <br /><br />
                    </Element>
                    <Element name="finalize" className="mt-5">
                        <h4>{window.locale.translate("Finalization Of Month's Data")}</h4>
                        <br />
                        <b>{window.locale.translate("Next up.")}</b>{window.locale.translate("is going inside of the monthly sheet and finalizing the month's data, as shown in the image below:")}
                        <br /><br />
                        <img src={alcoholbook2} alt="" style={{width:"100%"}} />
                        <br /><br />
                        {window.locale.translate("For flexibility, the mishaps in a warehouse can sometimes cause losses beyond the known modes. The alcohol book allows you to change the losses as shown in the image above as they happen in your warehouse and you may add a note to it.")}
                        <br /><br />
                        {window.locale.translate("This way by the whole process, you can reduce a lot of human effort to manually maintain this sheet and might prove to be very useful in many cases.")}
                        <br /><br />
                    </Element>

                    <Element name="filing" className="mt-5">
                        <h4>{window.locale.translate("Excise filing")}</h4>
                        {window.locale.translate("The future aims of the eDistillery team is to finally generate the monthly excise forms filled automatically for the companies of many countries.")}
                        <br /><br />
                        {window.locale.translate("We will keep you informed as this keeps happening.")}
                        <br /><br />
                    </Element>




                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">
                        <TreeView>
                        <TreeItem nodeId="1" label="Finalization" onClick={() => setCurrentSubItem("finalize")} />
                        <TreeItem nodeId="2" label="Excise Filing" onClick={() => setCurrentSubItem("filing")} />
                        </TreeView>
                    </div>
                </div>
            </div>
        </div>
    )


}