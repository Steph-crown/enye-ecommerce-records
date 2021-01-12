import React from 'react';
import Table from './Table';
import TopBar from './TopBar';
import './../css/MiddleBar.css';
import {connect} from 'react-redux';


const MiddleBar = (props) => {
    let mode = props.mode

    const bars = {
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
        <div>
            <div className="top-bar" style={bars[mode]}>
                <TopBar />
            </div>
            <div className="table" style={bars[mode]}>
                <Table />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        mode: state.setModeReducer.mode
    }
}


export default connect(mapStateToProps)(MiddleBar);
