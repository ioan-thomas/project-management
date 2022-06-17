import ProjectList from '../../components/ProjectList'
import { useCollection } from '../../hooks/useCollection'
import { useState } from 'react'
import {useAuthContext} from '../../hooks/useAuthContext'

// styles
import './Dashboard.css'
import ProjectFilter from './ProjectFilter'

export default function Dashboard() {
  const {documents, error} = useCollection('projects')
  const [currentFilter, setCurrentFilter] = useState('all')
  const {user:{uid}} = useAuthContext()

  const changeFilter = newFilter => {
    setCurrentFilter(newFilter);
  }

  const projects = documents?.filter((document) => {
    switch (currentFilter){
      case 'all':
        return true
      case 'mine':
        let assignedToMe = false
        document.assignedUserList.forEach(user => {
          if (uid === user.id) assignedToMe = true
        })
        return assignedToMe
      case 'development':
      case 'design':
      case 'marketing':
      case 'sales': 
        return document.category === currentFilter
      default:
        return true;
    }
  })

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && <ProjectFilter currentFilter={currentFilter} changeFilter={changeFilter} />}
      {projects && <ProjectList projects={projects} />}
    </div>
  )
}
