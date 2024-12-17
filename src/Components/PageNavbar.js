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
                    <h3><Nav.Link href={'#'+{page}}>{page.pageName ? page.pageName.toUpperCase() : "No pages found"}</Nav.Link></h3>
                </Nav.Item>
            );
        };


        return (
            <Container>
                <Navbar sticky="top">
                <Navbar.Brand href={"#home"}>
                    <img
                        src={this.props.brand}
                        width="80"
                        height="80"
                    />
                </Navbar.Brand >
                    <Container >
                        {this.props.pages && this.props.pages.map((page, index) => NavElement(page, index))}
                    </Container>
                </Navbar>
            </Container>
        )

    }


}

export default PageNavbar

//https://github.com/VoidIfPerceived/PromineoFinalProject/blob/935bc011eea437a9e93a170a4f4ac2e9900e0ecc/src/Images/BuildItBootstrap.png

//./public/Images/BuildItBootstrap