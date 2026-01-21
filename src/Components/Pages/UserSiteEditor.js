import React, { useState, useImperativeHandle, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { protocolManager } from "../../Rest/ProtocolManager";

const UserSiteEditor = ({ index, currentPageSlug, editText, editHref, editComponentType, setIsLoading, setUsers }) => {
    const [componentType, setComponentType] = useState("");
    const [text, setText] = useState("");
    const [onClick, setOnClick] = useState("");
    const [href, setHref] = useState("");
    const [newComponent, setNewComponent] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const initialStateElement = () => {
        setComponentType(editComponentType || "");
        setText(editText || "");
        setHref(editHref || "");
    };

    useEffect(() => {
        initialStateElement();
    }, []);

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

    const submissionHandler = async (formData) => {
        formData.preventDefault();
        setIsLoading(true);
        await newComponentSmasher(index);
        setSubmitted(true);
    };

    const newComponentSmasher = async (index) => {
        console.log("componentType: ", componentType);
        console.log("text: ", text);
        const addedComponent = {
            "componentType": (componentType !== "" ? componentType : "UserSiteTitle"),
            "content": {
                "text": (text.length > 0 ? text : undefined),
                "onClick": (onClick.length > 0 ? onClick : undefined),
                "href": (href.length > 0 ? href : undefined),
            }
        };
        await addComponent(addedComponent, index);
    };

    const addComponent = async (component, index = null) => {
        try {
            let user = await protocolManager.get('0');
            console.log("user: ", user, "newComponent: ", component);
            if (!component || component.length === 0) {
                console.error("no new component data to add...");
                return;
            }

            console.log(currentPageSlug);

            const currentUser = { ...user };
            const sitePages = user.siteInfo.sitePages;
            const pageSlugs = sitePages.map(page => page.pageSlug.toString().toLowerCase());
            const pageIndex = pageSlugs.indexOf(currentPageSlug.toString().toLowerCase());
            if (index == null) {
                currentUser.siteInfo.sitePages[pageIndex].pageComponents.push(component);
            } else {
                currentUser.siteInfo.sitePages[pageIndex].pageComponents[index] = component;
            }

            await protocolManager.put('0', currentUser);
            console.log("component added successfully");
            const updatedUsers = await protocolManager.get('');
            setUsers(updatedUsers);
        } catch (e) {
            console.error("error adding new component: ", e);
        }
        setNewComponent({});
        setComponentType("");
        setText("");
        setOnClick("");
        setHref("");
        setSubmitted(false);
    };

    const filterComponent = async (index) => {
        setIsLoading(true);
        try {
            setSubmitted(true);
            let user = await protocolManager.get('0');

            const currentUser = { ...user };
            const sitePages = user.siteInfo.sitePages;
            const pageSlugs = sitePages.map(page => page.pageSlug.toString().toLowerCase());
            const pageIndex = pageSlugs.indexOf(currentPageSlug.toString().toLowerCase());
            currentUser.siteInfo.sitePages[pageIndex].pageComponents.splice(index, 1);

            await protocolManager.put('0', currentUser);
            console.log("component deleted successfully");
            const updatedUsers = await protocolManager.get('');
            setUsers(updatedUsers);
            setSubmitted(false);
        } catch (e) {
            console.error("error deleting new component: ", e);
        } finally {
            setIsLoading(false);
        }
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
                    <Button type="submit">
                        Edit Selected Elements
                    </Button>
                    <Button onClick={() => filterComponent(index)}>
                        Delete
                    </Button>
                </Container>
            </Form.Group>
        </Form>
    );
};

export default UserSiteEditor;