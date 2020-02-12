import React, {useState} from 'react'
import firebase from '../../../../firebase'
var storageRef =  firebase.storage().ref()

export default function ImageDelete({imagesInfo}) {

    const [deleteStatus, setDeleteStatus] = useState("")
    
    const handleDeleteImage = (imgFullPath) => {

        var desertRef = storageRef.child(imgFullPath);
        // Delete the file
        desertRef.delete().then(function() {
            alert('File deleted successfully')
            // window.location.reload(false);
            setDeleteStatus("File deleted successfully")

        }).catch(function(error) {
            // Uh-oh, an error occurred!
            alert('Uh-oh, an error occurred!')
            setDeleteStatus("Uh-oh, an error occurred!")
        });

    }
 

    return (
        <div>
            <h3> {deleteStatus} </h3>
            <table>
                <tr>
                    <th>Images</th>
                    <th>Action</th>
                </tr>
                <tbody>
                    {
                        imagesInfo.map(image =>(

                            <tr key={image.imgFullPath}>
                                <td>
                                    <img 
                                        src={image.imgUrl || 'https://via.placeholder.com/200x150'}
                                        alt='reload'
                                        height="150"
                                        width="200"
                                    />
                                </td>
                                <td><div><button onClick={() => handleDeleteImage(image.imgFullPath)}>Delete</button></div></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
