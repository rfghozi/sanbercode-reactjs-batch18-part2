import React from 'react';
import "./Nav.css";

const Nav = ({ theme, themein }) => {
    return (
        <div className="toggleChange">
            <label className="rubah">
                <span style={{ height:" 30px", width: "150px",textAlign:"center" }} type="btn" onChange={themein} checked={theme==="dark"?true:false}>Mode {theme}</span> 
            <span className="slider"></span>
            </label>
        </div>
    );
}

export default Nav