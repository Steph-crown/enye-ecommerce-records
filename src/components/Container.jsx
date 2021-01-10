import React from 'react';
// import * as ACTIONS from './../store/actions/actions';
import {connect} from 'react-redux';
import Leftbar from './Leftbar';
import RightBar from './RightBar';

import './../css/Container.css'

const Container = (props) => {
    let mode = props.mode
    const cont = {
        dark: {
            color: "#efefef",
            backgroundColor: "#1e1e1e"
        },
        light: {
            color: "#1e1e1e",
            backgroundColor: "#efefef"
        }
    }
    return (
        <div style={cont[mode]} className="container">
            <div className="left-bar">
                <Leftbar />
            </div>
            <div className="left-holder"></div>
            <div className="right-bar">
                <RightBar />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        mode: state.setModeReducer.mode
    }
}

export default connect(mapStateToProps)(Container);
