import React from 'react';
import MiddleBar from './MiddleBar';
import ViewProfile from './ViewProfile';
import './../css/RightBar.css';
import {connect} from 'react-redux';


const RightBar = (props) => {
    let mode = props.mode

    const viewProfile = {
        dark: {
            color: "#ffffff",
            backgroundColor: "#1e1e1e"
        },
        light: {
            color: "#1e1e1e",
            backgroundColor: "#ffffff"
        }
    }

    return (
        <div className="RightBar">
            <div className="middle-bar">
                <MiddleBar />
            </div>
            <div className="view-profile" style={viewProfile[mode]}>
                <ViewProfile />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        mode: state.setModeReducer.mode
    }
}



export default connect(mapStateToProps)(RightBar);
