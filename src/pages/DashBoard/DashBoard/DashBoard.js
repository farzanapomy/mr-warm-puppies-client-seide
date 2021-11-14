import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../../Private/MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Reviews from '../Reviews/Reviews';
import './DashBoard.css'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const DashBoard = () => {
    const { path, url } = useRouteMatch();
    const { logOut } = useAuth();

    return (
        <div >
            <div className="dashboard-container ">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="user-dashboard">
                            <h5>Dashboard</h5>
                            <Link to={`${url}`}>
                                <li className="dashboard-menu mt-5">Book</li>
                            </Link>

                            <Link to={`${url}/BookingList`}>
                                <li className="dashboard-menu mt-5">Booking list</li>
                            </Link>

                            <Link to={`${url}/review`}>
                                <li className="dashboard-menu mt-5">Review</li>
                            </Link>
                            

                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={path}>
                            <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/reviews`}>
                            <Reviews></Reviews>
                            </Route>
                            <Route exact path={`${path}/BookingList`}>
                               <Reviews></Reviews>
                            </Route>
                            <Route exact path={`${path}/makeAdmin`}>
                            <Payment></Payment>
                            </Route>
                          
                        </Switch>
                    </div>
                </div>
            </div>
       


        </div >
    );
};

export default DashBoard;