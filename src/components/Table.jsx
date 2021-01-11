import React from 'react';
import {connect} from 'react-redux';
import records from '../db';
import './../css/Table.css'


const Table = (props) => {
    const mode = props.mode

    const data = records.records.profiles;

    const inputStyle = {
        dark: {color: "#efefef"},
        light: {color: "#1e1e1e"}
    }  

    const filter = (data) => {
        return data;
    }

    const currentPage = 1;

    let filteredData = filter(data)
    let dataTable = filteredData.slice(20 * (currentPage - 1), (20 * (currentPage - 1)) + 20);

    dataTable = dataTable.map((profile, index) => (
        <tr key={profile.UserName}>
            <td>{index + 1}</td>
            <td>{profile.FirstName + " &nbsp; " + profile.LastName}</td>
            <td>{profile.Gender}</td>
            <td>{profile.PaymentMethod}</td>
            <td>{profile.CreditCardType}</td>
            <td colSpan="2">
                <a href={"mailto:"+profile.Email} className="action fa fa-envelope">Email</a>
                <a href={"tel:"+profile.Email} className="action fa fa-phone">Call</a>
            </td>
        </tr>
    ))
    return (
        <div className="Table">
            <div className="table-flex">
                <h2>Profiles</h2>
                <label htmlFor="gender-search">
                    <i className="fa fa-search"></i>
                    <input style={inputStyle[mode]} type="text" id="name-search" placeholder="Search By Name" />
                    {console.log(dataTable)}
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
        mode: state.setModeReducer.mode
    }
}

export default connect(mapStateToProps)(Table);
