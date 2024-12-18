import React, { createElement } from "react";
import UserSiteTitle from "../UserSiteTitle";
import Container from "react-bootstrap/Container";

export default class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }

    viewPage = (currentPage) => {
        console.log("viewPage exists, currentPage: ", currentPage)
        currentPage.pageComponents.map((component, index) => {
            let insertedComponent = component.componentType;
            let content = component.content;

            console.log(insertedComponent)
            return createElement(
                insertedComponent,
                { content: { content } }
            )
        })
    }

    render() {

        console.log("UserPage exists");


        console.log("Here is the Current Page passed as prop to UserPage", this.props.currentPage)

        return (
            <div>
                Hello
                {this.viewPage(this.props.currentPage)}
            </div>
        )
    }
}