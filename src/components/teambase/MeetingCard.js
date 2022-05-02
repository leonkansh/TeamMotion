import React from 'react';
import './Meeting.css';

export default function MeetingCard({ meeting }) {
    const convertTime = (time) => {
        const hour = Math.trunc(time);
        let minute = Math.trunc((time % 1) * 60);
        minute = minute < 10 ? `0${minute}` : minute;
        return `${hour}:${minute}`;
    }

    const convertDay = (day) => {
        if (day > 7 && day < 0) return;
        const days = ["Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays", "Sundays"];
        return days[day];
    }

    return (
        <div className="meeting-card">
            <h2 className="card-name">{meeting.name}</h2>
            <p className="card-field">{`${convertTime(meeting.start)} ~ ${convertTime(meeting.end)}`}</p>
            <p className="card-field">{convertDay(meeting.weekday)}</p>
        </div>
    );
}