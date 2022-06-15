import { useState } from 'react';
import Select from 'react-select'

// styles
import './Create.css'

const categories = [
  {value: 'development', label: 'Development'},
  {value: 'design', label: 'Design'},
  {value: 'sales', label: 'Sales'},
  {value: 'marketing', label: 'Marketing'}
]

export default function Create() {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, details, dueDate);
  }

  return (
    <div className='create-form'>
      <h2 className="page-title">Create a new project</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input 
          required
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          <span>Project details:</span>
          <textarea 
          required
          type="text" 
          value={details} 
          onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </label>

        <label>
          <span>Project due date:</span>
          <input 
          required
          type="date" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)}
          />
        </label>

        <label>
          <span>Project category:</span>
          {/* category select here */}
        </label>

        <label>
          <span>Assign to:</span>
          {/* Assignee select here */}
        </label>

        <button className='btn'>Add Project</button>
      </form>
    </div>
  )
}
