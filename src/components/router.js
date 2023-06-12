import React from "react";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import Login from './login';
import Order from './order';
import Product from './product';
import User from './user';
import Header from "./header";

function Router() {
    return (
        <BrowserRouter>
            <Header />
            {/* <Switch> */}
            <Route>
                <Route path="/" exact>
                    <Navigate to="/orders" />
                </Route>
                <Route path="/login" component={Login} />
                <Route path="/orders" component={Order} />
                <Route path="/products" component={Product} />
                <Route path="/users" component={User} />
            {/* </Switch> */}
            </Route>
        </BrowserRouter>
    );
}

export default Router;