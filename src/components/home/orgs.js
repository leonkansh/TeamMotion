import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import '@fontsource/poppins';
import './orgs.css';

function Org(org) {
    let teamName = org.name ? org.name : 'No Team';
    let orgid = org._id._id ? org._id._id : org._id;

    return (
        <Link key={orgid} to={`/orgs/${orgid}/teams/${org.teamid}/teambase`}>
            <div className='orgBox' >
                <p className='team'>{teamName}</p>
                <p className='org'>{org._id.name}</p>
            </div>
        </Link>
    );
}

function JoinDiv(joinOrg,
    joinOrgId, setJoinOrgId,
    joinCode, setJoinCode,
    force, setForce) {

    const closeModal = () => {setForce(false)}
    
    return (
    <div>
        <button className='orgBox joinBox'
            onClick={() => setForce(o => !o)}
        >
            <p className='add'>+</p>
        </button>
        <Popup open={force} closeOnDocumentClick onClose={closeModal}>
            {close => (
            <div>
                    <button onClick={close}>
                        &times;
                    </button>
                <div> Join Org: ORGNAME </div>
                <div> Modal Content </div>
                <input type='text' value={joinOrgId} onChange={t => setJoinOrgId(t.target.value)}/>
                <input type='text' value={joinCode} onChange={t => setJoinCode(t.target.value)}/>
                <div>
                    <button
                        onClick={() => {
                            joinOrg();
                            close();
                        }}
                    >
                        Join Org
                    </button>
                </div>
            </div>
            )}
        </Popup>
    </div>
    )
}

export default function Orgs(orgs, joinOrg,
    joinOrgId, setJoinOrgId,
    joinCode, setJoinCode,
    force, setForce) {
    let data = [];
    orgs.forEach(org => {
        data.push(Org(org))
    });
    return (
        <div className='wrapper'>
            {data}
            {JoinDiv(joinOrg,
                joinOrgId, setJoinOrgId,
                joinCode, setJoinCode,
                force, setForce)}  
            {data.length % 2 ? null : <div style={{width: '179px', height:0}}></div>}
        </div>
    );
}