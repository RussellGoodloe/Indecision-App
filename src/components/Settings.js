import React from 'react';

const Settings = () => (
    <div>
        <h2>Email Settings</h2>
        <p>
            Email reminders
            <button>Enable</button>
            <button>Disable</button>
        </p>
        <p>
            Change reminder frequency
            <button>Minimal</button>
            <button>Moderate</button>
            <button>Maximum</button>
        </p>
        <p>Change the email address where reminders are sent</p>
    </div>
);
export default Settings;