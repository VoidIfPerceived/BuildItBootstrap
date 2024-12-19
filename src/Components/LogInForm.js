import React from "react";
import Form from "react-bootstrap/Form";
import ModalContainer from "./ModalContainer";
import { useState } from "react";

const LogInForm = () => {

    const { loggedInUser, setLoggedInUser } = useState(initialLoggedInUser)



    handleLogIn = (email, authorId) => {
        setLoggedInUser(authorId);
    }

    handleUpdate = () => {

    }

    return (
        <ModalContainer position="contained-modal-title-vcenter">
            <Form onSubmit={handleLogIn}>
                
            </Form>
        </ModalContainer>
    )
}

export default LogInForm