import React from 'react';
import './Meeting.css';

export default function GoalCard({ goal }) {
    return (
        <div className="meeting-card">
            <h2 className="card-name">{goal}</h2>
        </div>
    );
}