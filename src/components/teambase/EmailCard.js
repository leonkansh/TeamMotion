import React from 'react';
import './Meeting.css';

export default function EmailCard({ contact }) {
    return (
        <div className="meeting-card">
            <h2 className="card-name">{contact.name}</h2>
            <p className="card-field">{contact.email}</p>
        </div>
    );
}