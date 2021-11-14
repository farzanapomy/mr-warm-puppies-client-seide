import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../../Private/MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import './DashBoard.css'

import {
    Switch,
    Route
} from "react-router-dom";
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../../Private/AddProduct/AddProduct';

const DashBoard = () => {
    const { path, url } = useRouteMatch();
    const { logOut, admin } = useAuth();


    return (
        <div className="container">
            <div className="dashboard-container ">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="user-dashboard">
                            <h5 style={{ margin: "15px", padding: "15px", textDecoration: "" }}>User Dashboard</h5>
                            <Link to={`${url}`}>
                                <li className="dashboard-menu mt-5">My Orders</li>
                            </Link>

                            <Link to={`${url}/payment`}>
                                <li className="dashboard-menu mt-5">Payment</li>
                            </Link>

                            <Link to={`${url}/addReview`}>
                                <li className="dashboard-menu mt-5">AddReview</li>
                            </Link>

                            {
                                admin && 
                                <div>
                                    <Link to={`${url}/makeAdmin`}>
                                        <li className="dashboard-menu mt-5">MakeAdmin</li>
                                    </Link>
                                    <Link to={`${url}/addProduct`}>
                                        <li className="dashboard-menu mt-5">AddProduct</li>
                                    </Link>
                                </div>
                            }

                            <button onClick={logOut} style={{ backgroundColor: "blue", color: 'white' }} className='btn px-4 m-3'>LogOut</button>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={path}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route path={`${path}/addReview`}>
                                <AddReview></AddReview>
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>



        </div >
    );
};

export default DashBoard;