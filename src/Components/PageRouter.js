import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';
import UserPage from "./Pages/UserPage";


export default class PageRouter extends React.Component {
    constructor(props) {
        super(props);
        this.pages=this.props.pages;
        this.onUpdate=this.props.onUpdate;
    }


    newRoute = (page, index) => {
        let path = page.pageSlug === "home" ? "/" : `/${page.pageSlug}`;
        return (
            <Route 
                key={index} 
                path={path} 
                element={<UserPage currentPage={page} onUpdate={this.onUpdate}/>}
            />
        );
    }

    render() {
        if (!this.pages || this.pages.length === 0) {
            return <div>Loading...</div>;
        }
        return (
            <Router>
                <Routes>
                    {this.pages.map((page, index) => this.newRoute(page, index))}
                    {/* Needs a fallback route */}
                    <Route path="*" element={<div>Page not found</div>} />
                </Routes>
            </Router>
        );
    }
}