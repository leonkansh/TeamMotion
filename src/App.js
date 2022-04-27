import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Chats from './pages/Chats';
import Summary from './pages/Summary';
import Charters from './pages/Charters';
import Reflections from './pages/Reflections';
import TodoCreation from './pages/TodoCreation';
import PostCreation from './pages/PostCreation';
import CharterTemplate from './pages/CharterTemplate';
import CharterCreation from './pages/CharterCreation';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/tasks" component={Tasks} />
                <Route path="/tasks/create-todo" component={TodoCreation} />
                <Route path="/chats" component={Chats} />
                <Route path="/teambase" component={Summary} />
                <Route exact path="/charters" component={Charters} />
                <Route path="/charters/charter-templates" component={CharterTemplate} />
                <Route path="/charters/create-charter" component={CharterCreation} />
                <Route exact path="/reflections" component={Reflections} />
                <Route path="/reflections/create-post" component={PostCreation} />
            </Switch>
        </Router>
    );
}

export default App;