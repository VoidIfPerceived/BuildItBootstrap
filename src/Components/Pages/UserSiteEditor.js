import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { AppContext } from "../AppContext";

export default class UserSiteEditor extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      componentType: "",
      text: "",
      onClick: "",
      href: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.context.newComponent && this.context.newComponent !== prevState.newComponent) {
      const { componentType, content } = this.context.newComponent;
      this.setState({
        componentType,
        text: content.text,
        onClick: content.onClick,
        href: content.href,
      });
    }
  }

  inputChangeHandler = (submit) => {
    const { id, value } = submit.target;
    this.setState({ [id]: value });
  };

  submissionHandler = (formData) => {
    this.context.submissionHandler(formData, this.props.currentPageSlug, this.props.onUpdate);
  };

  render() {
    return (
      <Form onSubmit={this.submissionHandler}>
        <Form.Group>
          <Container>
            <Form.Select
              id="componentType"
              onChange={this.inputChangeHandler}
              value={this.state.componentType || "UserSiteTitle"}
            >
              <option value="UserSiteTitle">New Title Component</option>
              <option value="UserSiteButton">New Button Component</option>
              <option value="UserSiteText">New Text Component</option>
              <option value="UserSiteImage">New Image Component</option>
            </Form.Select>

            <Form.Control
              type="text"
              placeholder="text"
              id="text"
              value={this.state.text}
              onChange={this.inputChangeHandler}
            />

            <Form.Control
              type="text"
              placeholder="link"
              id="href"
              value={this.state.href}
              onChange={this.inputChangeHandler}
            />

            <Form.Control
              type="text"
              placeholder="function"
              id="onClick"
              value={this.state.onClick}
              onChange={this.inputChangeHandler}
            />

            <Button type="submit">Submit Changes</Button>
          </Container>
        </Form.Group>
      </Form>
    );
  }
}