import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Chats from './pages/Chats';
import Teambase from './pages/Teambase';
// import Charters from './pages/Charters';
import Reflections from './pages/Reflections';
import TodoCreation from './pages/TodoCreation';
import PostCreation from './pages/PostCreation';
// import CharterTemplate from './pages/CharterTemplate';
// import CharterCreation from './pages/CharterCreation';
import Meeting from './components/teambase/Meeting';

function App() {
    const orgPrepend = '/orgs/:orgid/teams/:teamid';

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path={`${orgPrepend}/tasks`} component={Tasks} />
                <Route path={`${orgPrepend}/tasks/create-todo`} component={TodoCreation} />

                <Route path={`${orgPrepend}/chats`} component={Chats} />

                <Route exact path={`${orgPrepend}/teambase`} component={Teambase} />
                <Route path={`${orgPrepend}/teambase/meetings`} component={Meeting} />

                {/* DEPRECATED
                <Route exact path="/charters" component={Charters} />
                <Route path="/charters/charter-templates" component={CharterTemplate} />
                <Route path="/charters/create-charter" component={CharterCreation} />
                */}

                <Route exact path={`${orgPrepend}/reflections`} component={Reflections} />
                <Route path={`${orgPrepend}/reflections/create-post`} component={PostCreation} />
            </Switch>
        </Router>
    );
}

export default App;