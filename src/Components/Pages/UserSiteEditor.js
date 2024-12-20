import React, { useState, forwardRef, useImperativeHandle } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { protocolManager } from "../../Rest/ProtocolManager";

const UserSiteEditor = forwardRef((props, ref) => {
    const [componentType, setComponentType] = useState("");
    const [text, setText] = useState("");
    const [onClick, setOnClick] = useState("");
    const [href, setHref] = useState("");
    const [newComponent, setNewComponent] = useState({});

    const inputChangeHandler = (submit) => {
        const { id, value } = submit.target;
        switch (id) {
            case "componentType":
                setComponentType(value);
                break;
            case "text":
                setText(value);
                break;
            case "onClick":
                setOnClick(value);
                break;
            case "href":
                setHref(value);
                break;
            default:
                break;
        }
    };

    const submissionHandler = (formData) => {
        formData.preventDefault();
        console.log({ componentType, text, onClick, href });
        newComponentSmasher(componentType, text, onClick, href);
    };

    const newComponentSmasher = (componentType, text, onClick, href) => {
        setNewComponent({
            "componentType": componentType !== "" ? componentType : "UserSiteTitle",
            "content": {
                "text": text || undefined,
                "onClick": onClick || undefined,
                "href": href || undefined
            }
        });
        addComponent();
    };

    const addComponent = async (index = null) => {
        try {
            let user = await protocolManager.get('0');
            console.log("user: ", user, "newComponent: ", newComponent);
            if (!newComponent) {
                console.error("no new component data to add...");
                return;
            }

            const currentUser = { ...user };
            const sitePages = user.siteInfo.sitePages;
            const pageSlugs = sitePages.map(page => page.pageSlug.toString().toLowerCase());
            const pageIndex = pageSlugs.indexOf(props.currentPageSlug.toString().toLowerCase());
            console.log(currentUser.siteInfo.sitePages[pageIndex]);
            console.log(pageIndex);
            if (index == null) {
                currentUser.siteInfo.sitePages[pageIndex].pageComponents.push(newComponent);
            } else {
                currentUser.siteInfo.sitePages[pageIndex].pageComponents[index] = newComponent;
            }

            await protocolManager.put('0', currentUser);
            props.onUpdate();
            console.log("component added successfully");
        } catch (e) {
            console.error("error adding new component: ", e);
        }
        setNewComponent({});
        setComponentType("");
        setText("");
        setOnClick("");
        setHref("");
    };

    const filterComponent = async (index) => {
        try {
            let user = await protocolManager.get('0');
            console.log("user: ", user);

            const currentUser = { ...user };
            const sitePages = user.siteInfo.sitePages;
            const pageSlugs = sitePages.map(page => page.pageSlug.toString().toLowerCase());
            const pageIndex = pageSlugs.indexOf(props.currentPageSlug.toString().toLowerCase());
            currentUser.siteInfo.sitePages[pageIndex].pageComponents.splice(index, 1);

            await protocolManager.put('0', currentUser);
            props.onUpdate();
            console.log("component deleted successfully");
        } catch (e) {
            console.error("error deleting new component: ", e);
        }
    };

    useImperativeHandle(ref, () => ({
        buttonMenu: (index) => {
            return (
                <Container>
                    <Button onClick={() => filterComponent(index)}>
                        Delete
                    </Button>
                    <Form.Check
                        inline
                        label="Edit"
                        type="checkbox"
                        id={"edit_" + index}
                    />
                </Container>
            )
        }
    }));



const editSelectedElements = () => {
    console.log("edit selected elements");
};

return (
    <Form onSubmit={submissionHandler}>
        <Form.Group>
            <Container>
                <Form.Select
                    id="componentType"
                    onChange={inputChangeHandler}
                    value={componentType || "UserSiteTitle"}
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
                    value={text}
                    onChange={inputChangeHandler}
                />

                <Form.Control
                    type="text"
                    placeholder="link"
                    id="href"
                    value={href}
                    onChange={inputChangeHandler}
                />

                <Form.Control
                    type="text"
                    placeholder="function"
                    id="onClick"
                    value={onClick}
                    onChange={inputChangeHandler}
                />

                <Button type="submit">
                    Add New Element
                </Button>
                <Button onClick={editSelectedElements}>
                    Edit Selected Elements
                </Button>
            </Container>
        </Form.Group>
    </Form>
);
});

export default UserSiteEditor;