import React from 'react'
import firebase from '../../firebase'

export default function CrudFirebase() {
    return (
        <div>
            <h2>Time List</h2>
            <div>
                <label>Sort by:</label>{'  '}
                <select>
                    <option>Time (fastest first)</option>
                    <option>Time (slowest first)</option>
                    <option disabled>----</option>
                    <option>Title (a-z)</option>
                    <option>Title (z-a)</option>
                </select>
            </div>
            <ol>
                <li>
                    <div className='time-entry'>
                        My Amazing entry title
                        <code className="time">18 seconds</code>
                    </div> 
                </li>
                <li>
                    <div className='time-entry'>
                        My Amazing entry title
                        <code className="time">18 seconds</code>
                    </div> 
                </li>
                <li>
                    <div className='time-entry'>
                        My Amazing entry title
                        <code className="time">18 seconds</code>
                    </div> 
                </li>
            </ol>
        </div>
    )
}
