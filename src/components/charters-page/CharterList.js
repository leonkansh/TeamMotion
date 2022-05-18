import React from 'react';
import CharterItem from './CharterItem';
import './CharterItem.css'

export default function CharterList({ name, data_list }) {
    return (
        <div>
            <div className='reflection-container'>            
                {
                    data_list.map(item => <CharterItem item={item} />)
                }
            </div>
        </div>
    )
}