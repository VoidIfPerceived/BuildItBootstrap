import React from "react";
import Container from 'react-bootstrap/Container'


export default class UserSiteTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return(
            <Container>
                <h1>{this.props.content.text}</h1>
            </Container>
        )
    }
}