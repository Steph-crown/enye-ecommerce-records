import React from 'react';
import {connect} from 'react-redux';


const Table = (props) => {
    const mode = props.mode

    const inputStyle = {
        dark: {color: "#efefef"},
        light: {color: "#1e1e1e"}
    }
    return (
        <div>
            <label htmlFor="gender-search">
                <i className="fa fa-search"></i>
                <input style={inputStyle[mode]} type="text" id="gender-search" />
            </label>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        mode: state.setModeReducer.mode
    }
}

export default connect(mapStateToProps)(Table);
