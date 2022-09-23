import React, { Component } from 'react';
import TableRow from './TableRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateModal from "./Modals/CreateModal";



class Table extends Component {


    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        }
    }


    // Life cycle method.
    componentDidMount() {
        this.getEmployeeList();
    }


    // Get Employee List.
    getEmployeeList = () => {
        let self = this;
        axios.get('/get/employee/list').then(function (response) {
            self.setState({
                employees: response.data
            });
        });
    }

    render() {
        return (
            <div className="container">
                <ToastContainer />
                
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    <CreateModal/>
                        <div className="card">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col" width="100px">#</th>
                                <th scope="col" width="100px">Task Title</th>
                                <th scope="col" width="100px">Task Description</th>
                                <th scope="col" width="100px">Actions</th>
                                </tr>
                            </thead>
                                <tbody>
                                    {this.state.employees.map(function (x, i) {
                                        return <TableRow key={i} data={x} /> 
                                    })}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;

