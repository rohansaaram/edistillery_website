import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 400,
    }
});

export default function Menu(props) {
    const classes = useStyles();

    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            defaultExpanded={["1"]}
            defaultSelected={["2"]}
        >
            <TreeItem nodeId="1" label="Getting Started" >
                <TreeItem nodeId="2" label="Introduction" onClick={() => props.setCurrentView("GettingStarted")} />
                <TreeItem nodeId="3" label="Product Types" onClick={() => props.setCurrentView("ProductTypes")} />
                <TreeItem nodeId="4" label="Setup" onClick={() => props.setCurrentView("Setup")} />
                <TreeItem nodeId="5" label="Initialize Inventory" onClick={() => props.setCurrentView("InitializeInventory")} />
            </TreeItem>
            <TreeItem nodeId="6" label="Purchases" onClick={() => props.setCurrentView("Purchases")} />
            <TreeItem nodeId="7" label="Inventory" >
                <TreeItem nodeId="8" label="Overview" onClick={() => props.setCurrentView("InventoryOverview")} />
                <TreeItem nodeId="9" label="Container & Casks" onClick={() => props.setCurrentView("InventoryContainers")} />
                <TreeItem nodeId="10" label="Change Inventory" onClick={() => props.setCurrentView("InventoryChange")} />
            </TreeItem>
            <TreeItem nodeId="12" label="Aging" onClick={() => props.setCurrentView("Aging")} />
            <TreeItem nodeId="11" label="Dilution" onClick={() => props.setCurrentView("Dilution")} />
            <TreeItem nodeId="13" label="Productions">
                <TreeItem nodeId="14" label="Distillations" onClick={() => props.setCurrentView("Distillations")} />
                <TreeItem nodeId="15" label="Bulk Productions" onClick={() => props.setCurrentView("BulkProductions")} />
            </TreeItem>
            <TreeItem nodeId="16" label="Bottling">
                <TreeItem nodeId="17" label="Bottling Runs" onClick={() => props.setCurrentView("BottlingRuns")} />
                <TreeItem nodeId="18" label="Filling Through Vendors" onClick={() => props.setCurrentView("VendorFilling")} />
            </TreeItem>
            <TreeItem nodeId="17" label="Dispatches" onClick={() => props.setCurrentView("Dispatches")} />
            <TreeItem nodeId="18" label="Disposals" onClick={() => props.setCurrentView("Disposals")} />
            <TreeItem nodeId="19" label="Statistics/Reports">
                <TreeItem nodeId="20" label="Activities" onClick={() => props.setCurrentView("Activities")} />
                <TreeItem nodeId="21" label="Inventory">
                    <TreeItem nodeId="22" label="Alcohol In Stock" onClick={() => props.setCurrentView("ReportsAlcoholInStock")} />
                    <TreeItem nodeId="23" label="Snapshots" onClick={() => props.setCurrentView("ReportsSnapshots")} />
                    <TreeItem nodeId="24" label="Stocktakings" onClick={() => props.setCurrentView("ReportsStocktakings")} />
                </TreeItem>
                <TreeItem nodeId="25" label="Analytics">
                    <TreeItem nodeId="26" label="Productions & Dispatches" onClick={() => props.setCurrentView("ProdVSDisp")} />
                </TreeItem>
                <TreeItem nodeId="27" label="Tracking">
                <TreeItem nodeId="28" label="Products & Lots" onClick={() => props.setCurrentView("TrackingProducts")} />
                <TreeItem nodeId="29" label="Containers/Casks" onClick={() => props.setCurrentView("TrackingContainersCasks")} />
                </TreeItem>
            </TreeItem>
            <TreeItem nodeId="30" label="The Alcohol Book"  onClick={() => props.setCurrentView("TheAlcoholBook")} />

        </TreeView >
    );
}
