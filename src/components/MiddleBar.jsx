import React from 'react';
import Table from './Table';
import TopBar from './TopBar';
import './../css/MiddleBar.css';
import {connect} from 'react-redux';


const MiddleBar = (props) => {
    const bars = {
        color: "#ffffff",
        backgroundColor: "#1e1e1e"
    }

    return (
        <div>
            <div className="top-bar" style={bars}>
                <TopBar />
            </div>
            <div className="table" style={bars}>
                <Table />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}


export default connect(mapStateToProps)(MiddleBar);
