import React, {Component} from 'react';
import {connect} from 'react-redux';
import './../css/TopBar.css';


class TopBar extends Component {
    mode = this.props.mode
    genStyle = {
        dark: {
            color: "#ffffff",
            backgroundColor: "#1e1e1e"
        },
        light: {
            color: "#1e1e1e",
            backgroundColor: "#ffffff"
        }
    }

    threeStyle = {
        dark: {backgroundColor: "#ffffff"},
        light: {backgroundColor: "#1e1e1e"}
    }


    options = [
        { value: 'blues', label: 'Blues' },
        { value: 'rock', label: 'Rock' },
        { value: 'jazz', label: 'Jazz' },
        { value: 'orchestra', label: 'Orchestra' }
    ];

    gender = [
        {value: 'male', label: 'Male'},
        {value: 'female', label: 'Female'}
    ]


    render() {
        return (
            <div style={this.genStyle[this.mode]} className="TopBar">
                {/* <h2>Transaction Details</h2> */}
                <div className="flex">
                    <div className="group">
                        <b>No. of Challenges</b>
                        <p>53</p>
                    </div>
                    <div className="group">
                        <b>Capacity</b>
                        <p>1 - 20</p>
                    </div>
                    <div className="filter">
                        <div className="three">
                            <div style={this.threeStyle[this.mode]}></div>
                            <div style={this.threeStyle[this.mode]}></div>
                            <div style={this.threeStyle[this.mode]}></div>
                        </div>
                        <p>Filter</p>
                    </div>
                </div>
    
    
                {/* <div className="all-filters">
                    <div className="gender group">
                        <p>Gender</p>
                        <div className="select">
                            <Select styles = { this.customStyles } options={this.gender} />
                        </div>
                        
                    </div>
                    <div className="payment group">
                        <p>Payment Method</p>
                        <div className="select">
                            <Select styles = { this.customStyles } options={this.options} />
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
    
}
const mapStateToProps = (state) => {
    return {
        mode: state.setModeReducer.mode
    }
}



export default connect(mapStateToProps)(TopBar);
