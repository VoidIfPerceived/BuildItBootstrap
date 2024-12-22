import React, { createElement, createRef } from "react";
import UserSiteTitle from "../UserSiteTitle";
import Container from "react-bootstrap/Container";
import ComponentsMap from "../ComponentsMap";
import { protocolManager } from "../../Rest/ProtocolManager";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import App from "../../App";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserSiteEditor from "./UserSiteEditor";

export default class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.userSiteEditorRef = createRef();
        this.state = {
            componentType: "",
            text: "",
            onClick: "",
            href: "",
            newComponent: {}
        }
    }

    viewPage = (currentPage) => {
        const componentsMap = ComponentsMap();
        console.log("length of currentPage.pageComponents: ", currentPage.pageComponents);
        return currentPage.pageComponents.length > 0 ? currentPage.pageComponents.map((component, index) => {
            let insertedComponent = componentsMap[component.componentType];
            let content = component.content;

            console.log(content);
            return (
                <Container key={index} content={content}>
                    <Row style={{ position: "relative", marginBottom: "10px" }}>
                        {createElement(
                            insertedComponent,
                            { content: content }
                        )}
                        <Col>
                            <UserSiteEditor ref={this.userSiteEditorRef.current?.buttonMenu(index)}/>
                        </Col>
                    </Row>
                </Container>
            );
        }) : <UserSiteTitle content="Site has no Components" />
    }

    render() {
        console.log("UserPage exists");
        console.log("Here is the Current Page passed as prop to UserPage", this.props.currentPage);

        return (
            <div>
                {this.viewPage(this.props.currentPage)}
                <UserSiteEditor ref={this.userSiteEditorRef} currentPageSlug={this.props.currentPage.pageSlug} onUpdate={this.props.onUpdate}/>
            </div>
        )
    }
}