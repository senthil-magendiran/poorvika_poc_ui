import appContext from 'context/app.context';
import AccessoryPage from 'pages/AccessaryList';
import DeviceEvaluationPage from 'pages/DeviceEvaluation';
import EstimationPage from 'pages/EstimationPage';
import PhysicalDefectsPage from 'pages/PhysicalDefects';
import ProductSelectionPage from 'pages/ProductSelection';
import React, { useContext } from 'react'
import NavBar from 'components/NavBar'
import LoginPage from 'pages/LoginPage';
import PriceSummary from 'pages/PriceSummary';
import OrdersListPage from 'pages/OrdersList';

const stepHandler = (stepNumber: number) => {
        switch (stepNumber) {
            case 0:
              return <ProductSelectionPage/>
              case 1: 
              return <EstimationPage/>
              case 2: 
              return <DeviceEvaluationPage/>
              case 3:
              return <PhysicalDefectsPage/>
              case 4:
              return <AccessoryPage/>
              case 5:
              return <PriceSummary/>
              case 6:
              return <OrdersListPage/>    
            default:
                return <div>Invalid Step</div>
        }
}

const LandingPage: React.FC = () => {

    const { step, viewLoginMenu } = useContext(appContext);

    return (
        <div>
            <NavBar/>
            {stepHandler(step)}
            <div className={viewLoginMenu ? "login__slider shadow login__slider__view" : "login__slider shadow"}>
            <LoginPage/>
            </div>
        </div>
    )
}

export default LandingPage
