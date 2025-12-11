import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import LogInForm from "./Interaction/LogInForm";
import UserSiteButton from "./Content/UserSiteButton";
import Button from "react-bootstrap/Button";


export default function PageNavbar({ pages, brand }) {

    const navElement = (page, index) => {
        let path = "/"+page.pageSlug;
        return (
            <Nav.Item key={index}>
                <h3><Nav.Link href={path}>{page.pageName ? page.pageName.toUpperCase() : "No Pages Found"}</Nav.Link></h3>
            </Nav.Item>
        );
    }

    return (
        <Container>
            <Navbar sticky="top">

                <Navbar.Brand href="/home">
                    <img
                        src={brand}
                        width="80"
                        height="80"
                    />
                </Navbar.Brand>

                <Container>
                    {pages && pages.map((page, index) => navElement(page, index))}
                </Container>

                <Button size="md" onClick={LogInForm}>Log-In</Button>
            </Navbar>
        </Container>
    )

}


/*
DEPRECATED CLASS BASED COMPONENT VERSION OF PageNavbar.js
----------------------------------------------------
vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

class PageNavbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const navElement = (page, index) => {
            let path = "/"+page.pageSlug;
            return (
                <Nav.Item key={index}>
                    <h3><Nav.Link href={path}>{page.pageName ? page.pageName.toUpperCase() : "No pages found"}</Nav.Link></h3>
                </Nav.Item>
            );
        };

        return (
            <Container>
                <Navbar sticky="top">
                    <Navbar.Brand href={"/home"}>
                        <img
                            src={this.props.brand}
                            width="80"
                            height="80"
                        />
                    </Navbar.Brand >
                    <Container >
                        {this.props.pages && this.props.pages.map((page, index) => navElement(page, index))}
                    </Container>
                    
                    <Button size="md" onClick={LogInForm}>Log-In</Button>
                </Navbar>
            </Container>
        )

    }


}

export default PageNavbar

//https://github.com/VoidIfPerceived/PromineoFinalProject/blob/935bc011eea437a9e93a170a4f4ac2e9900e0ecc/src/Images/BuildItBootstrap.png

//./public/Images/BuildItBootstrap

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
----------------------------------------------------
DEPRECATED CLASS BASED COMPONENT VERSION OF PageNavbar.js
*/