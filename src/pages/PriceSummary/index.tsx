import React, { useContext, useState } from "react";
import DeviceReport from "pages/DeviceReport";
import appContext from "context/app.context";
import { Iorder } from "services/interfaces/Order.interface";
import { OrdersService } from "services/order.service";
import { IAPIResponse } from "services/interfaces/common.interface";
import './styles.scss'

const PriceSummary: React.FC = () => {
  const { setStep, selectedProduct, functionalDefects, deviceProblems, accessoryList, isAuthenticated, setViewLoginMenu } =
    useContext(appContext);

  const [displayModal, setDisplayModal] = useState(false);
  const [showToaster, setToaster] = useState<string>();
  const ordersService = new OrdersService();

  const addOrderHandler = async () => {
    if (isAuthenticated) {
      try {
        const newOrder: Iorder = {
          mobileNumber: "9876543210",
          name: "Senthil Kumar M",
          product: selectedProduct._id,
          price: Number(selectedProduct.price) >= 10000 ? selectedProduct.price : (Number(selectedProduct.price) + 100).toString(),
          image: selectedProduct.image,
          model: selectedProduct.model,
          deviceProblems: deviceProblems
            ? deviceProblems.filter((item) => item?.length)
            : [],
          functionalDefects: functionalDefects
            ? functionalDefects.filter((item) => item?.length)
            : [],
          accessoryList: accessoryList
            ? accessoryList.filter((item) => item?.length)
            : [],
        };

        const orderResult: IAPIResponse = await ordersService.addOrder(newOrder);
        setToaster('Your Order Placed Successfully')
        setTimeout(() => {
          setStep(6);
        }, 2000)
        console.log("orderResult", orderResult)


      } catch (error) {
        console.log("Order Placement Error", error);
      }
    } else {
      setViewLoginMenu(true)
    }

  };

  return (
    <div>
      <div className="price-summary-page columns-2 px-30 w-full flex">
        <div className="price-summary-wrap shadow w-4/5 m-3 rounded px-10">
          <div className="price-content flex py-12">
            <div className="img-container w-1/4 justify-center">
              <img src={selectedProduct.image} alt="" />
            </div>
            <div className="w-1/2 justify-center product-price-details">
              <h1 className="font-semibold text-3xl product-name">
                {selectedProduct.model}{" "}
              </h1>
              <h2 className="font-medium">Selling price :</h2>
              <h1 className="font-semibold text-4xl mb-4 text-red-400">
                {" "}
                &#8377;{selectedProduct.price}
              </h1>

              <div className="font-medium bg-teal-50 w-fit rounded p-2 my-2">
                <span className="text-emerald-300">
                  {" "}
                  {selectedProduct.soldCount}+{" "}
                </span>
                already sold on Cashify at an Avg price of
                <span className="font-semibold text-red-400">
                  {" "}
                  &#8377;{Number(selectedProduct.price) - 150}
                </span>
              </div>
              <p className="text-xs">
                The value is based on the condition of the product mentioned by
                you.
              </p>

              {/* <a
                className="text-sm my-2 font-medium border-dotted border-b-4 cursor-pointer"
                onClick={() => setDisplayModal(true)}
              >
                See Device Report
              </a> */}
            </div>
          </div>
        </div>
        <div className="evaluation-content shadow w-2/5 m-3 rounded p-4">
          <h2 className="font-medium text-xl">Price Summary</h2>
          <div className="flex justify-between  border-dotted border-t-2 py-4 text-sm font-medium">
            <p>Base Price</p>
            <p> &#8377;{selectedProduct.price}</p>
          </div>
          <div className="flex justify-between  border-dotted border-t-2 py-4 text-sm font-medium">
            <p>Pickup Charges</p>
            {Number(selectedProduct.price) >= 10000 ?
              <p>
                <span className="text-emerald-300">Free</span>{" "}
                <del> &#8377;100</del>
              </p>
              :
              <p>
                <span> &#8377;100</span>
              </p>
            }
          </div>
          <div className="flex justify-between  border-dotted border-t-2 py-4 text-sm font-medium">
            <p>Add Promo code</p>
            <p className="text-emerald-300 cursor-pointer"> Apply</p>
          </div>
          <div className="flex justify-between  border-dotted border-t-2 py-4 text-sm font-medium">
            <p>Total Amount</p>
            {Number(selectedProduct.price) >= 10000 ?
              <p>
                <p> &#8377;{selectedProduct.price}</p>
              </p>
              :
              <p>
                <p> &#8377;{Number(selectedProduct.price) + 100}</p>
              </p>
            }

          </div>
          <button
            className="btn btn__primary w-full py-2ssss"
            onClick={addOrderHandler}
          >
            Sell Now
          </button>
        </div>
      </div>
      <DeviceReport
        displayModal={displayModal}
        handleClose={() => setDisplayModal(!displayModal)}
      />
      {showToaster ?
        <div className="toaster-con">
          {showToaster}
        </div>
        :
        <></>
      }
    </div>
  );
};

export default PriceSummary;
