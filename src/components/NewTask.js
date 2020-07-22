import React from 'react';

export default class NewTask extends React.Component
{
    state = {
        error: undefined,
    };
    handleNewTask = (e) => {
        e.preventDefault();
        const title = e.target.elements.title.value.trim();
        const projectID = e.target.elements.projectID.value.trim();
        const dueDate = e.target.elements.dueDate.value.trim();
        const description = e.target.elements.description.value.trim();

        this.setState(() => ({error}));

        if (!error) {
            e.target.elements.title.value = '';
            e.target.elements.projectID.value = '';
            e.target.elements.dueDate.value = '';
            e.target.elements.description.value = '';
        }
    };
    render = () => (
        <div>
            <h2>New Task</h2>
            <form onSubmit={this.handleNewTask}>
                <label>Title</label>
                <input className="add-task-input" type="text" name='title'/>

                <label>Project ID(If applicable)</label>
                <input className="add-task-input" type="text" name='projectID'/>

                <label>dueDate</label>
                <input className="add-task-input" type="date" name='dueDate'/>

                <label>Description</label>
                <input className="add-task-input" type="text" name='description'/>

                <button className="button">Add Task</button>
            </form>
        </div>
    );
};
