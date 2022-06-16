import { projectFirestore } from "../firebase/config"
import { useEffect, useState } from "react"

export function useDocument(collection, id) {
    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);

    // realtime data

    useEffect(() => {
        const ref = projectFirestore.collection(collection).doc(id)

        const unsub = ref.onSnapshot(snapshot => {
            if(snapshot.data()){
                setDocument({...snapshot.data(), id: snapshot.id})
                setError(null)  
            } 
            else {
                setError('No such document exists...')
            }

        }, err => {
            console.log(err.message);
            setError('failed to get document')
        })

        return () => unsub();

    }, [collection, id])

    return {document, error}
}
