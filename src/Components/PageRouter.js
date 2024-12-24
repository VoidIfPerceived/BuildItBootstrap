import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch
} from 'react-router';
import UserPage from "./Pages/UserPage";


export default class PageRouter extends React.Component {
    constructor(props) {
        super(props);
        {console.log(this.props.pages)}
    }


    newRoute = (page, index) => {
        let path = "";
        {console.log(page.pageSlug)}
        page.pageSlug === "home" ? path="/" : path=`/${page.pageSlug}`;
        console.log(page)
        return ( 
            <Route 
                key={index}
                path={path}
                element={<UserPage currentPage={page} onUpdate={this.props.onUpdate}/>}
            />
        )
    }

    render() {
        return (
            <Router>
                <Routes>
                    {pages && pages.reverse().map((page, index) => this.newRoute(page, index))}
                </Routes>
            </Router>
        )
    }
}