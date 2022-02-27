import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import BottomNavbar from './pages/BottomNavbar';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Notes />
                    <BottomNavbar />
                </Route>
                <Route path="/create">
                    <Create />
                    <BottomNavbar />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;