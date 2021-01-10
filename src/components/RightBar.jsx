import React from 'react';
import MiddleBar from './MiddleBar';
import ViewProfile from './ViewProfile';
import './../css/RightBar.css';

const RightBar = () => {
    return (
        <div className="RightBar">
            <div className="middle-bar">
                <MiddleBar />
            </div>
            <div className="view-profile">
                <ViewProfile />
            </div>
        </div>
    );
}

export default RightBar;
