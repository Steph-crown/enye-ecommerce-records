import React from 'react';
import './../css/LeftBar.css';
import {connect} from 'react-redux';


const Leftbar = (props) => {
    let mode = props.mode
    const inputStyle = {
        dark: {
            color: "#ffffff",
            borderBottom: "1px solid #ffffff"
        },
        light: {
            color: "#1e1e1e",
            borderBottom: "1px solid #1e1e1e"
        }
    };

    const threeStyle = {
        dark: {backgroundColor: "#ffffff"},
        light: {backgroundColor: "#1e1e1e"}
    }

    return (
        <div className="Leftbar">
            <nav>
                <div className="title">
                    <h2>Enye Tech</h2>
                    <p>Challenge</p>
                </div>
                <div className="three">
                    <div style={threeStyle[mode]}></div>
                    <div style={threeStyle[mode]}></div>
                    <div style={threeStyle[mode]}></div>
                </div>
            </nav>
            
            <input type="text" name="search" id="search" placeholder="Search By Name" style={inputStyle[mode]}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        mode: state.setModeReducer.mode
    }
}



export default connect(mapStateToProps)(Leftbar);
