import React from "react";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import ModalContainer from "../ModalContainer";
import Form from "react-bootstrap/Form";
import { Button, Modal } from "react-bootstrap";
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
            newComponent: {}
        }
        //Needs: Pages, logIn Auth, authorId, 
    }



    render() {

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
            this.setState(this.state.newComponent = {
                "componentType": componentType !== "" ? componentType : "UserSiteTitle",
                "content": {
                    "text": text || undefined,
                    "onClick": onClick || undefined,
                    "href": href || undefined
                }
            })
            addNewComponent();
        }

        const addNewComponent = async () => {
            try {
                let user = await protocolManager.get('0');
                console.log(
                    "user: ", user,
                    "newComponent: ", this.state.newComponent
                )
                if (!this.state.newComponent) {
                    console.error("no new component data to add...");
                    return;
                }

                const currentUser = { ...user };
                const sitePages = user.siteInfo.sitePages;
                const pageSlugs = sitePages.map(page => toString(page.pageSlug).toLowerCase())
                const pageIndex = pageSlugs.indexOf(toString(this.props.currentPageSlug).toLowerCase());
                console.log(currentUser.siteInfo.sitePages[pageIndex])
                console.log(pageIndex)
                currentUser.siteInfo.sitePages[pageIndex].pageComponents.push(this.state.newComponent);

                await protocolManager.put('0', currentUser);
                this.props.onUpdate();
                console.log("component added successfully");
            } catch (e) {
                console.error("error adding new component: ", e);
            }
            this.setState(this.state.newComponent = {});
            this.setState({
                componentType: "",
                text: "",
                onClick: "",
                href: ""
            });
        }


        return (
            <Form onSubmit={submissionHandler}>
                <Form.Group>
                    <Container>
                        <Form.Select
                            id="componentType"
                            onChange={inputChangeHandler}
                            value={this.state.componentType || "UserSiteTitle"}
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