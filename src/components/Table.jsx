import React, {Component} from 'react';
import {connect} from 'react-redux';
import records from '../db';
import './../css/Table.css'
import Pagination from './Pagination';


class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }
    data = records.records.profiles;

    inputStyle = {
        color: "#ffffff"
    }  

    filter = (data) => {
        return data;
    }

    handlePageChange = (newPage) => {
        this.setState({page: newPage})
    }

    currentPage = this.state.page;

    filteredData = this.filter(this.data)
    dataTable = this.filteredData.slice(20 * (this.currentPage - 1), (20 * (this.currentPage - 1)) + 20);

    dataTable = this.dataTable.map((profile, index) => (
        <tr key={profile.UserName} >
            <td>{index + 1}</td>
            <td>{profile.FirstName + " " + profile.LastName}</td>
            <td>{profile.Gender}</td>
            <td>{profile.PaymentMethod}</td>
            <td>{profile.CreditCardType}</td>
            <td>{profile.UserName}</td>
            <td colSpan="2">
                <a href={"mailto:"+profile.Email} className="action ">
                    <i className="fa fa-envelope"></i>
                    Email
                </a>
                <a href={"tel:"+profile.Email} className="action ">
                    <i className="fa fa-phone"></i>
                    Call
                </a>
            </td>
        </tr>
    ))

    render() {
        return (
            <div className="Table">
                <div className="table-flex">
                    <h2>Profiles</h2>
                    <label htmlFor="gender-search">
                        <i className="fa fa-search"></i>
                        <input style={this.inputStyle} type="text" id="name-search" placeholder="Search By Name" />
                    </label>
                </div>
                <div className="tables">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Payment Method</th>
                                <th>Credit Card Type</th>
                                <th>Username</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable}
                        </tbody>
    
                    </table>
                </div>
                <Pagination page={this.state.page} handlePageChange={this.handlePageChange()} />
            </div>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps)(Table);
