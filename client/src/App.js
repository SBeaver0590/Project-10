import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Components/Header';
import Courses from './Components/Courses';
import CourseDetail from './Components/CourseDetail';
import UserSignIn from './Components/UserSignIn';
import UserSignUp from './Components/UserSignUp';
import CreateCourse from './Components/CreateCourse';
import UpdateCourse from './Components/UpdateCourse';
import UserSignOut from './Components/UserSignOut';
import NotFound from './Components/NotFound';
import withContext from './context';
import PrivateRoute from './PrivateRoute';
// import '../styles/global.css';

const UserSignUpWithContext = withContext(UserSignUp);

class App extends Component {

  signIn = (email,password) => {
    alert(`email : ${email} , password : ${password}`);
  }

  render () {
    return (
      <BrowserRouter>
        <div id="root">
          <div>
            <Header signedIn={true} />
            <Switch>
              <Route exact path="/" component={Courses}/>
              <PrivateRoute path='/courses/create' component={withContext(CreateCourse)} />
              <PrivateRoute path='/courses/:id/update' component={UpdateCourse} /> 
              <Route path="/courses/create" component={CreateCourse} />
              <Route path="/courses/:id/update" render={ (props) => < UpdateCourse {...props} /> } />
              <Route path="/courses/:id" component={CourseDetail} />
              <Route path="/signin" render={ (props) => < UserSignIn {...props} signInUser={this.signIn} /> } />
              <Route path="/signup" component={UserSignUpWithContext} />
              <Route path="/signout" component={UserSignOut} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>    
    );
  }
}

export default App;
