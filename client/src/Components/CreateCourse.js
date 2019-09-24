import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CourseForm from './CourseForm';

export default class CreateCourse extends Component {
    state = {     // The initial state of the course
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        errors: [],
    }

    render() {
        const {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            errors, 
        } = this.state;
        const { context } = this.props;
        const authUser
        return (
            <CourseForm
                cancel={this.cancel}
                errors={errors}
                submit={this.submit}
                submitButtonText= "Create Course"
                elements={() => (
                    <React.Fragment>
                        <div className="grid-66">
                            <div className="course--header">
                            <h4 className="course--label">Course</h4>
                            <div>
                                <input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..." value={title} onChange={this.change} /></div>
                            <p>By {authUser.name} </p>
                            </div>
                            <div className="course--description">
                            <div><textarea id="description" name="description" className="" placeholder="Course description..." onChange={this.change} value={description} ></textarea>
                            </div>
                            </div>
                        </div>
                        <div className="grid-25 grid-right">
                               <div className="course--stats">
                                    <ul className="course--stats--list">
                                        <li className="course--stats--list--item">
                                            <h4>Estimated Time</h4>
                                            <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" placeholder="Hours" value={estimatedTime} onChange={this.change} /></div>
                                        </li>
                                        <li className="course--stats--list--item">
                                            <h4>Materials Needed</h4>
                                            <div><textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..." onChange={this.change} value={materialsNeeded} ></textarea></div>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                     </React.Fragment>      
                    )} /> 
        );
    };
}