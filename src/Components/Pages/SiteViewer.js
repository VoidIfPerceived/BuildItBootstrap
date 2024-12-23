import React from "react";
import PageRouter from "../PageRouter";
import PageNavbar from "../PageNavbar";
import Container from "react-bootstrap/Container";
import PageSearchBar from "../PageSearchBar";
import UserSiteEditor from "./UserSiteEditor";
//Contains react router / routes for selectedpage -- needs a prop for page and route components

export default class SiteViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currentPageSlug:"",
        }
    }

    render() {
        const { users, index, onUpdate } = this.props;
        console.log(users);


        const siteInfo = users && users[index] ? users[index].siteInfo : [];
        console.log(siteInfo);
        const pages = siteInfo.sitePages || [];
        const brand = siteInfo.siteBrand || '';
        console.log("Site Viewer pages", pages);

        if (!pages.length) {
            return <div>Loading...</div>; // Add a loading state
        }
/*
        viewSite = (currentPage) => {
            currentPage=[];
            <Container>
                {currentPage.map((currentPage) => currentPage[index])}
            </Container>
        }
/*
        viewSite = (currentPage) => {
            currentPage = [];
            for (component of components) {
                let InsertedComponent = components[component].componentType
                currentPage.push(<InsertedComponent key={component}>
                    
                    {component.content}

                </InsertedComponent>)
            }
        }
*/

        return (
            <Container>
                <PageNavbar
                    pages={pages} brand={brand}
                />
                <PageRouter
                    pages={pages} onUpdate={onUpdate}
                />
                <PageSearchBar
                    users={this.props.users}
                />
            </Container>
        )
    }
}

//viewSite={this.viewSite()}