import React, { Component } from 'react'
import firebase from '../../../../firebase'

var storageRef = firebase.storage().ref()

export default class ImageDisplay extends Component {
    
    constructor(){
        super()
        this.state = {
            isLoading: true,
            imagesInfo: [],
        }   
    }
    
    componentDidMount = () =>{

        const imageList = storageRef.child('images').listAll()

        imageList.then(snapshot => {
            let imagesInfo = []
            let items = snapshot.items

            items.forEach(itemRef => {
                let imgFullPath = itemRef.fullPath
                itemRef.getDownloadURL().then(function(imgUrl) {

                    return imgUrl

               }).then(url=>{
                   imagesInfo = [...imagesInfo, { imgFullPath, imgUrl: url}]
                   this.setState({
                       imagesInfo
                   }) 
                   
               })    
            })
            
        }).then(
            this.setState({
                isLoading: false
            })
        )
        .catch(function(error) {
            // Uh-oh, an error occurred!
        }); 

    }
    render() {

        return (
            <div style={{display: 'flex',justifyContent: 'space-between', padding: '20px'}}>
                
                    {
                        this.state.imagesInfo.map(image => (
                            <div style={{}} key={image.imgFullPath}>
                                <img 
                                    src={image.imgUrl || 'https://via.placeholder.com/200x150'}
                                    alt='reload'
                                    height="150"
                                    width="200"
                                />
                            </div>
                                    
                        ))
                    }
            </div>
        )
    }
}

