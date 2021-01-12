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
            color: "#ffffff",
            backgroundColor: "#1e1e1e"
        },
        light: {
            color: "#1e1e1e",
            backgroundColor: "#ffffff"
        }
    }

    const rightBar = {
        dark: {
            color: "#ffffff",
            backgroundColor: "#4B4E51"
        },
        light: {
            color: "#1e1e1e",
            backgroundColor: "#ffffff"
        }
    }
    return (
        <div style={cont[mode]} className="container">
            <div className="left-bar">
                <Leftbar />
            </div>
            <div className="right-bar" style={rightBar[mode]} >
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
