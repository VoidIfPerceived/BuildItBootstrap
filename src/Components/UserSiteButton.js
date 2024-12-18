import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default class UserSiteButton extends React.Component {
    constructor(props) {
        super(props);
    }

    nothingToReport = (input) => {
        console.log("nothing to report in: ", input)
        return (undefined)
    }

    render() {

        const onClick = this.props.content.onClick;
        const text = this.props.content.text;
        const href = this.props.content.href;

        console.log(onClick);
        return (
            <Container>
                <Button
                    onClick={onClick || this.nothingToReport("onClick")}
                    href={href || this.nothingToReport("href")}
                >
                    {text || "This button has no text"}
                </Button>
            </Container>
        )
    }








}







//parse content into:
/* Onclick
Text
Link */