import React, {useState, useEffect} from 'react'
import firebase from '../../../../firebase'
// import ImageDelete from './ImageDelete'

var storageRef = firebase.storage().ref()

export default function ImagesHook() {

    const [imagesInfo, setImagesInfo] = useState([])
    
    const handleDeleteImage = (imgFullPath) => {

        var desertRef = storageRef.child(imgFullPath);
        // Delete the file
        desertRef.delete().then(function() {
            alert('File deleted successfully')
            // for re-render page after delete
            getImageData()

        }).catch(function(error) {
            // Uh-oh, an error occurred!
            alert('Uh-oh, an error occurred!')
        });

    }

    const getImageData = () => {
        var imageList = storageRef.child('images').listAll()
        imageList.then(snapshot => {
            let imageData = []
            let items = snapshot.items
            items.forEach(item => {
                let imgFullPath = item.fullPath
                item.getDownloadURL().then(imgUrl => {
                    imageData = [...imageData, {imgFullPath, imgUrl}]
                    setImagesInfo(imageData)
                })

            })
        }).catch(function(error) {
            // Uh-oh, an error occurred!
        });
    }

    useEffect(()=>{

        getImageData()
        
    },[])



    return (
        <div>     
             
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
