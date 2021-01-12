import React from 'react';
import {connect} from 'react-redux';
import records from '../db';
import './../css/Table.css'


const Table = (props) => {
    const data = records.records.profiles;

    const inputStyle = {
        color: "#ffffff"
    }  

    const filter = (data) => {
        return data;
    }

    const currentPage = 1;

    let filteredData = filter(data)
    let dataTable = filteredData.slice(20 * (currentPage - 1), (20 * (currentPage - 1)) + 20);

    dataTable = dataTable.map((profile, index) => (
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
    return (
        <div className="Table">
            <div className="table-flex">
                <h2>Profiles</h2>
                <label htmlFor="gender-search">
                    <i className="fa fa-search"></i>
                    <input style={inputStyle} type="text" id="name-search" placeholder="Search By Name" />
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
                        {dataTable}
                    </tbody>

                </table>
            </div>
            
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps)(Table);
