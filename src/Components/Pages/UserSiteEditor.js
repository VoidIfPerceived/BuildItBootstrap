import React from "react";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import ComponentsMap from "../ComponentsMap";
import ModalContainer from "../ModalContainer";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { protocolManager } from "../../Rest/ProtocolManager";

//Form only available if correct user is signed in on SiteViewer

export default class UserSiteEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            componentType: "",
            text: "",
            onClick: "",
            href: "",
            content: {},
            newComponent: {}
        }
        //Needs: Pages, logIn Auth, authorId, 
    }

    render() {

        const componentsMap = ComponentsMap();

        /*
                logInCheck = () => {
                    if (logIn == authorId) {
        
                    } else {
        
                    }
        
                }
        */

        const inputChangeHandler = (submit) => {
            const { id, value } = submit.target;
            this.setState({ [id]: value });
        }

        const submissionHandler = (formData) => {
            formData.preventDefault();
            console.log(this.state);
            newComponentSmasher(
                this.state.componentType,
                this.state.text,
                this.state.onClick,
                this.state.href
            );
        }

        const newComponentSmasher = (componentType, text, onClick, href) => {
            let insertedComponent = componentsMap[componentType];
            this.setState(this.state.newComponent = {
                "componentType": {insertedComponent},
                "content": {
                    "text": {text},
                    "onClick": {onClick},
                    "href": {href}
                }
            })

        }




        return (
                <Form onSubmit={submissionHandler}>
                    <Form.Group>
                        <Container>
                            <Form.Select
                                id="componentType"
                                onChange={inputChangeHandler}
                                value={this.state.componentType}
                            >
                                <option value="UserSiteTitle">New Title Component</option>
                                <option value="UserSiteButton">New Button Component</option>
                                <option value="UserSiteText">New Text Component</option>
                                <option value="UserSiteImage">New Image Component</option>
                            </Form.Select>

                            <Form.Control
                            type="text"
                            placeholder="text"
                            id="text"
                            value={this.state.text}
                            onChange={inputChangeHandler}
                            >
                            </Form.Control>

                            <Form.Control
                            type="text"
                            placeholder="link"
                            id="href"
                            value={this.state.href}
                            onChange={inputChangeHandler}
                            >
                            </Form.Control>

                            <Form.Control
                            type="text"
                            placeholder="function"
                            id="onClick"
                            value={this.state.onClick}
                            onChange={inputChangeHandler}
                            >
                            </Form.Control>

                            <Button
                            type="submit"
                            >
                                Submit Changes
                            </Button>
                        </Container>
                    </Form.Group>
                </Form>
        )

    }
}


//Future Ideas:
/*  Option disables form attributes depending on selected attribute

*/