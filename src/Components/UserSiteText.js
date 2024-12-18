import React from "react";
import Container from "react-bootstrap/Container";

export default class UserSiteText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
            <p>{this.props.content.text}</p>
            </Container>
        )
    }

}