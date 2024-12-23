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
        console.log("Page Router Constructor called", props)
    }


    newRoute = (page, index) => {
        let path = page.pageSlug === "home" ? "/" : `/${page.pageSlug}`;
        console.log("Creating route for page:", page);
        console.log("path", path);
        return (
            <Route 
                key={index} 
                path={path} 
                element={<UserPage currentPage={page} onUpdate={this.props.onUpdate}/>}
            />
        );
    }

    render() {
        console.log('PageRouter render called', this.pages); // Add debug log
        if (!this.pages || this.pages.length === 0) {
            return <div>Loading...</div>; // Add a loading state
        }
        return (
            <Router>
                <Routes>
                    {this.pages.map((page, index) => this.newRoute(page, index))}
                    {/* Add a fallback route */}
                    <Route path="*" element={<div>Page not found</div>} />
                </Routes>
            </Router>
        );
    }
}