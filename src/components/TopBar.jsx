import React, {Component} from 'react';
import {connect} from 'react-redux';
import './../css/TopBar.css';
import records from '../db';
import Select from './Select';
import * as ACTIONS from './../store/actions/actions'



class TopBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filterDisplay: false,
            genderSelect: "",
            paymentSelect: ""
        }
    }

    threeStyle = {backgroundColor: "#ffffff"
    }
    
    payments = records.records.profiles.map(x => x.PaymentMethod);
    genders =  records.records.profiles.map(x => x.Gender);


    paymentMethod = [];

    gender = [];

    onOptionClick = (option, isFor) => {
        this.setState({[isFor]: option});
        if (isFor === "genderSelect") {
            this.props.updateGenderSelect(option);
        } else {
            this.props.updatePaymentSelect(option)
        }
        
    }


    render() {
        this.payments.forEach(x => {
            if (!this.paymentMethod.includes(x)) {
                this.paymentMethod.push(x)
            }
        })
        this.genders.forEach(x => {
            if (!this.gender.includes(x)) {
                this.gender.push(x)
            }
        })
        return (
            <div className="TopBar">
                <div className="flex">
                    <div className="group">
                        <b>No. of Challenges</b>
                        <p>{records.size}</p>
                    </div>
                    <div className="group">
                        <b>Capacity</b>
                        <p>1 - 20</p>
                    </div>
                    <div className="filter" onClick={()=>this.setState({filterDisplay: !this.state.filterDisplay})} style={this.state.filterDisplay ? {borderColor: "#33231e"} : {borderColor: " #4e4d4d"}}>
                        <div className="three">
                            <div style={this.threeStyle}></div>
                            <div style={this.threeStyle}></div>
                            <div style={this.threeStyle}></div>
                        </div>
                        <p>Filter</p>
                    </div>
                </div>
    
    
                <div className="all-filters" style={this.state.filterDisplay ? {display: "flex"} : {display:"none"}}>
                    <div className="gender group">
                        <p>Gender</p>
                        <div className="select">
                            <Select defaultText="Select One" optionsList={this.gender} isFor="genderSelect"onOptionClick={this.onOptionClick} />
                        </div>
                        
                    </div>
                    <div className="payment group">
                        <p>Payment Method</p>
                        <div className="select">
                            <Select defaultText="Select One" optionsList={this.paymentMethod} isFor="paymentSelect" onOptionClick={this.onOptionClick} />
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

const mapDispatchToProps = (dispatch) => {
  
    return {
        updateGenderSelect: (data) => dispatch(ACTIONS.genderSelectAction(data)),
        updatePaymentSelect: (data) => dispatch(ACTIONS.paymentSelectAction(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
