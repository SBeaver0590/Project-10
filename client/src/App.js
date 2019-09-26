import React, { Component }  from 'react';         //Imports for all routes used
import logo from './logo.svg';
import './App.css';
import { createCipher } from 'crypto';
import axios from 'axios';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import Header from './Components/Header';
import Courses from './Components/Courses';
import CreateCourse from './Components/CreateCourse';
import CourseDetail from './Components/CourseDetail';
import UpdateCourse from './Components/UpdateCourse';
import withContext from './context';
import PrivateRoute from './PrivateRoute';                //HOC import
import UserSignIn from './Components/UserSignIn';
import UserSignUp from './Components/UserSignUp';
import UserSignOut from './Components/UserSignOut';
import Forbidden from './Components/Forbidden';
import NotFound from './Components/NotFound';
import UnhandledError from './Components/UnhandledError';

const HeaderWithContext = withContext(Header);               //Defining routes being used
const UserSignInWithContext = withContext(UserSignIn);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignOutWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
const CourseDetailWithContext = withContext(CourseDetail);


export default class App extends Component {               //Stateless component function

    constructor() {
        super();
    }

    componentDidMount() {  //Called after component to get data

    }

    render() {
        
        return (            //Routes set up for each task, private route for authentication, create & update courses
            <Router>  
                <div>
                    <HeaderWithContext />

                    <Switch>
                        <Route exact path="/" component={Courses} />
                        <PrivateRoute path="/courses/create" component={CreateCourseWithContext} />
                        <Route exact path="/courses/:id" component={CourseDetailWithContext} />
                        <Route path="/signin" component={UserSignInWithContext} />
                        <Route path="/signup" component={UserSignUpWithContext} />
                        <Route path="/signout" component={UserSignOutWithContext} />
                        <PrivateRoute path="/courses/:id/update" component={UpdateCourseWithContext} />
                        <Route path="/forbidden" component={Forbidden} />
                        <Route path="/error" component={UnhandledError} />
                        <Route path="/notfound" component={NotFound} /> 
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}