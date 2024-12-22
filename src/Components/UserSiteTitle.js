import React from "react";
import Container from 'react-bootstrap/Container'


export default class UserSiteTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const content = this.props.content;
        return(
            <Container>
                <h1>{content.text}</h1>
            </Container>
        )
    }
}