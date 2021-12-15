import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import moveToTrash from "./../../../images/Guide/movetotrash.jpg";
import movingunit from "./../../../images/Guide/movingunit.jpg";
import move from "./../../../images/Guide/move.jpg";



export default function Containers() {
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
                    <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Containers")}</h2>
                    <Element name="Overview">
                        <h4 style={{ marginBottom: "50px" }}>{window.locale.translate("Overview")}</h4>
                        {window.locale.translate("Containers are provided to create a virtual warehouse of your real warehouse. Only distillates and bulk products can be stored in containers.")}
                        <br /><br />
                        {window.locale.translate("Containers in eDistillery has the flexibility to hold anything in any container but are limited to only one product at one time in each container as in reality.")}
                        <br /><br />
                        {window.locale.translate("Containers can either be real or virtual. Real containers can be created from the settings -> containers section while virtual containers can be created from anywhere when something needs to be transferred to a container.")}
                    </Element>

                    <Element name="Types" className="mt-5">
                        <h4 style={{ marginBottom: "25px" }}>{window.locale.translate("Types Of Containers")}</h4>
                        {window.locale.translate("In addition, there are following types of containers")}
                        <br /><br />
                        <b>{window.locale.translate("Storage Containers")}</b>
                        <br />
                        {window.locale.translate("Storage containers can hold Hearts obtained after the distillation process as well as feints such as heads and tails. However, only one type can be stored in a container at a given time. That means heads and tails cannot be mixed together and cannot belong to two different products of any category. These feints can only be used in either redistillation or moving to trash container to dispose off later. ")}
                        <br /><br />
                        {window.locale.translate("It is also possible to store aged hearts content of a distillate transferred from casks/barrels.")}
                        <br /><br />
                        {window.locale.translate("They can also hold bulk products. Bulk products are the result of mixing two or more different products to create a new bulk product.")}
                        <br /><br />
                        <b>{window.locale.translate("Trash Containers")}</b>
                        <br />
                        {window.locale.translate("Trash containers are only used to dispose the content inside it. Once entered into the trash container, it is not possible to separate any lot as in reality. Please be cautios while moving anything in the trash container. Trash containers can hold any or all types of products. There are no restrictions.")}
                        <br /><br />
                        <b>{window.locale.translate("Stills")}</b>
                        <br />
                        {window.locale.translate("Stills are always real and cannot be created virtually. They are only used while distillation and are identified by a unique still identification number.")}
                        <br /><br />
                        <b>{window.locale.translate("Casks")}</b>
                        <br />
                        {window.locale.translate("Casks are used in aging the hearts obtained as a result of distillation. It is possible to remove and re-insert any content in cask. The duration the content is present inside a cask is maintained by the application. ")}
                        <br /><br />
                        {window.locale.translate("Once you move out the distillate from a cask to a storage container, it will be visible inside the 'AGED' tab. In the 'Aged' tab, you can also view the age of the destillate being moved out.")}
                        <br /><br />
                    </Element>

                    <Element name="Moving" style={{ marginTop: "50px" }}>
                        <h4 >{window.locale.translate("Moving Between Containers")}</h4>
                        {window.locale.translate("As part of the virtual warehouse, eDistillery provides the option for moving between containers and casks. While moving, you can choose either empty containers or containers with same type and product.")}
                        <br /><br />
                        {window.locale.translate("To move, you can go to the Containers or Casks page and select move option as shown below. Only distillates can be moved to Casks. You can also move it back to storage from the Casks page and it will then appear in the 'Aged' tab.")}
                        <br /><br />
                        <img src={move} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                        <b>{window.locale.translate("Please also note")}, </b>
                        {window.locale.translate("If you want to mix a non-aged spirit with an aged spirit, the resulting age of the new spirit will always be the age that is greater.")}
                        <br /><br />
                        {window.locale.translate("It is possible to mention either alcohol percentage OR Kilograms of alcohol while moving. The application automatically does all the calculation at the backend.")}
                        <br /><br />
                        <img src={movingunit} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                        {window.locale.translate("For example, when you mix two different spirits with different alcohol content, the resulting alcohol content is automatically caluclated by the system using the density and mass volume tables at standard 20ºC = 68ºF temperature.")}
                        <br /><br />
                        {window.locale.translate("If you want to move to a trash container, please click the trash checkbox as shown in the image below.")}
                        <br /><br />
                        <img src={moveToTrash} alt="" srcset="" style={{ width: "100%" }} />
                        <br /><br />
                    </Element>


                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">
                        <TreeView>
                            <TreeItem nodeId="1" label="Overview" onClick={() => setCurrentSubItem("Overview")} />
                            <TreeItem nodeId="2" label="Types of Containers" onClick={() => setCurrentSubItem("Types")} />
                            <TreeItem nodeId="3" label="Moving Between Containers" onClick={() => setCurrentSubItem("Moving")} />
                        </TreeView>
                    </div>
                </div>
            </div>
        </div>
    )


}