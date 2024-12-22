import React, { createElement, useRef, useState } from "react";
import UserSiteTitle from "../UserSiteTitle";
import Container from "react-bootstrap/Container";
import ComponentsMap from "../ComponentsMap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserSiteEditor from "./UserSiteEditor";

const UserPage = (props) => {
    const [componentType, setComponentType] = useState("");
    const [text, setText] = useState("");
    const [onClick, setOnClick] = useState("");
    const [href, setHref] = useState("");
    const [newComponent, setNewComponent] = useState({});
    const ref = useRef(null);

    const insertButtonMenu = (index) => {
        ref.current.buttonMenu(index);
        console.log(ref);
    }

    const viewPage = (currentPage) => {
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
                            {insertButtonMenu(index)}
                        </Col>
                    </Row>
                </Container>
            );
        }) : <UserSiteTitle content="Site has no Components" />
    }

    console.log("UserPage exists");
    console.log("Here is the Current Page passed as prop to UserPage", props.currentPage);

    return (
        <div>
            {viewPage(props.currentPage)}
            <UserSiteEditor ref={ref} currentPageSlug={props.currentPage.pageSlug} onUpdate={props.onUpdate} />
        </div>
    )
}

export default UserPage;