import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom'
import PageNavbar from "../PageNavbar";
import Container from "react-bootstrap/Container";
//Contains react router / routes for selectedpage -- needs a prop for page and route components

export default class SiteViewer extends React.Component {

    render() {
        const { users, index } = this.props;

        const siteInfo = users && users[index] ? users[index].siteInfo : [];
        const pages = siteInfo.sitePages || [];
        const brand = siteInfo.siteBrand || '';

        console.log("users prop after being passed into SiteViewer == ", this.props.users);
        
        return (
            <div>
                <PageNavbar 
                pages={pages} brand={brand}
                />
            </div>
        )
    }
}