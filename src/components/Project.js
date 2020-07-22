import React from 'react';

const Project = (props) => (
    <div>
        <h1>{props.match.params.id}</h1>
        <h2>Members</h2>
        <p>
            Here's where I'll show tasks, maybe for everyone in the project, maybe just for the current user
        </p>
    </div>
);
export default Project;