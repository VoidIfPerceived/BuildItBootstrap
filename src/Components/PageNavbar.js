import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";




class PageNavbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const NavElement = (page, index) => {
            return (
                <Nav.Item key={index}>
                    <Nav.Link href="page">{page.pageName ? page.pageName.toUpperCase() : "Page not found"}</Nav.Link>
                </Nav.Item>
            );
        };


        return (
            <div>
                <Navbar sticky="top">
                    <Container >
                        {this.props.pages && this.props.pages.map((page, index) => NavElement(page, index))}
                    </Container>
                </Navbar>
            </div>
        )

    }


}

export default PageNavbar