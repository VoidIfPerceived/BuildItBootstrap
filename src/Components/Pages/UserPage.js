import React from "react";

export default class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log("UserPage exists");

        viewSite = (currentPage) => {
            for (component of components) {
                let InsertedComponent = components[component].componentType
                currentPage.push(<InsertedComponent key={component}>

                    {component.content}

                </InsertedComponent>)
            }
        }

        console.log("Here is the Current Page passed as prop to UserPage", this.props.currentPage)

        return (
            <div>
                Hello
            </div>
        )
    }
}