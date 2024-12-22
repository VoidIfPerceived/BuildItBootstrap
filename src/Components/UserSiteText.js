import React from "react";
import Container from "react-bootstrap/Container";

export default class UserSiteText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const content = this.props.content;
        return (
            <Container>
            <p>{content.text || "Empty Text Component"+ console.log("Component has no text content")}</p>
            </Container>
        )
    }

}