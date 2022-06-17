import {Avatar} from '../../components/Avatar'
import {useFirestore} from '../../hooks/useFirestore'
import {useAuthContext} from '../../hooks/useAuthContext'
import { useHistory } from 'react-router-dom'

import './Project.css'

export default function ProjectSummary({project:{name, details, dueDate, assignedUserList,createdBy:{id:createdById, displayName:createdDisplayName}, id:projId}}) {

    const {deleteDocument} = useFirestore('projects')
    const {user:{uid}} = useAuthContext()
    const {push} = useHistory()

    const handleClick = (e) => {
        deleteDocument(projId)
        push('/')
    }

  return (
    <div>
        <div className="project-summary">
            <h2 className="page-title">{name}</h2>
            <p>By {createdDisplayName}</p>
            <p className='due-date'>
                Project due by {dueDate.toDate().toDateString()}
            </p>
            <p className="details">
                {details}
            </p>
            <h4>Project is assigned to:</h4>
            <div className="assigned-users">
                {assignedUserList.map(user => (
                    <div key={user.id}>
                        <Avatar src={user.photoURL}/>
                    </div>
                ))}
            </div>
        </div>
            {uid === createdById && (
            <button className="btn" onClick={handleClick}>Mark as complete</button>
            )}
    </div>
  )
}
