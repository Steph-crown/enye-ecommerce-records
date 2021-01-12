import React from 'react';
import MiddleBar from './MiddleBar';
import './../css/RightBar.css';
import {connect} from 'react-redux';


const RightBar = (props) => {

    return (
        <div className="RightBar">
            <div className="middle-bar">
                <MiddleBar />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}



export default connect(mapStateToProps)(RightBar);
