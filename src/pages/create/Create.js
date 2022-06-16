import { useEffect, useState } from 'react';
import Select from 'react-select'
import { timestamp } from '../../firebase/config';
import {useCollection} from '../../hooks/useCollection'
import {useAuthContext} from '../../hooks/useAuthContext'

// styles
import './Create.css'

const categories = [
  {value: 'development', label: 'Development'},
  {value: 'design', label: 'Design'},
  {value: 'sales', label: 'Sales'},
  {value: 'marketing', label: 'Marketing'}
]

export default function Create() {

  const { documents } = useCollection('users');
  const [users, setUsers] = useState([]);
  const { user } = useAuthContext()

  // form field values
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [ formError, setFormError ] = useState(null);

  useEffect(() => {
    const options = documents?.map(user => {
      return {value: user, label: user.displayName}
    })

    setUsers(options)

  }, [documents])

  const handleSubmit = e => {
    e.preventDefault();
    setFormError(null);

    if(!category){
      setFormError('Please select a project category');
      return 
    }

    if (assignedUsers.length < 1){
      setFormError('Please assign assign at least one user to the project');
      return
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid
    }

    const assignedUserList = assignedUsers.map(user => {
      return {
        displayName: user.value.displayName, 
        photoURL: user.value.photoURL,
        id: user.value.id}
    })

    const project = {
      name, 
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy,
      assignedUserList
    }

    console.log(project);
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
            <Select 
            options={categories}
            onChange={option => setCategory(option)}/>
        </label>

        <label>
          <span>Assign to:</span>
            <Select 
            options={users}
            onChange={option => setAssignedUsers(option)}
            isMulti
            />
        </label>

        <button className='btn'>Add Project</button>
        {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  )
}
