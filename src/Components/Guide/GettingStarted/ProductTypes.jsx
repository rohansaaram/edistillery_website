import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";



import setPrivilage from "./../../../images/Guide/setPrivilages.jpg";

export default function ProductTypes() {
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
                    <Element name="Setup">
                        <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Types Of Products")}</h2>
                        {window.locale.translate("The application is based on the following types of products.")}
                    </Element>

                    <Element name="RawMaterials" className="mt-5">
                        <h4 style={{ marginBottom: "25px" }}>{window.locale.translate("Raw Materials")}</h4>
                        {window.locale.translate("In eDistillery, Raw materials are the products that can be purchased and used in distillations and bulk productions. The following two types of products can be added in raw materials:")}
                        <br /><br />
                        1. {window.locale.translate("Mash used with unit as \"Unit\"")}
                        <br />
                        2. {window.locale.translate("Raw/Neutral Alcohol with unit as \"IA (Litres of pure alcohol)\"")}
                        <br /><br />
                        {window.locale.translate("The mash in eDistillery refers to the mixture being created from different raw ingredients and that it is ready to be used for fermentation. Giving 'Unit' as the unit of measurement allows you with the flexibility to refer this to your preferred unit of measurement for the mixture. An example of mash product is the mixture of Rum Mash used in Kilograms.")}
                        <br /><br />
                        {window.locale.translate("eDistillery currently does not support fermentaion but plans to launch it in the near future. Therefore, you need to specify the amount of mash product directly in the distillations module when you first run the distillation on that lot. ")}
                        <br /><br />
                        {window.locale.translate("Likewise, mash product can only be used for distillation and raw/neutral alcohol are free to be used in bulk productions as well.")}

                    </Element>

                    <Element name="Distillates" className="mt-5">
                        <h4 style={{ marginBottom: "25px" }}>{window.locale.translate("Distillates")}</h4>
                        {window.locale.translate("Distillates are the products that are distilled. Here you are free to enter the type of distillate you work with for example, Geist. You can either use raw alcohol or mixture of mashed products for your distillation.")}
                    </Element>

                    <Element name="BulkProducts" className="mt-5">
                        <h4 style={{ marginBottom: "25px" }}>{window.locale.translate("Bulk Products")}</h4>
                        {window.locale.translate("Bulk product are all those products that used to creae your own brand of the drink. In bulk products, you can either use raw alcohol, macerate, distillates and ready made spirits.")}
                        <br /><br />
                        {window.locale.translate("Types of bulk products include Liquor, Macerate, Whiskey, Vodka and are not limited to these only.")}
                    </Element>

                    <Element name="ImportedProducts" className="mt-5">
                        <h4 style={{ marginBottom: "25px" }}>{window.locale.translate("Imported Products")}</h4>
                        {window.locale.translate("Imported products are the ready made spirits that you can purchase in bulk and use either in bulk production of your own product or you can directly bottle them or send it to vendors for bottling purpose.")}
                    </Element>

                    <Element name="FinishedProducts" className="mt-5">
                        <h4 style={{ marginBottom: "25px" }}>{window.locale.translate("Finished Products")}</h4>
                        {window.locale.translate("Finished products are the packaged bottles/cans of the product you have manufactured and are ready to be dispatched.")}
                    </Element>


                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">
                        <Sticky>
                            <TreeView>
                                <TreeItem nodeId="1" label="Raw Materials" onClick={() => setCurrentSubItem("RawMaterials")} />
                                <TreeItem nodeId="2" label="Distillates" onClick={() => setCurrentSubItem("Distillates")} />
                                <TreeItem nodeId="3" label="Bulk Products" onClick={() => setCurrentSubItem("BulkProducts")} />
                                <TreeItem nodeId="4" label="Imported Products" onClick={() => setCurrentSubItem("ImportedProducts")} />
                                <TreeItem nodeId="5" label="Finished Products" onClick={() => setCurrentSubItem("FinishedProducts")} />
                            </TreeView>
                        </Sticky>
                    </div>
                </div>
            </div>
        </div>
    )


}