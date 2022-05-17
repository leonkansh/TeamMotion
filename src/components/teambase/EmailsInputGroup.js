import React from 'react';
import { X } from 'phosphor-react';
import './Meeting.css';

/**
 * @param { profiles, setProfiles, this_profile, index of goal list }
 * @returns parsed team goal content in an input form card
 */
export default function EmailsInputGroup({ profiles, setProfiles, deleteContact, profile, index }) {    
    const [name, setName] = React.useState(profile.name);
    const [email, setEmail] = React.useState(profile.email);

    const handleName = (e) => {
        setName(e.target.value);
        let data = profiles;
        data[index].name = e.target.value;
        setProfiles(data);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        let data = profiles;
        data[index].email = e.target.value;
        setProfiles(data);
    }

    return (
        <div key={`email ${index}`} className='input-group email-input-group'>
            <div style={{
                direction: 'row'
            }}>
                <input 
                    className="input-name" 
                    type="text" 
                    name="name"
                    placeholder='Name'
                    value={name} 
                    size="50" 
                    onChange={handleName}
                />

                <button className='btn-delete' onClick={e => deleteContact(e, index)}>
                    <X size={25} />
                </button>
            </div>

            <input 
                className="input-name" 
                type="text" 
                name="name"
                placeholder='Enter the email!'
                value={email} 
                size="50" 
                onChange={handleEmail}
            />
        </div>
    )
}