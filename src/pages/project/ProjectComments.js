import { useState } from "react"
import { timestamp } from "../../firebase/config"
import {useAuthContext} from '../../hooks/useAuthContext'
import { useFirestore } from "../../hooks/useFirestore"
import {Avatar} from '../../components/Avatar'

// styles
import './Project.css'

export default function ProjectComments({project:{id, comments}}) {
    
    const {updateDocument, response:{error, isPending}} = useFirestore('projects')
    const [newComment, setNewComment] = useState('')
    const {user:{displayName, photoURL}} = useAuthContext()


    const handleSubmit = async e => {
        e.preventDefault();

        const commentToAdd = {
            displayName,
            photoURL,
            content: newComment,
            createdAt: timestamp.fromDate(new Date()),
            id: Math.random()
        }

        await updateDocument(id, {
            comments: [...comments, commentToAdd]
        })

        if(!error) {
            setNewComment('')
        }
    }
    
    

  return (
    <div className="project-comments">
        <h4>Project Comments</h4>
        <ul>
            {comments.length > 0 && comments.map(comment => (
                <li key={comment.id}>
                    <div className="comment-author">
                        <Avatar src={comment.photoURL}/>
                        <p>{comment.displayName}</p>
                    </div>
                    <div className="comment-date">
                        <p>date here</p>
                    </div>
                    <div className="comment-content">
                        <p>{comment.content}</p>
                    </div>
                </li>
            ))}
        </ul>
        <form className="add-comment" onSubmit={handleSubmit}>
            <label>
                <span>Add a new comment:</span>
                <textarea required 
                onChange={(e) => setNewComment(e.target.value)}
                value={newComment}
                ></textarea>
            </label>
            {!isPending && <button className="btn">Add comment</button>}
            {isPending && <button className="btn">Add comment</button>}
        </form>
    </div>
  )
}
