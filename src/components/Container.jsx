import React from 'react';
// import * as ACTIONS from './../store/actions/actions';
import {connect} from 'react-redux';

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
        <div style={cont[mode]}>
            {props.mode}
            THIS IS THE CONTAINER
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        mode: state.setModeReducer.mode
    }
}

export default connect(mapStateToProps)(Container);
