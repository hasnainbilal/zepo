import React from 'react';
import {NavLink} from "react-router-dom";

function Button() {
    return (
        <div>
            <div className="buttons">
                <div className="button">
                    <NavLink to="/today" className="item" activeClassName="activeRoute">Today</NavLink>
                </div>

                <div className="button">
                    <NavLink to="/week" className="item" activeClassName="activeRoute">This Week</NavLink>
                </div>

                <div className="button">
                    <NavLink to="/month" className="item" activeClassName="activeRoute">This Month</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Button;
