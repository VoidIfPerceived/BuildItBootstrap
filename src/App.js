import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { protocolManager } from './Rest/ProtocolManager';
import SiteViewer from './Components/Pages/SiteViewer';
import { useState, useEffect } from 'react';
import PageRouter from './Components/PageRouter';
import UserSiteEditor from './Components/Pages/UserSiteEditor';


export default function App() {

  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState("0");
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  console.log("App function called");

  useEffect(() => {
    if (isLoading === true) {
      fetchUsers().then((fetchedUsers) => {
      setUsers(fetchedUsers);
      setIsLoading(false);
    })}
  }, [isLoading, users]);

  if (isLoading === true) {
    console.log("Loading...");
    return <div>Loading...</div>
  }
  console.log("Users fetched: ", users);
  console.log("isLoading: ", isLoading);
  return (
    <div>
      < SiteViewer users={users} index={index} isLoading={isLoading} />
    </div>
  )
}
async function updateUsers() {
  App.setIsLoading(true);
}

async function fetchUsers() {
  try {
    console.log("fetching users");
    const users = await protocolManager.get('');
    return users;
  } catch (e) {
    throw new Error("error fetching users: ", e);
  }
}


/*
DEPRECATED CLASS BASED COMPONENT VERSION OF App.js
----------------------------------------------------
vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

export default class App extends Component {
  constructor(props) { //App.js holds state
    super(props);
    this.state = {
      users: [],
      index: "0",
      loggedInUser: {},
      isLoading: true,
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate = async () => {
    setState({ isLoading: true })
    await this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      console.log("fetching users");
      const users = await protocolManager.get('');
      this.setState({ users: users, isLoading: false });;
    } catch (e) {
      console.log("error calling protocolManager.get() ", e);
    }
  }

  async componentDidMount() { //WHY DID NO ONE TELL ME IF YOU CALL A FUNCTION THAT WAITS YOU HAVE TO WAIT FOR IT WHEN YOU CALL IT
    console.log("componentDidMount");
    await this.fetchUsers();
  }

  componentDidUpdate = async (prevProps, prevState) => {
    prevState.users !== this.state.users ? this.fetchUsers : null;
  }

  render() {
    { console.log("render called", this.state) }
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <SiteViewer users={this.state.users} index={this.state.index} update={this.handleUpdate} />
      </div>
    );
  }
}

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
----------------------------------------------------
DEPRECATED CLASS BASED COMPONENT VERSION of App.js
*/

/*
React & Bootstrap Based Wix Clone | Working Title: "Build-It Bootstrap"


12/18 Current Goal:

component / functional component:
  import ComponentsMap
  take the data from UserSiteEditor Form

  users['0'] *Start* {
    "siteInfo": {
      "sitePages": [
        "pageComponents": [
          {
            "componentType": {componentType},
            "content": {
              "text": {text},
              "href": {href},
              "onClick": {onClick}
            }

          }
        ]
      ]
    }
  }











Key Components:


    Navbar ( Navbar . js )
    Page Server ( App . js )
    REST Manager ( ProtocolManager . js )
    Home Page ( Home . js )
    Site Editor Page ( UserSiteEditor . js )
    Site Preview Page ( SiteViewer . js ) | { Also Allows other users to view an author's site }
    Title Block ( UserSiteTitle . js )
    Text Block ( UserSiteText . js )
    Image ( UserSiteImage . js ) | {adjustable sizing}
    Site Button / Link ( UserSiteButton . js )
    Modal Container ( ModalContainer . js )
    Page Search Bar ( SearchBar . js ) | { On Main site, only searches through the properties of a site, Site Name, Site Author, Etc | On User Sites, searches things on that user's site }
    Page Search Page ( SearchResultsPage . js ) | { Similar to above, shows results and properties for Sites if on Main Site | On User Sites, able to search by the properties on user's site }


Also Needs:


    DB or API housing WebPages + Info ( UserSites . json )



Recent Changes:


    12/10/25 - Refactored App.js as functional component
      12/10 - Refactored SiteViewer.js and PageNavbar.js as functional components
      12/10 - Refactored PageRouter.js and UserPage.js as functional components


Future Ideas:


    Log In Editing { Not with Username and Password info, but with an email and author ID }



*/

//Gushers, also known as late stage fruit roll up

//If you're at an ice cream truck and you ask for an ice cream cone {requesting data from api}, you can't take the ice cream cone {return} before the ice cream cone is done {the API} and the cashier {axios} hands it to you