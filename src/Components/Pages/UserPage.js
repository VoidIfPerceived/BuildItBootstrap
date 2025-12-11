import { createElement, useState } from "react";
import UserSiteTitle from "../Content/UserSiteTitle";
import Container from "react-bootstrap/Container";
import ComponentsMap from "../Content/ComponentsMap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserSiteEditor from "./UserSiteEditor";

const componentsMap = ComponentsMap();

const UserPage = (page) => {

    const currentPageSlug = page.pageSlug;

    const onUpdate = () => {
        setIsLoading(true);
    }

    const viewPage = (page) => {
        return page.page.pageComponents.length > 0 ? page.page.pageComponents.map((component, index) => {
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
            {viewPage(page)}
            <UserSiteEditor currentPageSlug={currentPageSlug} onUpdate={onUpdate} />
        </Container>
    )
}

export default UserPage;