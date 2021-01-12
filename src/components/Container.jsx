import React from 'react';
// import * as ACTIONS from './../store/actions/actions';
import {connect} from 'react-redux';
import Leftbar from './Leftbar';
import RightBar from './RightBar';

import './../css/Container.css'

const Container = (props) => {
    const cont = {
            color: "#ffffff",
            backgroundColor: "#1e1e1e"
    }

    const rightBar = {
            color: "#ffffff",
            backgroundColor: "#4B4E51"

    }
    return (
        <div style={cont} className="container">
            <div className="left-bar">
                <Leftbar />
            </div>
            <div className="right-bar" style={rightBar} >
                <RightBar />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps)(Container);
