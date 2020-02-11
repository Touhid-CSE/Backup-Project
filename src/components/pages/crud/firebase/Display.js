import React, {useState, useEffect} from 'react'
import firebase from '../../../../firebase'
import Insert from './Insert'
import UpdateDelete from './UpdateDelete'

const SORT_OPTIONS = {
    TIME_ASC: {column: 'time_seconds', direction: 'asc'},
    TIME_DESC: {column: 'time_seconds', direction: 'desc'},
    TITLE_ASC: {column: 'title', direction: 'asc'},
    TITLE_DESC: {column: 'title', direction: 'desc'}
}

const Display = () => {
    const [sortBy, setSortBy] = useState('TIME_ASC')
    const times = useTimes(sortBy)
    
    return (
        <div className="firebase-display">
            <h2>Time List</h2>
            <div>
                <label>Sort by:</label>{'  '}
                <select value={sortBy} onChange={e=>setSortBy(e.currentTarget.value)}>
                    <option value='TIME_ASC'>Time (fastest first)</option>
                    <option value='TIME_DESC'>Time (slowest first)</option>
                    <option disabled>----</option>
                    <option value='TITLE_ASC'>Title (a-z)</option>
                    <option value='TITLE_DESC'>Title (z-a)</option>
                </select>
            </div>
            <ol>
                {times.map(time => 
                    <li key={time.id}>
                        <UpdateDelete time={time}/>

                        {/* <div className='time-entry'>
                            {time.title}
                            <code className="time">{time.time_seconds} seconds</code>
                        </div>  */}
                    </li>
                )}   
            </ol>
            <Insert/>
        </div>
    )
}

function useTimes(sortBy = 'TIME_ASC'){
    const [times, setTimes] = useState([])

    useEffect(()=>{
        const unsubscribe = firebase
            .firestore()
            .collection('times')
            .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
            .onSnapshot(snapshot => {
                const newTimes = snapshot.docs.map( doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setTimes(newTimes)
            })
        return () => unsubscribe()
    },[sortBy])

    return times
}

export default Display
