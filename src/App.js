import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Chats from './pages/Chats';
import Teambase from './pages/Teambase';
import Reflections from './pages/Reflections';
import TodoCreation from './pages/TodoCreation';
import PostCreation from './pages/PostCreation';
import Meeting from './components/teambase/Meeting';
import Goal from './components/teambase/Goal';
import Email from './components/teambase/Email';
import Landing from './pages/Landing';
import Signup from './pages/Signup';

function App() {
    const orgPrepend = '/orgs/:orgid/teams/:teamid';

    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Landing} />

                <Route exact path='/signup' component={Signup}/>

                <Route exact path="/home" component={Home} />

                <Route exact path={`${orgPrepend}/tasks`} component={Tasks} />
                <Route path={`${orgPrepend}/tasks/create-todo`} component={TodoCreation} />

                <Route path={`${orgPrepend}/chats`} component={Chats} />

                <Route exact path={`${orgPrepend}/teambase`} component={Teambase} />
                <Route path={`${orgPrepend}/teambase/meetings`} component={Meeting} />
                <Route path={`${orgPrepend}/teambase/goals`} component={Goal} />
                <Route path={`${orgPrepend}/teambase/emails`} component={Email} />
                
                <Route exact path={`${orgPrepend}/reflections`} component={Reflections} />
                <Route path={`${orgPrepend}/reflections/create-post`} component={PostCreation} />
            </Switch>
        </Router>
    );
}

export default App;