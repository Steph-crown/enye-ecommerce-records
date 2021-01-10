import React from 'react';
import {connect} from 'react-redux';
import './../css/TopBar.css';


const TopBar = (props) => {
    let mode = props.mode
    const genStyle = {
        dark: {
            color: "#efefef",
            backgroundColor: "#1e1e1e"
        },
        light: {
            color: "#1e1e1e",
            backgroundColor: "#efefef"
        }
    }

    const threeStyle = {
        dark: {backgroundColor: "#efefef"},
        light: {backgroundColor: "#1e1e1e"}
    }

    return (
        <div style={genStyle[mode]} className="TopBar">
            <h2>Transaction Details</h2>
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
                        <div style={threeStyle[mode]}></div>
                        <div style={threeStyle[mode]}></div>
                        <div style={threeStyle[mode]}></div>
                    </div>
                    <p>Filter</p>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        mode: state.setModeReducer.mode
    }
}



export default connect(mapStateToProps)(TopBar);
