import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../../Private/MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Reviews from '../Reviews/Reviews';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const DashBoard = () => {
    const { path, url } = useRouteMatch();
    const { logOut } = useAuth();

    return (
        <div id='dashBoard' className='container bg-dark text-light'>
            <div className="dashboard-container">
                <div className="row">
                    <div className="col-md-3">
                        <Link to={`${url}`}>
                            <li>My Orders</li>
                        </Link>
                        <Link to={`${url}/payment`}>
                            <li>Payment</li>
                        </Link>
                        <Link to={`${url}/reviews`}>
                            <li> Product Review</li>
                        </Link>
                        <Button onClick={logOut}>
                            LogOut
                        </Button>
                    </div>
                    <div className="com-md-8">
                        <Route exact path={path}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <Reviews></Reviews>
                        </Route>
                        <Route exact path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashBoard;