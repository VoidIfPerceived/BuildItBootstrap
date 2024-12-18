import React, { createElement } from "react";
import UserSiteTitle from "../UserSiteTitle";
import Container from "react-bootstrap/Container";
import UserSiteButton from "../UserSiteButton";
import UserSiteText from "../UserSiteText";
import UserSiteImage from "../UserSiteImage";

let componentsMap = {"UserSiteTitle": UserSiteTitle, "UserSiteButton": UserSiteButton, "UserSiteText": UserSiteText, "UserSiteImage": UserSiteImage};
export default class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }

    viewPage = (currentPage) => {
        console.log("length of currentPage.pageComponents: ", currentPage.pageComponents);
        return currentPage.pageComponents.length > 0 ? currentPage.pageComponents.map((component, index) => {
            let insertedComponent = componentsMap[component.componentType];
            let content = component.content;

            console.log(insertedComponent);
            return createElement(
                insertedComponent,
                { content: content, key: index}
            )
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