import React from 'react';


const Task = (props) =>{

    const getPriorityStyle = (priority) => {
        switch (priority) {
          case 'High':
            return { backgroundColor: 'red' };
          case 'Medium':
            return { backgroundColor: 'orange' };
          case 'Low':
            return { backgroundColor: 'green' };
          default:
            return {};
        }
      }

    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
        <p className='title'>{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p className='description' > {props.description}</p>
        <p className='priority' style={getPriorityStyle(props.priority)}>{props.priority}</p>
        <button onClick={props.markDone} className='doneButton'>Done</button>
        <button onClick={props.deleteTask} className='deleteButton' >Delete</button>
        <p>{props.children}</p>
        </div>
    )
}

export default Task;