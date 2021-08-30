
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Result from './components/Pages/Result/Results';
import Blogs from "./components/Pages/Blogs/Blogs";
import Enrolled from "./components/Pages/Enrolled/Enrolled";
import Courses from "./components/Pages/Enrolled/Courses/Courses";
import Messages from "./components/Pages/Messages/Messages";
import CreateBlogs from "./components/Pages/Blogs/CreateBlogs";
import BlogDetails from "./components/Pages/Blogs/BlogDetails";
import CreateCourse from "./components/Pages/Enrolled/Courses/CreateCourse";
import EnrolledDetails from "./components/Pages/Enrolled/EnrolledDetails";
import CreateResult from "./components/Pages/Result/CreateResult";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

export let apiEndpoint = 'https://besi-bd.herokuapp.com/api/v1';



function App() {
    return (
        <>
            <Router>
                <NavMenu />
                <Switch>
                    <Route path='/dashboard'>
                        <Dashboard/>
                    </Route>
                    <Route path='/enrolled'>
                        <Enrolled />
                    </Route>

                    <Route path='/enrolled-details/:id'>
                        <EnrolledDetails />
                    </Route>

                    <Route path='/courses'>
                        <Courses />
                    </Route>
                    <Route path='/blogs'>
                        <Blogs />
                    </Route>

                    <Route path='/blog/blogs-details'>
                        <BlogDetails />
                    </Route>
                    <Route path='/create-blogs'>
                        <CreateBlogs />
                    </Route>
                    <Route path='/create-new-batch'>
                        <CreateCourse />
                    </Route>
                    <Route path='/messages'>
                        <Messages />
                    </Route>

                    <Route path='/result'>
                        <Result />
                    </Route>
                    <Route path='/create-result-sheet'>
                        <CreateResult/>
                    </Route>

                    <Route path=''>
                        <Login/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
