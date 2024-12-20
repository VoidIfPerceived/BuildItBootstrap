import React from "react";
import PageRouter from "../PageRouter";
import PageNavbar from "../PageNavbar";
import Container from "react-bootstrap/Container";
import PageSearchBar from "../PageSearchBar";
import UserSiteEditor from "./UserSiteEditor";

export default class SiteViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageSlug: "",
    };
  }

  setCurrentPageSlug = (slug) => {
    this.setState({ currentPageSlug: slug });
  };

  render() {
    const { users, index } = this.props;

    const siteInfo = users && users[index] ? users[index].siteInfo : [];
    const pages = siteInfo.sitePages || [];
    const brand = siteInfo.siteBrand || "";

    return (
      <Container>
        <PageNavbar pages={pages} brand={brand} />
        <PageRouter pages={pages} onUpdate={this.props.onUpdate} setCurrentPageSlug={this.setCurrentPageSlug}/>
        <PageSearchBar users={this.props.users} />
        <UserSiteEditor onUpdate={this.props.onUpdate} currentPageSlug={this.state.currentPageSlug} />
      </Container>
    );
  }
}