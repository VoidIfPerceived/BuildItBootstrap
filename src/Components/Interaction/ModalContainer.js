import React from "react";
import Modal from "react-bootstrap/Modal";



export default class ModalContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    //Brings in Location


    render() {
        const position = this.props.position;

        

        return (
            <Modal
                size="lg"
                aria-labelledby={position}
                centered
            >

            </Modal>
        )
    }
}