import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";



export default class ModalContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    //Brings in Location


    render() {
        const position = this.props.position;

        

        return (
            <Popover
                size="lg"
                aria-labelledby={position}
                centered
                placement={position}
            >
            </Popover>
        )
    }
}