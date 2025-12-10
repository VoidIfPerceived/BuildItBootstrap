import React from "react";
import Form from "react-bootstrap/Form";
import OverlayContainer from "./OverlayContainer";
import { useState } from "react";

const LogInForm = () => {

    const { loggedInUser, setLoggedInUser } = useState(initialLoggedInUser)



    handleLogIn = (email, authorId) => {
        setLoggedInUser(authorId);
    }

    handleUpdate = () => {

    }

    return (
        <OverlayContainer position="contained-modal-title-vcenter">
            <Form onSubmit={handleLogIn}>
                
            </Form>
        </OverlayContainer>
    )
}

export default LogInForm