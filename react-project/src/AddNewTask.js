import React, {useState} from 'react';

const AddNewTask = ({onAddTask}) => {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('Not Started');

    const handleAddTask = () => {
        if (!name) return alert("Please enter a task name.");

        const newTask = {
            id: Date.now(),
            name,
            description: desc,
            dueDate: date,
            status: status
        };

        onAddTask(newTask);

        setName('');
        setDesc('');
        setDate('');
        setStatus('Not Started');
    };

    return (
        <div className="box">
            <h3>Add New Task</h3>

            <div className="task-name">
                <input 
                    type="text" 
                    placeholder="Task Name"
                    className="form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="task-desc">
                <textarea 
                    placeholder="Task Description"
                    className="form-input"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                ></textarea>
            </div>

            <div className="input-row">
                <label className="label-text">Due Date:</label>
                <input 
                    type="date"
                    className="date-input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="status-row">
                {['Not Started', 'In Progress', 'Completed'].map((opt) => (
                    <label key={opt} className="radio-label">
                        <input
                            type="radio"
                            name="status"
                            value={opt}
                            checked={status === opt}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                        {opt}
                    </label>
                ))}
            </div>

            <button className="add-btn" onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddNewTask;