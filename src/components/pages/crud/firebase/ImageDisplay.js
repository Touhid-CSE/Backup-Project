import React, { Component } from 'react'
import firebase from '../../../../firebase'

var storageRef = firebase.storage().ref()

export default class ImageDisplay extends Component {
    
    constructor(){
        super()
        this.state = {
            imgFullPath: [],
            imgUrl: []
        }   
    }
    componentDidMount = () =>{

        const imageList = storageRef.child('images').listAll()

        imageList.then(snapshot => {
            let imgFullPath = []
            let imgUrl = []
            let items = snapshot.items
            items.forEach(itemRef => {
                //console.log(itemRef.fullPath)
                imgFullPath = [...imgFullPath, itemRef.fullPath]
                imgUrl = [...imgUrl, itemRef.getDownloadURL()]
            })
            //imgFullPath = Promise.all(imgFullPath).then(imgPath => imgPath)
            imgUrl = Promise.all(imgUrl).then(url => url)
            let imgData = Promise.all([imgFullPath, imgUrl]).then(myArray => myArray)

            return imgData
        
        }).then(imgData => {

            console.log(imgData)
            this.setState({
                ...this.state,
                imgFullPath: imgData[0],
                imgUrl: imgData[1]
            })

        })
        .catch(function(error) {
            // Uh-oh, an error occurred!
        }); 

    }
    render() {

        return (
            <div style={{display: 'flex',justifyContent: 'space-between', padding: '20px'}}>
                
                    {
                        this.state.imgUrl.map(url => (
                            <div style={{}} key={url}>
                                <img 
                                    src={url || 'https://via.placeholder.com/200x150'}
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

