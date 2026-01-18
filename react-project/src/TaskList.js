import React, {useState} from 'react';

const TaskList = ({task, onEdit, onDelete}) => {
    
    const [isEditing, setIsEditing] = useState(false);
    
    const [newName, setNewName] = useState(task.name);
    const [newDesc, setNewDesc] = useState(task.description);
    const [newDate, setNewDate] = useState(task.dueDate);
    const [newStatus, setNewStatus] = useState(task.status);

    const handleSave = () => {
        const updatedTask = {
            ...task,
            name: newName,
            description: newDesc,
            dueDate: newDate,
            status: newStatus
        };

        onEdit(updatedTask);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setNewName(task.name);
        setNewDesc(task.description);
        setNewDate(task.dueDate);
        setNewStatus(task.status);
        setIsEditing(false);
    };

    if (isEditing) {
        return(
            <div className="task-item edit-mode">
                <div className="edit-inputs">
                    <label>Task Name:
                        <input type ="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
                    </label>

                    <label>Task Description:
                        <textarea value={newDesc} onChange={(e) => setNewDesc(e.target.value)}/>
                    </label>

                    <label>Due Date:
                        <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
                    </label>

                    <label>Status:
                        <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                            <option value="Not Started">Not Started</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </label>
                </div>
            
                <div className="edit-actions">
                    <button className="save-btn" onClick={handleSave}>Save</button>
                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        )
    };

    return (
        <div className="task-item">
            <div className="task-desc">
                <h4>{task.name}</h4>
                <p>{task.description}</p>
                <div className="task-info">
                    <span>Due Date: {task.dueDate}</span>
                    <span>Status: {task.status}</span>
                </div>
            </div>
            <div className="task-action">
                <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
                <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    );
};

export default TaskList;