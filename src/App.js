import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { protocolManager } from "./Rest/ProtocolManager";
import SiteViewer from "./Components/Pages/SiteViewer";
import { AppProvider } from "./Components/AppContext";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      index: "0",
      loggedInUser: {},
    };
  }

  handleUpdate = async () => {
    await this.fetchUsers();
  };

  fetchUsers = async () => {
    try {
      const users = await protocolManager.get("");
      this.setState({ users: users });
    } catch (e) {
      console.log("error calling protocolManager.get() ", e);
    }
  };

  async componentDidMount() {
    await this.fetchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    prevState.users !== this.state.users ? this.fetchUsers : undefined;
  }

  render() {
    return (
      <AppProvider>
        <div>
          <SiteViewer users={this.state.users} index={this.state.index} onUpdate={this.handleUpdate} />
        </div>
      </AppProvider>
    );
  }
}