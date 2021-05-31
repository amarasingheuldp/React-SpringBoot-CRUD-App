import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        //this.cancelEmployee = this.cancelEmployee.bind(this);
    }

    saveEmployee = (e) =>{
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees');
        });
        console.log('employee => ' + JSON.stringify(employee) );
    }

    cancel() {
        this.props.history.push('/employees');
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }
    
    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value});
    }
    render() {
        return (
            <div>
                <div className= "container">
                    <div className= "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="card-header text-center mb-1">Add Employee</h3>
                            <div className = "card body mb-3">
                                <form>
                                    <div className="form-grop mb-3">
                                    <div className= "mb-3">
                                        <label className="form-label">First Name</label>
                                        <input placeholder="First Name" name="firstName" 
                                        className="form-control" value={this.state.firstName}
                                        onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Last Name</label>
                                        <input placeholder="Last Name" name="lasttName" 
                                        className="form-control" value={this.state.lastName}
                                        onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input placeholder="Email Address" name="emailId" 
                                        className="form-control" value={this.state.emailId}
                                        onChange={this.changeEmailIdHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;