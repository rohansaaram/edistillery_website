import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";



import bottlingRuns from "./../../../images/Guide/bottlingRuns.jpg";
import bottlingRuns1 from "./../../../images/Guide/bottlingRuns1.jpg";


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
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Bottling Runs")}</h2>
                    <Element name="" className="">
                        {window.locale.translate("For a typical warehouse where spirits are filled into bottles and cans, eDistillery provides the module for all the record keeping of packaging spirits including recording losses incurred during the process.")}
                    </Element>
                    <Element name="SetupNewProduct" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Setup New Product")}</h4>
                        {window.locale.translate("To setup a new product for your brand, please go to settings -> products -> finished products. Select a type for the product i.e liquor, whiskey and etc and create a new product for filling.")}
                    </Element>
                    <Element name="BottleSizes" className="mt-5">
                        <h5 style={{ marginBottom: "50px" }}>{window.locale.translate("Bottle Sizes")}</h5>
                        {window.locale.translate("While creating a new finished product from settings -> products -> finished products, you can choose whether its a can or a bottle and select the size of the bottle/can in millilitres.")}
                        <br /><br />
                        {window.locale.translate("If there are two or more sizes of a product, you need to create subsequent products in settings. Each size of the package is uniquely identified by the product name, sku, type and its size.")}
                    </Element>
                    <Element name="ImportedProducts" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Imported Products")}</h4>
                        {window.locale.translate("Bottling runs are also possible on imported products i.e ready made spirits you have bought. Simply select a finished product and select an imported product from the list to run the bottling process.")}
                    </Element>
                    <Element name="StorageContainers" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Storage Containers")}</h4>
                        {window.locale.translate("It is only possible to fill from the 'Inventory' tab of the storage containers. It is not possible to fill from containers holding feints or trash containers.")}
                        <br /><br />
                        {window.locale.translate("You can select a finished product that needs to be filled and then select as many containers as you want to fill in one go. For each container, you need to specify the number of bottles/cans filled along with the loss incurred for that container.")}
                        <br /><br />
                        <img src={bottlingRuns} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                    </Element>
                    <Element name="FillingFromCasks" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Filling From Casks")}</h4>
                        {window.locale.translate("If you want to run the bottling process from casks, please transfer the spirit into a real or a virtual container and then start the filling process.")}
                    </Element>
                    <Element name="FillingCriteria" className="mt-5">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Filling Criteria")}</h4>
                        {window.locale.translate("The filling criteria for filling the bottles/cans allows up to 2.5% extra for each container. This is because in reality when filling in large volumes sometimes its possible that a bottle is filled a little low or a little high than the exact millilitres in a bottle and hence more or less bottles can be filled as estimated. Therefore the system allows to cover this possibility.")}
                        <br /><br />
                        {window.locale.translate("Also, when select the container from which we need to fill, the system is not restricted to match the exact volume in percentage for that product and container. You are free to use anything from the container with any alcohol percentage. However, the system will show a warning if the alcohol content of the finished product and container differs by more than 0.3%.")}
                        <br /><br />
                        <img src={bottlingRuns1} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                    </Element>




                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">
                        <TreeView>
                            <TreeItem nodeId="1" label="Setup New Product" onClick={() => setCurrentSubItem("SetupNewProduct")} />
                            <TreeItem nodeId="3" label="Bottle Sizes" onClick={() => setCurrentSubItem("BottleSizes")} />
                            <TreeItem nodeId="2" label="Imported Products" onClick={() => setCurrentSubItem("ImportedProducts")} />
                            <TreeItem nodeId="4" label="Storage Containers" onClick={() => setCurrentSubItem("StorageContainers")} />
                            <TreeItem nodeId="5" label="Filling From Casks" onClick={() => setCurrentSubItem("FillingFromCasks")} />
                            <TreeItem nodeId="6" label="Filling Criteria" onClick={() => setCurrentSubItem("FillingCriteria")} />
                        </TreeView>
                    </div>
                </div>
            </div>
        </div>
    )


}