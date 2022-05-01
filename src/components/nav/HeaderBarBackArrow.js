import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';
import './HeaderBar.css'

/**
 * @screenname { team name passed as string in a prop } 
 * @returns Rendering a back arrow icon to return to last page
 */
export default function HeaderBarBackArrow({ screenname }) {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const btnHomeStyle = {
        position: "absolute"
    }

    return (
        <div className='header-1-container'>
            <button className="btn-back" onClick={goBack} style={btnHomeStyle}>
                <ArrowLeft size={35} color="#4B369D" />
            </button>
            <div className='header-title'>
                <p>{screenname}</p>
            </div>
        </div>
    );
}
