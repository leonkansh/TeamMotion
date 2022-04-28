import React, { useState } from 'react';

function Org(org) {
    let teamName = org.name ? org.name : 'No Team';
    let orgid = org._id._id ? org._id._id : org._id;

    return (
        <div
            key={orgid}
            onClick={ () => {
                console.log(teamName)
                console.log(orgid)
            }}
            style={{
            backgroundColor: '#4B369D',
            borderRadius: '15%',
            height: '130px',
            width: '180px',
            cursor: 'pointer'
        }}>
            <p>{teamName}</p>
            <p>{org._id.name}</p>
        </div>
    );
}

export default function Orgs(orgs) {
    let data = [];
    orgs.forEach(org => {
        data.push(Org(org))
    });
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '25px'
        }}>
            {data}
        </div>
    );
}