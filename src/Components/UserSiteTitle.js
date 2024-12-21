import React from "react";
import Container from 'react-bootstrap/Container'


export default class UserSiteTitle extends React.Component {
    constructor(props) {
        super(props);
        content=this.props.content;
    }

    render() {
        console.log(this.props.content.text)
        return(
            <Container>
                <h1>{content.toString(text)}</h1>
            </Container>
        )
    }
}