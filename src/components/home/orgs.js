import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';

function Org(org) {
    let teamName = org.name ? org.name : 'No Team';
    let orgid = org._id._id ? org._id._id : org._id;

    return (
        <Link key={orgid} to={`/orgs/${orgid}/teams/${org.teamid}/teambase`}>
            <div
                style={{
                backgroundColor: '#4B369D',
                borderRadius: '15px',
                border: '2px solid #FFFFFF',
                height: '130px',
                width: '179px',
                cursor: 'pointer',
                boxSizing: 'border-box'
            }}>
                <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#FFFFFF',
                    marginLeft: '27px',
                    marginBottom: 0,
                    marginTop: '18px',
                }}>{teamName}</p>
                <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#FFFFFF',
                    marginTop: 0,
                    marginLeft: '27px',
                    maxWidth: '140px'
                }}>{org._id.name}</p>
            </div>
        </Link>
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