import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';
import UserPage from "./Pages/UserPage";


export default class PageRouter extends React.Component {
    constructor(props) {
        super(props);
    }


    newRoute = (page, index) => {
        let path = "";
        page.pageSlug == "home" ? path = "*" : path = "/" + page.pageSlug;
        return ( 
            <Route key={index} path={path}>
                <UserPage currentPage={page} />
            </Route>
        )
    }

    render() {
        const pages = this.props.pages;
        return (
            <Router basename="home">
                <Switch>
                    {pages && pages.reverse().map((page, index) => this.newRoute(page, index))}
                </Switch>
            </Router>
        )
    }
}