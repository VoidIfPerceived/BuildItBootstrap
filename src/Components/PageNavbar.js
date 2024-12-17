import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";




const PageNavbar = (props) => {
    const { pages, brand } = props; //brings in (pages, brand) props to navbar

    const NavElement = (page, index) => {
        return (
            <Nav key={index}>
                <Nav.Link>{[page.toUppercase()]}</Nav.Link>
            </Nav>
        );
    };


    return (
        <div>
            <Navbar sticky="top">
                <Container >
                    {this.map((page, index) =>
                        {NavElement (page, index)}
                    )}
                </Container>
            </Navbar>
        </div>
    )

}

export default PageNavbar