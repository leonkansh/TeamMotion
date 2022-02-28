import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Chats from './pages/Chats';
import Summary from './pages/Summary';
import Charters from './pages/Charters';
import Reflections from './pages/Reflections';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/tasks" component={Tasks} />
                <Route path="/chats" component={Chats} />
                <Route path="/summary" component={Summary} />
                <Route path="/charters" component={Charters} />
                <Route path="/reflections" component={Reflections} />
            </Switch>
        </Router>
    );
}

export default App;