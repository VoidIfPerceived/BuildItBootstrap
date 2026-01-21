import { createElement, useState } from "react";
import UserSiteTitle from "../Content/UserSiteTitle";
import Container from "react-bootstrap/Container";
import ComponentsMap from "../Content/ComponentsMap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserSiteEditor from "./UserSiteEditor";

const componentsMap = ComponentsMap();

const UserPage = ({ page, setIsLoading, setUsers }) => {

    const currentPageSlug = page.pageSlug;

    const viewPage = (page) => {
        return page.pageComponents.length > 0 ? page.pageComponents.map((component, index) => {
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
                                currentPageSlug={currentPageSlug} 
                                editText={content.text}
                                editHref={content.href}
                                editComponentType={component.componentType}
                                setIsLoading={setIsLoading}
                                setUsers={setUsers}
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
            <UserSiteEditor currentPageSlug={currentPageSlug} setIsLoading={setIsLoading} setUsers={setUsers} />
        </Container>
    )
}

export default UserPage;