import React from "react";
import PageRouter from "../PageRouter";
import PageNavbar from "../PageNavbar";
import Container from "react-bootstrap/Container";
//Contains react router / routes for selectedpage -- needs a prop for page and route components

export default class SiteViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currentPageName:"",
            currentPage:[]
        }
    }

    render() {
        const { users, index } = this.props;


        const siteInfo = users && users[index] ? users[index].siteInfo : [];
        const pages = siteInfo.sitePages || [];
        const brand = siteInfo.siteBrand || '';

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
                let InsertedComponent = components[component].name
                currentPage.push(<InsertedComponent key={component}>
                    
                    {component.content}

                </InsertedComponent>)
            }
        }
*/

        return (
            <Container>
                <PageRouter
                    pages={pages}
                />
                <PageNavbar
                    pages={pages} brand={brand}
                />
            </Container>
        )
    }
}

//viewSite={this.viewSite()}