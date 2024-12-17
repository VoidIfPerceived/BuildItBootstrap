import React from "react";
import { Component } from "react";
import Container from 'react-bootstrap/Container';
import { PageRouter } from '../PageRouter'
import PageNavbar from "../PageNavbar";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("users prop after being passed into home == ", this.props.users);
        return (
            <Container>
                <PageNavbar />
            </Container>
        )
    }
}