import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export default class UserSiteImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const href = this.props.content.href;

        return (
            <Container>
                <Image
                    src={href || undefined}
                />
            </Container>
        )
    }
}

