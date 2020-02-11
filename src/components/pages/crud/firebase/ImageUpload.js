import React, {useState} from 'react'
import firebase from '../../../../firebase'

export default function ImageUpload() {

    const [image, setImage] = useState(null)
    const [imageURL, setImageURL] = useState()
    const [progress, setProgress] = useState(0)

    const handleChange = (e) => {
        const file = e.target.files[0]
        setImage(file)
    }

    const handleUpload = (e) => {
        if(image){
            var storageRef = firebase.storage().ref()
            // Upload file and metadata to the object 'images/mountains.jpg'
            var uploadTask = storageRef.child('images/' + image.name).put(image);

            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function(snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                let prgrs = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                console.log('Upload is ' + prgrs + '% done');
                setProgress(prgrs)


                switch (snapshot.state) {

                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;

                    default: console.log('default message');
                }
            }, 
            
            function(error) {

            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {

                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    alert("User doesn't have permission to access the object")
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    alert("User canceled the upload")
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    alert("Unknown error occurred, inspect error.serverResponse")
                    break;
                
                default: console.log('default message');

            }
            }, 
            function() {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    setImageURL(downloadURL)
                    console.log('File available at', downloadURL);
                });
            });
            
        }else alert('Please select a file')
    }

    return (
        <div style={{width: '30%', margin: 'auto', alignItems: 'center', marginTop: '30px'}}>
            <progress value={progress} max='100'/><br/>
            <input 
                style={{WebkitAppearance: 'none'}} 
                type='file' 
                onChange={handleChange}
                accept=".jpg, .jpeg, .png"
            />
            <button onClick={handleUpload}>Upload</button>
            <br></br>
            <img
                src={imageURL || 'https://via.placeholder.com/400x300'}
                alt='reload'
                height="300"
                width="400"
            />
        </div>
    )
}
