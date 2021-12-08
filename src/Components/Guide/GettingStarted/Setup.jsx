import { useState, useEffect } from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import Sticky from 'react-sticky-el';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import TreeView from "@material-ui/lab/TreeView";



import setPrivilage from "./../../../images/Guide/setPrivilages.jpg";

export default function Setup() {
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
                    <Element name="Setup">
                        <h2 style={{ marginBottom: "50px" }}>{window.locale.translate("Setup")}</h2>
                        {window.locale.translate("The first step to start using the application is to setup the users, products, containers and casks.")}
                        <br />
                        {window.locale.translate("Once setup is complete, you can start initializing your inventory by entering the current stocks present in your warehouse.")}
                        <br /><br />
                        {window.locale.translate("Setup and initializing the inventory can be done on the settings page. Please click your profile name on the top right hand site and select settings to access the page. ")}
                        {window.locale.translate(" Here is the direct")} <a href="https://app.edistillery.net/settings" target="_blank">{window.locale.translate("link")}</a>.

                    </Element>
                    <Element name="Users" className="mt-5">
                        <h5 style={{ marginBottom: "25px" }}> {window.locale.translate("Users")} </h5>
                        {window.locale.translate("To add users, please go to the settings page and select users.")}
                        {window.locale.translate(" Here is the direct")} <a href="https://app.edistillery.net/settings/users" target="_blank">{window.locale.translate("link")}</a>.
                        <br /><br />
                        {window.locale.translate("When you create a user, a link for activating the account will be sent to the email address of the user. You can also send the activation link later in the future from the main table of users.")}
                        <br /><br />
                        {window.locale.translate("After the user is created, you should immediately set the privilages of the user by clicking the icon as shown in the below image. Please note that by default, a new user has no privilages and cannot access any modules of the application.")}
                        <br /><br />
                        <img src={setPrivilage} alt="" />
                        <br /><br />
                        <i>{window.locale.translate("Note: Only the admin can see the option for setting privilages.")}</i>
                    </Element>
                    <Element name="Products" className="mt-5">
                        <h5 style={{ marginBottom: "25px" }}> {window.locale.translate("Products")} </h5>
                        {window.locale.translate("To add products, please go to the settings page and select products.")}
                        {window.locale.translate(" Here is the direct")} <a href="https://app.edistillery.net/settings/products" target="_blank">{window.locale.translate("link")}</a>.
                        <br /><br />
                        {window.locale.translate("All types of products can be set from here.")}
                    </Element>
                    <Element name="Containers" className="mt-5">
                        <h5 style={{ marginBottom: "25px" }}> {window.locale.translate("Containers")} </h5>
                        {window.locale.translate("To add Containers, please go to the settings page and select containers.")}
                        {window.locale.translate(" Here is the direct")} <a href="https://app.edistillery.net/settings/containers" target="_blank">{window.locale.translate("link")}</a>.
                        <br /><br />
                        {window.locale.translate("There are three types of containers:")}
                        <br />
                        1.{window.locale.translate("Storage Containers")}
                        <br />
                        2.{window.locale.translate("Stills")}
                        <br />
                        3.{window.locale.translate("Trash Containers")}
                        <br /><br />
                        {window.locale.translate("Storage and trash containers have the functionality to be either real or virtual containers. From this page, you can only add real containers.")}
                        <br /><br />
                        {window.locale.translate("While virtual containers are an option to ease the use of the application hence they can be created on the go from anywhere in the application when something needs to be transferred to a container.")}
                        <br /><br />
                        {window.locale.translate("Real containers have a capacity and cannot be filled more than the capacity. However, virtual containers have no capacity and can be filled with as much quantity as needed.")}
                        <br /><br />
                        {window.locale.translate("The net weight of the container is for your own purpose of recording.")}
                    </Element>
                    <Element name="Casks" className="mt-5">
                        <h5 style={{ marginBottom: "25px" }}> {window.locale.translate("Casks")} </h5>
                        {window.locale.translate("To add Casks, please go to the settings page and select casks.")}
                        {window.locale.translate(" Here is the direct")} <a href="https://app.edistillery.net/settings/casks" target="_blank">{window.locale.translate("link")}</a>.
                        <br /><br />
                        {window.locale.translate("While setting up a cask, you are free to enter the wood and origin of the your cask. These are for your own purpose of recording.")}
                        <br /><br />
                        {window.locale.translate("The net weight of the cask is for your own purpose of recording.")}
                    </Element>

                </div>
                <div className="col-sm-3 pr-3">
                    <div className="">
                        <Sticky>
                            <TreeView>
                                <TreeItem nodeId="1" label="Users" onClick={() => setCurrentSubItem("Users")} />
                                <TreeItem nodeId="2" label="Products" onClick={() => setCurrentSubItem("Products")} />
                                <TreeItem nodeId="3" label="Containers" onClick={() => setCurrentSubItem("Containers")} />
                                <TreeItem nodeId="4" label="Casks" onClick={() => setCurrentSubItem("Casks")} />
                            </TreeView>
                        </Sticky>
                    </div>
                </div>
            </div>
        </div>
    )


}