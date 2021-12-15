import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";



import finishDistillation from "./../../../images/Guide/finishDistillation.jpg";


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
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Distillations")}</h2>
                    <Element name="" className="">
                        {window.locale.translate("In the distillation module, we keep record of all the facts of a distillation process. The sku of the still used, the losses allowed and incurred, the feints obtained by the process and the duration the process took. ")}
                    </Element>
                    <Element name="Distillations" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Distillations")}</h4>
                        {window.locale.translate("In eDistillery, the distillation process accepts only raw materials. It can be in the form of either raw/neutral alcohol or mash made from the mixture of raw materials that you use for fermentation. However, eDistillery currently does not provide the fermentation module.")}
                        <br /><br />
                        {window.locale.translate("If you produce alcohol in your warehouse, it is feasible to enter the amount of mash used in KG (or your preferred unit) for the fermentation process directly in the distillation module of the application. So the result of the distillation process will be the alcohol distilled the first time after it is produced from the fermentation process. ")}
                        <br /><br />
                        {window.locale.translate("eDistillery currently does not provide a mechanism for managing individual raw material ingredients and the process of fermentation, as it is simply an application that manages the term 'ALCOHOL' in a warehouse. However, it will be available very soon in the near future as more and more customers demand for it. ")}
                    </Element>
                    <Element name="Binding" className="mt-5">
                        <h5 style={{ marginBottom: "50px" }}>{window.locale.translate("Binding Raw Materials")}</h5>
                        {window.locale.translate("For easy and speedy process, you can bind raw materials to distillates in settings->distillates, so next time when you start a distillation process, the binded raw material is auto selected for that distillate.")}
                    </Element>
                    <Element name="Redistillations" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Redistillations")}</h4>
                        {window.locale.translate("Redistillations is the process of distillting an already distilled product in the containers. You can choose multiple containers and can also distill feints or even mix multuple distillates and feints together for redistillation.")}
                        <br /><br />
                        {window.locale.translate("In the redistillation process, you can only select hearts and feints of distillates from the containers.")}
                    </Element>
                    <Element name="FinishingProcess" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Finishing Process")}</h4>
                        {window.locale.translate("When finishing a distillation or redistillation, you can keep record of both the hearts and the feints resulted from the process. Furthermore, the feints are optional as they are not definite.")}
                        <br /><br />
                        {window.locale.translate("To finish the process, it is possible to either provide the quantity in litres or quantity in KGs as shown in the below . If provided in the KGs, the specific gravity is automatically determined by the application using the integrated density tables.")}
                        <br /><br />
                        <img src={finishDistillation} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                    </Element>
                    <Element name="Losses" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Losses")}</h4>
                        {window.locale.translate("Losses are possible when the process is a redistillation or if the source used in the process is alcohol while distillation. If mash is used as the source, the losses are not possible.")}
                        <br /><br />
                        {window.locale.translate("The allowed loss is 3.0928% as set by the German government. However, if you wish to change the allowed loss percentage, you can do that in settings -> distillations -> set allowed loss.  ")}
                    </Element>




                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">
                        <TreeView>
                            <TreeItem nodeId="1" label="Distillations" onClick={() => setCurrentSubItem("Distillations")} />
                            <TreeItem nodeId="3" label="Binding Raw Materials" onClick={() => setCurrentSubItem("Binding")} />
                            <TreeItem nodeId="2" label="Redistillations" onClick={() => setCurrentSubItem("Redistillations")} />
                            <TreeItem nodeId="4" label="Finishing Process" onClick={() => setCurrentSubItem("FinishingProcess")} />
                            <TreeItem nodeId="5" label="Losses" onClick={() => setCurrentSubItem("Losses")} />
                        </TreeView>
                    </div>
                </div>
            </div>
        </div>
    )


}