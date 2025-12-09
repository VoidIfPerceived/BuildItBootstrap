import React, { createElement, useRef, useState } from "react";
import UserSiteTitle from "../Content/UserSiteTitle";
import Container from "react-bootstrap/Container";
import ComponentsMap from "../Content/ComponentsMap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserSiteEditor from "./UserSiteEditor";

const UserPage = (props) => {
    const ref = useRef(null);
    const onUpdate = props.onUpdate;
    const currentPage = props.currentPage;

    const currentPageSlug = currentPage.pageSlug;
    // const insertButtonMenu = (index) => {
    //     ref.current.buttonMenu(index);
    //     console.log(ref);
    // }



    const viewPage = (currentPage) => {
        const componentsMap = ComponentsMap();
        return currentPage.pageComponents.length > 0 ? currentPage.pageComponents.map((component, index) => {
            const insertedComponent = componentsMap[component.componentType];
            const content = component.content;
            

            return (
                <Container key={index} content={content}>
                    <Row style={{ position: "relative", marginBottom: "10px" }}>
                        {createElement(
                            insertedComponent,
                            { content: content }
                        )}
                        <Col>
                            <UserSiteEditor 
                                index={index} 
                                onUpdate={onUpdate} 
                                currentPageSlug={currentPageSlug} 
                                editComponentType={component.componentType}
                                editText={content.text}
                                editHref={content.href}
                            />
                        </Col>
                    </Row>
                </Container>
            );
        }) : <UserSiteTitle content="Site has no Components" />
    }

    return (
        <Container>
            {viewPage(currentPage)}
            <UserSiteEditor ref={ref} currentPageSlug={currentPageSlug} onUpdate={onUpdate} />
        </Container>
    )
}

export default UserPage;