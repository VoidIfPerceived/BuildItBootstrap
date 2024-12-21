import React from "react";
import Container from "react-bootstrap/Container";

export default class UserSiteText extends React.Component {
    constructor(props) {
        super(props);
        content=this.props.content;
    }

    render() {
        console.log(content);
        return (
            <Container>
            <p>{content.toString(text) || "Empty Title"+ console.log("Component has no text content")}</p>
            </Container>
        )
    }

}