import { createContext, useState, useEffect } from "react";
import { protocolManager } from "../Rest/ProtocolManager";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [newComponent, setNewComponent] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    const newComponentSmasher = (componentType, text, onClick, href) => {
        const component = {
            componentType: componentType !== "" ? componentType : "UserSiteTitle",
            content: {
                text: text || "",
                onClick: onClick || "",
                href: href || ""
            }
        };
        setNewComponent(component);
    };

    useEffect(() => {
        if (newComponent) {
            console.log("New component set:", newComponent);
        }
    }, [newComponent]);

    const addNewComponent = async (index = null, currentPageSlug, onUpdate, componentData) => {
        try {
            let user = await protocolManager.get('0');
            console.log("user: ", user, "componentData: ", componentData);
            if (!componentData) {
                console.error("no new component data to add...");
                return;
            }

            const pageSlug = currentPageSlug;
            console.log("pageSlug: ", pageSlug);

            const currentUser = { ...user };
            const sitePages = user.siteInfo.sitePages;
            const pageSlugs = sitePages.map(page => page.pageSlug.toLowerCase());
            const pageIndex = pageSlugs.indexOf(pageSlug.toLowerCase());
            console.log(currentUser.siteInfo.sitePages[pageIndex]);
            console.log(pageIndex);
            if (index == null) {
                currentUser.siteInfo.sitePages[pageIndex].pageComponents.push(componentData);
            } else {
                currentUser.siteInfo.sitePages[pageIndex].pageComponents[index] = componentData;
            }

            await protocolManager.put('0', currentUser);
            onUpdate();
            console.log("component added/edited successfully");
        } catch (e) {
            console.error("error adding/editing new component: ", e);
        }
        setNewComponent(null);
        setEditIndex(null);
    };

    const submissionHandler = (formData, currentPageSlug, onUpdate) => {
        if (formData && formData.preventDefault) {
            formData.preventDefault();
        }
        const componentType = formData.target.componentType.value;
        const text = formData.target.text.value;
        const onClick = formData.target.onClick.value;
        const href = formData.target.href.value;
        console.log({ componentType, text, onClick, href });
        const componentData = {
            componentType: componentType !== "" ? componentType : "UserSiteTitle",
            content: {
                text: text || "",
                onClick: onClick || "",
                href: href || ""
            }
        };
        addNewComponent(editIndex, currentPageSlug, onUpdate, componentData);
    };

    return (
        <AppContext.Provider value={{ newComponent, setNewComponent, newComponentSmasher, addNewComponent, submissionHandler, editIndex, setEditIndex }}>
            {children}
        </AppContext.Provider>
    );
};