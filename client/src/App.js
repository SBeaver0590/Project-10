import React, { Component }  from 'react';        
import './App.css';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import Header from './Components/Header';
import Courses from './Components/Courses';
import CreateCourse from './Components/CreateCourse';
import CourseDetail from './Components/CourseDetail';
import UpdateCourse from './Components/UpdateCourse';
import withContext from './context';
import PrivateRoute from './PrivateRoute';               
import UserSignIn from './Components/UserSignIn';
import UserSignUp from './Components/UserSignUp';
import UserSignOut from './Components/UserSignOut';

// Route definition
const HeaderWithContext = withContext(Header);               
const UserSignInWithContext = withContext(UserSignIn);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignOutWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
const CourseDetailWithContext = withContext(CourseDetail);


export default class App extends Component {              


    render() {
        //Routes 
        return (            
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
                    </Switch>
                </div>
            </Router>
        );
    }
}