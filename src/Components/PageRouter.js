import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';
import UserPage from "./Pages/UserPage";

export default function PageRouter({ pages, isLoading }) {

    const newRoute = (page, index) => {
        let path = page.pageSlug === "home" ? "*" : `/${page.pageSlug}`;
        console.log('PageRouter');
        return (
            <Route
                key={index}
                path={path}
                element={<UserPage page={page} />}
            />
        );
    }

    return (
        <Router>
            <Routes>
                {pages.map((page, index) => newRoute(page, index))}
                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
        </Router>
    );

}

/*
DEPRECATED CLASS BASED COMPONENT VERSION OF PageRouter.js
----------------------------------------------------
vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

export default class PageRouter extends React.Component {
    constructor(props) {
        super(props);
        this.pages=this.props.pages;
        this.isLoading=this.props.isLoading;
    }


    newRoute = (page, index) => {
        let path = page.pageSlug === "home" ? "*" : `/${page.pageSlug}`;
        return (
            <Route 
                key={index} 
                path={path} 
                element={<UserPage currentPage={page} isLoading={this.isLoading}/>}
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
                    <Route path="*" element={<div>Page not found</div>} />
                </Routes>
            </Router>
        );
    }
}

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
----------------------------------------------------
DEPRECATED CLASS BASED COMPONENT VERSION of PageRouter.js
*/
