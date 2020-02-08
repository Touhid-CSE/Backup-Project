import React, {useState} from 'react'
import firebase from '../../../../firebase'

export default function Insert() {
    const title = useFormInput([])
    const time = useFormInput([])

    
    const handleSubmit = (event) => {
        event.preventDefault()
        let newTitle = title.value
        let newTime = parseInt(time.value)
        firebase
            .firestore()
            .collection('times')
            .add({
                title: newTitle,
                time_seconds: newTime
            })
            .then(()=>{
                title.value = ''
                time.value = ''
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
               
                <h2>Add new Entry</h2>
                
                <div>
                    <label>Title:</label><br/>
                    <input 
                        type='text'
                        {...title}
                    />
                </div>
                <div>
                    <label>Time:</label> <br/>
                    <input 
                        type='text'
                        {...time}
                    />
                </div>
                <br/>
                <button>Add Entry Now</button>
            </form>
        </div>
    )
}

const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    function handleChange(event){
        event.target.type === 'checkbox' ? setValue(event.target.checked) : setValue(event.target.value)
    }

    return {
        value,
        onChange: handleChange
    }
}
