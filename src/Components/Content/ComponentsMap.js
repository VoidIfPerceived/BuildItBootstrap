import React from "react";
import UserSiteTitle from "./UserSiteTitle";
import UserSiteButton from "./UserSiteButton";
import UserSiteText from "./UserSiteText";
import UserSiteImage from "./UserSiteImage";


const ComponentsMap = () => {

    let componentsMap = {
        "UserSiteTitle": UserSiteTitle,
        "UserSiteButton": UserSiteButton,
        "UserSiteText": UserSiteText,
        "UserSiteImage": UserSiteImage
    };


    return componentsMap
}

export default ComponentsMap