import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import '../index.css';  


function Edit () {

    const [infoArray, setInfoArray] = React.useState(null)
    let getinfo = async() => {
        console.log(localStorage.getItem('SessionEmail'))

        let response =  await fetch ('http://localhost:4000/favsong')


        let data = await response.json();
        const sessionData = []
        data.forEach((value)=>{
            if(value.email === localStorage.getItem('SessionEmail')){
                sessionData.push(value)
            }
        })

        setInfoArray(sessionData)
        
        return console.log(sessionData)
    }
    const editFavorite = async () => {
    // console.log(data[0]._id)
    console.log(infoArray[0]._id)
    // await Axios.put(`http://localhost:4000/favsong/edit/${infoArray[0]._id}`, {whyFavorite: 'No Reason'})
    fetch(`http://localhost:4000/favsong/edit/${infoArray[0]._id}`, {
        method: 'PUT',
        body: JSON.stringify({
            whyFavorite: 'Doing it again'
  
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    })
    return console.log('Updating Why I Love This Song')

    }
    React.useEffect(()=>{
        getinfo()
        console.log('running use effect')
    },[])
    return(
        <div>
        <br/>

        <h1>Let Us Know Why You Love The Song Below :)</h1>
        <button onClick={editFavorite}>test</button>
        </div>
    )
}

export default Edit