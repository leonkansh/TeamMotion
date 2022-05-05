import * as React from 'react';
import { House } from "phosphor-react";
import { Link } from 'react-router-dom';
import './HeaderBar.css';

/**
 * @screenname { team name passed as string in a prop } 
 * @returns Rendering a house icon to go home screen and (TODO)click to edit team name
 */
export default function HeaderBar({ screenname }) {
    const btnHomeStyle = {
        paddingLeft: "20px",
        position: "absolute"
    }
    
    return (
        <div className='header-1-container'>
            <Link className="btn-home" to="/" style={btnHomeStyle}>
                <House size={35} color="#383E56"/>
            </Link>
            <div className='header-title'>
                <p>{screenname}</p>
            </div>
        </div>
    );
}
