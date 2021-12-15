import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import intiazlizeContainer from "./../../../images/Guide/intiazlizeContainer.jpg";
import intiazlizeProduct from "./../../../images/Guide/intiazlizeProducts.jpg";



export default function InitializeInventory() {
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
                        <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Inventory Initialization")}</h2>
                        {window.locale.translate("After setting up the products and the containers the second step to start using the application is to import your warehouse stock positions into the application.")}
                        <br /><br />
                        {window.locale.translate("To initialize the inventory, it is important to know that eDistillery allows the following types of products to be stored in containers:")}
                        <br />
                        1. {window.locale.translate("Distillates")}
                        <br />
                        2. {window.locale.translate("Bulk Products")}
                        <br /><br />
                        {window.locale.translate("And the inventory for the following types of products are stored generally:")}
                        <br />
                        1. {window.locale.translate("Raw Materials")}
                        <br />
                        2. {window.locale.translate("Imported Products")}
                        <br />
                        3. {window.locale.translate("Finished Products")}
                        <br /><br />
                        {window.locale.translate("All the inventory can be initialized from ")}
                        <a href="https://app.edistillery.net/settings" target="_blank">{window.locale.translate("Settings")}</a>.

                    </Element>
                    <Element name="Lots" className="mt-5">
                        <h5 style={{ marginBottom: "25px" }}> {window.locale.translate("Inventory Lots")} </h5>
                        {window.locale.translate("eDistillery uses a lot wise representation of inventory of your warehouse. Lots denotes the batches in your purchases or productions.")}
                        <br /><br />
                        {window.locale.translate("Lots are optional everywhere in the application. It's up to your choice to specify lots or leave it as blank. If you leave it as blank, the system will automatically store the lot as current date and time.")}
                    </Element>

                    <Element name="" className="mt-5">
                        <h3 style={{ marginBottom: "25px" }}> {window.locale.translate("Containerized Types")} </h3>
                        {window.locale.translate("eDistillery allows only destillates and bulk products to be stored in containers. However, please note that only destillates can be stored in Casks.")}
                        <br /><br />
                        {window.locale.translate("Each storage container or a cask can hold a single type of product at a time. Also note that each storage container can only hold a single part of that type that is either Heads, Hearts or Tails Or a bulk product.")}
                        <br /><br />
                        {window.locale.translate("Only Trash containers are allowed to contain a mixture of anything. That means a trash container can contain multiple destillates and bulk products at a single time. When mixed together in a trash container, it cannot be separated. Please be cautious while moving into trash containers. Trash containers should only be used for disposal purposes.")}
                        <br /><br />
                        {window.locale.translate("Also, Please note that only empty containers can be initialized. Once a container is filled, you can hard edit the content inside it.")}
                    </Element>
                    <Element name="Destillates" className="mt-5">
                        <h5 style={{ marginBottom: "25px" }}> {window.locale.translate("Adding Destillates & Bulk Products")} </h5>
                        {window.locale.translate("Destillates can either be initiazlized in a storage container, a trash container or a cask.")}
                        <br /><br />
                        {window.locale.translate("To initialize a distillate in a container, please go to ")} <a href="https://app.edistillery.net/settings/containers" target="_blank">{window.locale.translate("settings -> Containers")}</a>.
                        {window.locale.translate("After that, either choose a storage or a trash container and click on the plus icon of that container as shown in the below image.")}
                        <br /><br />
                        <img src={intiazlizeContainer} alt="" style={{ width: "100%" }} />
                        <br /><br />
                        {window.locale.translate("The popup will open where you can enter the quantity in Litres present in that container in your physical warehouse.")}
                        <br /><br />
                        {window.locale.translate("Start by selecting a distillate or a bulk product. If its a distillate, choose whether its a heads, tails or hearts. Specify the quantity in litres and the alcohol content of it in percentage. You can use the conversion tool if you want to calculate the percentage of alcohol from Kilograms. Lots are optional and can be left empty if not known.")}
                        <br /><br />
                        {window.locale.translate("For trash containers, you don't need to specify any product.You can just enter the quantity with an alcohol content in percentage. This is only for the purpose of disposal in future and cannot be used anywhere else.")}
                        <br /><br />
                        {window.locale.translate("The procedure is same for adding destillates to cask. You can do it in ")} <a href="https://app.edistillery.net/settings/casks" target="_blank">{window.locale.translate("settings -> Casks")}</a>.
                        {window.locale.translate("Note that bulk products cannot be aged and hence cannot be stored in casks. ")}
                    </Element>
                    <Element name="" className="mt-5">
                        <h3 style={{ marginBottom: "25px" }}> {window.locale.translate("Generally Stored Types")} </h3>
                        {window.locale.translate("Products of types Raw Materials, Imported Products and Finished Products are not stored in containers. The inventory for these products can be managed explicitly either by specifying lots or ignoring the lot numbers.")}
                    </Element>
                    <Element name="RawMaterials" className="mt-5">
                        <h5 style={{ marginBottom: "25px" }}> {window.locale.translate("Adding Raw Materials, Imported Products & Finished Products")} </h5>
                        {window.locale.translate("Inventory for these products can be initialized in the respective sections by clicking on the plus icon as shown in the image below.")}
                        <br /><br />
                        <img src={intiazlizeProduct} alt="" style={{ width: "100%" }} />
                        <br /><br />
                        {window.locale.translate("For Raw Materials : ")} <a href="https://app.edistillery.net/settings/products/rawmaterials" target="_blank">{window.locale.translate("settings -> Products -> Raw Materials")}</a>.
                        <br /><br />
                        {window.locale.translate("For Imported Products : ")} <a href="https://app.edistillery.net/settings/products/imported-products" target="_blank">{window.locale.translate("settings -> Products -> Imported Products")}</a>.
                        <br /><br />
                        {window.locale.translate("For Finished Products : ")} <a href="https://app.edistillery.net/settings/products/finished-products" target="_blank">{window.locale.translate("settings -> Products -> Finished Products")}</a>.
                        <br /><br />
                        {window.locale.translate("Lots are optional and can be left empty if not known")}.
                    </Element>

                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">
                        <TreeView
                            defaultCollapseIcon={<ExpandMoreIcon />}
                            defaultExpandIcon={<ChevronRightIcon />}
                            expanded={["2", "5"]}
                        >
                            <TreeItem nodeId="1" label="Inventory Lots" onClick={() => setCurrentSubItem("Lots")} />
                            <TreeItem nodeId="2" label="Containerized Types" onClick={() => setCurrentSubItem("ContainerizedTypes")} >
                                <TreeItem nodeId="3" label="Destillates & Bulk Products" onClick={() => setCurrentSubItem("Destillates")} />
                            </TreeItem>
                            <TreeItem nodeId="5" label="Generally Stored Types" onClick={() => setCurrentSubItem("NonContainerizedTypes")} >
                                <TreeItem nodeId="6" label="Raw Materials, Imported Products & Finished Products" onClick={() => setCurrentSubItem("RawMaterials")} />
                            </TreeItem>
                        </TreeView>
                    </div>
                </div>
            </div>
        </div>
    )


}