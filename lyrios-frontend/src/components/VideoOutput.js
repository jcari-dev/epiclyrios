import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import YouTube from 'react-youtube'
const baseURL = 'https://www.googleapis.com/youtube/v3';
const search = '/search?part=snippet';
const maxResult = '&maxResults=12';
const keyWord = '&q=rihanna';
const type = '&type=video';
//API Key 1
// const key = '&key=AIzaSyD5inzevVk7CDg0ipn9yBTXWP_TtekfF0A'; 
//API Key 2
const key = '&key=AIzaSyAlEKircfin7Ratd0qMcJT50yknQLgk67c';
const topicId = '&topicId=04rlf'
const URL = `${baseURL}${search}${maxResult}${type}${key}${topicId}${keyWord}`;


function VideoOutput (props) {
    const [youtubeData, setYoutubeData] = React.useState(null)
    const getYoutube = async () => {
        const response = await Axios.get(
            URL
        )
        // setYoutubeData(response.data)
        setYoutubeData(response.data)
        // const youtubeFetch = await response.json();
        console.log(response.data)
       return 'response'
    }

    const randomVideo = async (searchTerm) => {
        const artist = ['beyonce','sza','ariana grande','jay-z','rihanna','cold play','snoop dogg','bruno mars','marc anthony','bad bunny','incubus',
        'a boggie wit da hoodie','tiesto','billy joel','john mayer','el alfa','omega','celia cruz','cardi b','miguel','leon bridges']
        let random = Math.round(Math.random()*artist.length)
        let randomArtist = artist[random]
        console.log(artist[random])
        const response = await Axios.get(
            `${baseURL}${search}${maxResult}${type}${key}${topicId}&q=${randomArtist}`
        )

        console.log(response.data.items)
        setYoutubeData(response.data.items)
    }
    // randomVideo
    React.useEffect(()=>{
        // getYoutube()
        randomVideo()
    },[])
    //to simply use youtubeData.items
    //1. Need form to get the YouTube Data
    //2. Display Youtube Data
    const randomNumber = Math.floor(Math.random()*10)
    return(
        <div>
            {/* <h2>{youtubeData ? <>  {youtubeData.items[0].snippet.title}  <YouTube videoId= {youtubeData.items[0].id.videoId} /> </> : 'No YouTube data was gathered'}</h2> */}
            <div>{youtubeData ? <><h4 className ="videoTitle">{youtubeData[randomNumber].snippet.title}</h4>  <YouTube videoId= {youtubeData[randomNumber].id.videoId}/> </> :
            'No YouTube data was gathered'}</div>
            {/* <h2>{youtubeData[0].snippet.title} </h2> */}
            <div className = 'videoMap'>
            {youtubeData ?   <>     
            {youtubeData.map((value, index)=>{
                console.log(value)
                return(
                    <div className = 'videoItem'>
                       <h4 className = 'videoTitle'>{value.snippet.title}</h4>  <YouTube videoId= {value.id.videoId} className = 'videoIndex'/>
                    </div>
                )

            })}</> : <p>No YouTube data was gathered</p>
            }  
            </div>
        </div>
      
    )

}


export default VideoOutput

