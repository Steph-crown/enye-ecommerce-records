import React from 'react';
import './../css/LeftBar.css';

const Leftbar = (props) => {
    const inputStyle = {
        color: "#ffffff",
        borderBottom: "1px solid #ffffff"
    };

    const threeStyle = {
        backgroundColor: "#ffffff"
    }

    return (
        <div className="Leftbar">
            <nav>
                <div className="title">
                    <h2>Enye Tech</h2>
                    <p>Challenge</p>
                </div>
                <div className="three">
                    <div style={threeStyle}></div>
                    <div style={threeStyle}></div>
                    <div style={threeStyle}></div>
                </div>
            </nav>
            
            <input type="text" name="search" id="search" placeholder="Search By Name" style={inputStyle}/>
        </div>
    );
}


export default (Leftbar);
