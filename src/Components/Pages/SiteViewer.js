import { useState } from "react";
import PageRouter from "../PageRouter";
import PageNavbar from "../PageNavbar";
import Container from "react-bootstrap/Container";
import PageSearchBar from "../Interaction/PageSearchBar";
import UserSiteEditor from "./UserSiteEditor";
//Contains react router / routes for selectedpage -- needs a prop for page and route components

export default function SiteViewer({ users, index, isLoading }) {
    const [currentPageSlug, setCurrentPageSlug] = useState('');

    const siteInfo = users && users[index] ? users[index].siteInfo : [];
    const pages = siteInfo.sitePages || [];
    const brand = siteInfo.siteBrand || '';

    if (!pages.length) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <PageNavbar pages={pages} brand={brand}>

            </PageNavbar>
            <PageRouter pages={pages} isLoading={isLoading}>

            </PageRouter>
            <PageSearchBar users={users}>

            </PageSearchBar>
        </Container>
    )
}



/*
DEPRECATED CLASS BASED COMPONENT VERSION OF SiteViewer.js
----------------------------------------------------
vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

export default class SiteViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currentPageSlug:"",
        }
    }

    render() {
        const { users, index, update } = this.props;

        const siteInfo = users && users[index] ? users[index].siteInfo : [];
        const pages = siteInfo.sitePages || [];
        const brand = siteInfo.siteBrand || '';

        if (!pages.length) {
            return <div>Loading...</div>; // Add a loading state
        }


        return (
            <Container>
                <PageNavbar
                    pages={pages} brand={brand}
                />
                <PageRouter
                    pages={pages} onUpdate={update}
                />
                <PageSearchBar
                    users={this.props.users}
                />
            </Container>
        )
    }
}


^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
----------------------------------------------------
DEPRECATED CLASS BASED COMPONENT VERSION OF SiteViewer.js
*/

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

//viewSite={this.viewSite()}