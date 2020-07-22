import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from "../components/Header";
import MyTasks from "../components/MyTasks";
import MyProjects from "../components/MyProjects";
import Settings from '../components/Settings';
import Project from '../components/Project';
import NotFoundPage from '../components/NotFoundPage';
import NewTask from '../components/NewTask';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={MyTasks} exact={true}/>
                <Route path="/projects" component={MyProjects} />
                <Route path="/settings" component={Settings} />
                <Route path="/project/:id" component={Project} />
                <Route path="/create" component={NewTask} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;