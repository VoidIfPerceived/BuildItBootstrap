import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from react-bootstrap/Container;



export default function App() {
  return (
    <div>
      <h1>Hello World 🌎</h1>
    </div>
  );
}

/*
React & Bootstrap Based Wix Clone | Working Title: "Build-It Bootstrap"


Key Components:


    Navbar ( Navbar . js )
    Page Server ( App . js )
    REST Manager ( ProtocolManager . js )
    Home Page ( Home . js )
    Site Editor Page ( UserSiteEditor . js )
    Site Preview Page ( UserSiteViewer . js ) | { Also Allows other users to view an author's site }
    Title Block ( UserSiteTitle . js )
    Text Block ( UserSiteText . js )
    Image ( UserSiteImage . js ) | {adjustable sizing}
    Site Button / Link ( UserSiteButton . js )
    Form Alert Container ( FormAlertContainer . js )
    Page Search Bar ( SearchBar . js ) | { On Main site, only searches through the properties of a site, Site Name, Site Author, Etc | On User Sites, searches things on that user's site }
    Page Search Page ( SearchResultsPage . js ) | { Similar to above, shows results and properties for Sites if on Main Site | On User Sites, able to search by the properties on user's site }


Also Needs:


    DB or API housing WebPages + Info ( UserSites . json )



Future Ideas:


    Log In Editing { Not with Username and Password info, but with an email and author ID }



*/

//Gushers, also known as late stage fruit roll up