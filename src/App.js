import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tasks from './pages/Tasks';
import Chats from './pages/Chats';
import Summary from './pages/Summary';
import Charters from './pages/Charters';
import Reflections from './pages/Reflections';
import BottomNavbar from './pages/BottomNavbar';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tasks" component={Tasks} />
                <Route path="/chats" component={Chats} />
                <Route path="/summary" component={Summary} />
                <Route path="/charters" component={Charters} />
                <Route path="/reflections" component={Reflections} />
            </Switch>
            <BottomNavbar />
        </Router>
    );
}

export default App;