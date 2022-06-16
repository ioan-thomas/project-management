

// styles
import './ProjectList.css'

export default function ProjectList({projects}) {
  return (
    <>
        {projects.length === 0 && <p>No projects here yet!</p>}
        {projects.map(doc => (
        <p key={doc.id}>{doc.name}</p>
        ))}
    </>
  )
}
