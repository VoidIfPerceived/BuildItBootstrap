import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';


export default class PageRouter extends React.Component {
    constructor(props) {
        super(props);
    }


    newRoute = (page, index) => {
        let path = "/"+page.pageSlug 
        console.log("current page within pageRouter newRoute(): ", page);
        <Route key={index} path={path}>
            
        </Route>
    }


    //{this.props.siteViewer(page)}

    render() {
        const pages = this.props.pages;
        console.log("is PageRouter being rendered = true: ", "pages = ", {pages})
        return (
            <Router>
                <Switch>
                    {pages && pages.map((page, index) => this.newRoute(page, index))}
                </Switch>
            </Router>
        )
    }
}