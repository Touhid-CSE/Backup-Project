import React from 'react'
import firebase from '../../../../firebase'

export default function UpdateDelete({time}) {

    const [newTitle, setNewTitle] = React.useState(time.title)
    const [newTime, setNewTime] = React.useState(time.time_seconds)

    const handleDelete = (event) => {
        firebase
            .firestore()
            .collection('times')
            .doc(time.id)
            .delete()
            .then(() => {
                alert("Data Deleted")
            })
    }

    const handleUpdate = (event) => {
        firebase
            .firestore()
            .collection('times')
            .doc(time.id)
            .set({...time, title: newTitle, time_seconds: newTime})
            .then(() => {
                alert("Data Updated")
            })

    }

    return (
            <div className='time-entry'>
                <div>
                    <input value={newTitle} onChange={e => setNewTitle(e.target.value)}/>
                    <input style={{width: '15%'}} value={newTime} onChange={e => setNewTime(e.currentTarget.value)}/>
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
               
            </div> 

    )
}
