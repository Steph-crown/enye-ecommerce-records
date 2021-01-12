import React, {Component} from 'react';
import {connect} from 'react-redux';
import './../css/TopBar.css';
import records from '../db';
import Select from './Select';



class TopBar extends Component {

    threeStyle = {backgroundColor: "#ffffff"
    }
    
    payments = records.records.profiles.map(x => x.PaymentMethod);

    paymentMethod = [];

    gender = [
        "Male", "Female"
    ]


    render() {
        this.payments.forEach(x => {
            if (!this.paymentMethod.includes(x)) {
                this.paymentMethod.push(x)
            }
        })
        return (
            <div className="TopBar">
                {/* <h2>Transaction Details</h2> */}
                <div className="flex">
                    <div className="group">
                        <b>No. of Challenges</b>
                        <p>{records.size}</p>
                    </div>
                    <div className="group">
                        <b>Capacity</b>
                        <p>1 - 20</p>
                    </div>
                    <div className="filter">
                        <div className="three">
                            <div style={this.threeStyle}></div>
                            <div style={this.threeStyle}></div>
                            <div style={this.threeStyle}></div>
                        </div>
                        <p>Filter</p>
                    </div>
                </div>
    
    
                <div className="all-filters">
                    <div className="gender group">
                        <p>Gender</p>
                        <div className="select">
                            <Select defaultText="Select One" optionsList={this.gender} />
                        </div>
                        
                    </div>
                    <div className="payment group">
                        <p>Payment Method</p>
                        <div className="select">
                            <Select defaultText="Select One" optionsList={this.paymentMethod} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}
const mapStateToProps = (state) => {
    return {
    }
}



export default connect(mapStateToProps)(TopBar);
