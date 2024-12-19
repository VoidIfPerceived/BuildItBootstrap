import React, { createElement } from "react";
import UserSiteTitle from "../UserSiteTitle";
import Container from "react-bootstrap/Container";
import ComponentsMap from "../ComponentsMap";
import { protocolManager } from "../../Rest/ProtocolManager";
import App from "../../App";


export default class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }

    filterComponent = async  (index) => {
        try {
                        let user = await protocolManager.get('0');
                        console.log(
                            "user: ", user,
                        );
        
                        const currentUser = { ...user };
                        const sitePages = user.siteInfo.sitePages;
                        const pageSlugs = sitePages.map(page => toString(page.pageSlug).toLowerCase())
                        const pageIndex = pageSlugs.indexOf(toString(this.props.currentPageSlug).toLowerCase());
                        currentUser.siteInfo.sitePages[pageIndex].pageComponents.splice(index, 1);
        
                        await protocolManager.put('0', currentUser);
                        this.props.onUpdate();
                        console.log("component deleted successfully");
                    } catch (e) {
                        console.error("error deleting new component: ", e);
                    }
                    
    }

    viewPage = (currentPage) => {
        const componentsMap = ComponentsMap();
        console.log("length of currentPage.pageComponents: ", currentPage.pageComponents);
        return currentPage.pageComponents.length > 0 ? currentPage.pageComponents.map((component, index) => {
            let insertedComponent = componentsMap[component.componentType];
            let content = component.content;

            console.log(insertedComponent);
            return (
                <div key={index} style={{ position: "relative", marginBottom: "10px" }}>
                    {createElement(
                        insertedComponent,
                        { content: content, currentPageSlug: currentPage.pageSlug }
                    )}
                    {/* Delete button */}
                    <button
                        onClick={() => this.filterComponent(index)}
                        style={{
                            
                        }}
                    >
                        Delete
                    </button>
                </div>
            );
        }) : <UserSiteTitle content="Site has no Components"/>
    }

    

    render() {

        console.log("UserPage exists");


        console.log("Here is the Current Page passed as prop to UserPage", this.props.currentPage)

        return (
            <div>
                {this.viewPage(this.props.currentPage)}
            </div>
        )
    }
}


/*
    Components map maybe use as component selector thing
        Only have to maintain one selector
        Only have to maintain one component for changing list of components
    Have the selector:
        Lists all components
    Have an input:
        Input Content
    Submission: Push / Put to API
*/