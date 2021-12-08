import { React, useState } from 'react'
import Sticky from 'react-sticky-el';

import GettingStarted from './GettingStarted/GettingStarted';
import Setup from './GettingStarted/Setup';
import ProductTypes from './GettingStarted/ProductTypes';
import InitializeInventory from './GettingStarted/InitializeInventory'

import Purchases from './PurchaseOrders/Purchases'

import InventoryOverview from './Inventory/Overview'
import InventoryContainers from './Inventory/Containers'
import ChangeInventory from './Inventory/ChangeInventory'

import Dilution from './Dilution'
import Aging from './Aging'

import Distillations from './Productions/Distillations'
import BulkProductions from './Productions/BulkProductions'


import BottlingRuns from './Bottling/Bottling'
import VendorFilling from './Bottling/VendorFilling'

import Dispatches from './Dispatches'
import Disposals from './Disposals'

import Activities from './Reports/Activities'


import AlcoholInStock from './Reports/Inventory/AlcoholInStock'
import Snapshots from './Reports/Inventory/Snapshots'
import Stocktakings from './Reports/Inventory/Stocktakings'

import ProdVSDisp from './Reports/Analytics/ProdVSDisp'

import TrackingProducts from './Reports/Tracking/Products'
import TrackingContainersCasks from './Reports/Tracking/ContainersCasks'

import TheAlcoholBook from './Reports/TheAlcoholBook';

import Menu from './Menu';


export default function Guide(props) {
    const [loading, setLoading] = useState(true)
    const [currentView, setCurrentView] = useState("GettingStarted")

    setTimeout(function () {
        setLoading(false)
    }, 1000)



    function getComponent() {

        switch (currentView) {

            case "GettingStarted":
                return <GettingStarted />
            case "ProductTypes":
                return <ProductTypes />
            case "Setup":
                return <Setup />
            case "InitializeInventory":
                return <InitializeInventory />

            case "Purchases":
                return <Purchases />


            case "InventoryOverview":
                return <InventoryOverview />
            case "InventoryContainers":
                return <InventoryContainers />
            case "InventoryChange":
                return <ChangeInventory />


            case "Dilution":
                return <Dilution />
            case "Aging":
                return <Aging />



            case "Distillations":
                return <Distillations />
            case "BulkProductions":
                return <BulkProductions />


            case "BottlingRuns":
                return <BottlingRuns />
            case "VendorFilling":
                return <VendorFilling />


            case "Dispatches":
                return <Dispatches />
            case "Disposals":
                return <Disposals />



            case "Activities":
                return <Activities />
            case "ReportsAlcoholInStock":
                return <AlcoholInStock />
            case "ReportsSnapshots":
                return <Snapshots />
            case "ReportsStocktakings":
                return <Stocktakings />

            case "ProdVSDisp":
                return <ProdVSDisp />


            case 'TrackingProducts':
                return <TrackingProducts />
            case 'TrackingContainersCasks':
                return <TrackingContainersCasks />


            case 'TheAlcoholBook':
                return <TheAlcoholBook />

        }
    }



    return (

        <div style={{ minHeight: "40vh", marginBottom: "50px", paddingBottom: "100px" }} class="border-bottom">

            {loading ?
                <div className="row text-center justify-content-center align-items-center mt-5">
                    <div className="col-sm-2">
                        <div class="spinner-border m-5" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>

                :

                <div>
                    <div className="row text-center justify-content-center align-items-center mb-5">
                        <div className="col-sm-6">
                            <h1>Application Guide</h1>
                        </div>
                    </div>

                    <div className="row text-center mt-5" style={{ minHeight: "120vh" }}>
                        <div className="col-sm-3 pl-5">
                            <div className="guide-menus text-left">
                                <Menu setCurrentView={setCurrentView} />
                            </div>
                        </div>
                        <div className="col-sm-9 guide-content text-left">
                            {getComponent()}
                        </div>

                    </div>


                </div>

            }


        </div >

    )


}