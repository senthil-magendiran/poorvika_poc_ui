import React, { useEffect, useState } from "react";


import "./styles.scss";

import { IAPIResponse } from "services/interfaces/common.interface";
import { Iorder } from "services/interfaces/Order.interface";
import { OrdersService } from "services/order.service";
import { Pagination } from "@mui/material";

const OrdersListPage: React.FC = () => {
    const [orders, setOrderList] = useState<Iorder[] | []>([]);
    const [page, setPage] = useState<number>()

    const ordersService = new OrdersService();

    const getOrders = async (page: number): Promise<void> => {
        setOrderList([]);
        const orderResponse: IAPIResponse = await ordersService.getOrder(page);
        console.log(orderResponse);

        if (orderResponse.status === "success") {
            setOrderList(orderResponse.data.orders);
            setPage(orderResponse.data.page);
        }

    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        getOrders(value)
    }

    useEffect(() => {
        getOrders(1);
    }, []);


    return (
        <div className="order-list-page p-10">
            <p className="my-4 font-semibold">Orders</p>
            <div className="mobile-view hidden">
                {orders.length ?
                    <>
                        {
                            orders.map((item: Iorder, index) => {
                                return (

                                    <div className="flex m-2 shadow p-4">
                                        <img className="w-24" src={item.image} />
                                        <div>
                                            <p className="text-xl font-semibold">{item.model}</p>
                                            <p className="font-semibold text-2xl color-red">&#8377; {item.price}</p>

                                        </div>
                                    </div>
                                )
                            })
                        }

                    </>
                    : <p>No Orders</p>}
            </div>
            <table className="order-list-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Functional Defects</th>
                        <th>Accessory List</th>
                        <th>Device Problems</th>


                    </tr>
                </thead>
                {orders.length ? (
                    <tbody>
                        {orders.map((item: Iorder, index) => {
                            return (
                                <tr key={item.product} >
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="product-image">
                                            <img src={item.image} />

                                        </div>
                                        <p className="text-lg font-semibold">{item.model}</p>
                                    </td>
                                    <td>&#8377;{item.price}</td>
                                    <td>
                                        {item.functionalDefects.length > 0 ?
                                            <>
                                                {item.functionalDefects.map((defect: string) => (
                                                    <p className="flex  items-center">
                                                        <span className="text-3xl font-medium">&#8227; &nbsp; </span>

                                                        {defect}</p>
                                                ))}
                                            </>
                                            :
                                            <p>NIL</p>
                                        }

                                    </td>

                                    <td>


                                        {item.accessoryList.length ?
                                            <>
                                                {item.accessoryList.map((defect: string) => (
                                                    <p className="flex  items-center">
                                                        <span className="text-3xl font-medium">&#8227; &nbsp;  </span>

                                                        {defect}</p>
                                                ))}
                                            </>
                                            :
                                            <p>NIL</p>
                                        }

                                    </td>
                                    <td>

                                        {item.deviceProblems.length > 0 ?
                                            <>
                                                {item.deviceProblems.map((defect: string) => (
                                                    <p className="flex  items-center">
                                                        <span className="text-3xl font-medium">&#8227; &nbsp;  </span>

                                                        {defect}</p>
                                                ))}
                                            </>
                                            :
                                            <p>NIL</p>
                                        }

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                ) : (
                    <tbody>
                        <tr>
                            <td className="empty-data" colSpan={12}>
                                No Orders
                            </td>
                        </tr>
                    </tbody>
                )}
            </table>
            <Pagination
                className="pagination flex justify-end m-4"
                count={page}
                shape="rounded"
                variant="outlined"
                onChange={handleChange}
            />
        </div >
    );
};

export default OrdersListPage;
