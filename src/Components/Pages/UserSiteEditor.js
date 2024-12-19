import React from "react";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import ComponentsMap from "../ComponentsMap";
import ModalContainer from "../ModalContainer";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

//Form only available if correct user is signed in on SiteViewer

export default class UserSiteEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            componentType: "",
            text: "",
            onClick: "",
            href: "",
            content: {}
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
                                <option value="1">Thing 1</option>
                                <option value="2">Thing 2</option>
                                <option value="3">Thing 3</option>
                                <option value="4">Thing 4</option>
                            </Form.Select>
                            <Form.Control
                            type="text"
                            aria-placeholder="text"
                            id="text"
                            value={this.state.text}
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