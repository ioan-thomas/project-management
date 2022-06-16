import { useState } from "react"
import { timestamp } from "../../firebase/config"
import {useAuthContext} from '../../hooks/useAuthContext'
import { projectFirestore } from "../../firebase/config"


// styles
import './Project.css'

export default function ProjectComments(id) {
    const [newComment, setNewComment] = useState('');

    const {user:{displayName, photoURL}} = useAuthContext()


    const handleSubmit = e => {
        e.preventDefault();

        const commentToAdd = {
            displayName,
            photoURL,
            content: newComment,
            createdAt: timestamp.fromDate(new Date()),
            id: Math.random()
        }

    }

  return (
    <div className="project-comments">
        <h4>Project Comments</h4>
        <form className="add-comment" onSubmit={handleSubmit}>
            <label>
                <span>Add a new comment:</span>
                <textarea required 
                onChange={(e) => setNewComment(e.target.value)}
                value={newComment}
                ></textarea>
            </label>
            <button className="btn">Add comment</button>
        </form>
    </div>
  )
}
