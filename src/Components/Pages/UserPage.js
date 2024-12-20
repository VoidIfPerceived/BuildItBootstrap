import React, { createElement, useContext, useEffect } from "react";
import UserSiteTitle from "../UserSiteTitle";
import Container from "react-bootstrap/Container";
import ComponentsMap from "../ComponentsMap";
import { protocolManager } from "../../Rest/ProtocolManager";
import { AppContext } from "../AppContext";

const UserPage = (props) => {
  const { newComponent, setNewComponent, newComponentSmasher, addNewComponent, setEditIndex } = useContext(AppContext);

  useEffect(() => {
    if (newComponent) {
      // Logic to update the component in the page
      console.log("New component received: ", newComponent);
      // You can add logic here to update the component in the page
    }
  });

  const filterComponent = async (index) => {
    try {
      let user = await protocolManager.get("0");
      console.log("user: ", user);

      const currentUser = { ...user };
      const sitePages = user.siteInfo.sitePages;
      const pageSlugs = sitePages.map((page) => page.pageSlug.toLowerCase());
      const pageIndex = pageSlugs.indexOf(props.currentPage.pageSlug.toLowerCase());
      currentUser.siteInfo.sitePages[pageIndex].pageComponents.splice(index, 1);

      await protocolManager.put("0", currentUser);
      props.onUpdate();
      console.log("component deleted successfully");
    } catch (e) {
      console.error("error deleting new component: ", e);
    }
  };

  const viewPage = (currentPage) => {
    const componentsMap = ComponentsMap();
    console.log("length of currentPage.pageComponents: ", currentPage.pageComponents);
    return currentPage.pageComponents.length > 0 ? currentPage.pageComponents.map((component, index) => {
      let insertedComponent = componentsMap[component.componentType];
      let content = component.content;
      this.props.setCurrentPageSlug(currentPage.pageSlug);

      console.log(insertedComponent);
      return (
        <div key={index} style={{ position: "relative", marginBottom: "10px" }}>
          {createElement(insertedComponent, { content: content, currentPageSlug: currentPage.pageSlug })}
          {/* Delete button */}
          <button onClick={() => filterComponent(index)} style={{}}>
            Delete
          </button>
          {/* Edit button */}
          <button onClick={() => {
            newComponentSmasher(component.componentType, component.content.text, component.content.onClick, component.content.href);
            setEditIndex(index);
          }} style={{}}>
            Edit
          </button>
        </div>
      );
    }) : <UserSiteTitle content="Site has no Components" />;
  };

  console.log("UserPage exists");
  console.log("Here is the Current Page passed as prop to UserPage", props.currentPage);

  return (
    <div>
      {viewPage(props.currentPage)}
    </div>
  );
};

export default UserPage;