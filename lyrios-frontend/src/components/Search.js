import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import YouTube from 'react-youtube'


const baseURL = 'https://www.googleapis.com/youtube/v3';
const search = '/search?part=snippet';
const maxResult = '&maxResults=10';
const keyWord = '&q=house+music';
const type = '&type=video';
const key = '&key=AIzaSyD5inzevVk7CDg0ipn9yBTXWP_TtekfF0A';
const URL = `${baseURL}${search}${maxResult}${type}${key}${keyWord}`;

function Search (props) {
    const [youtubeData, setYoutubeData] = React.useState(null)
    const getYoutube = async (searchTerm) => {
        const response = await Axios.get(
            URL
        )
        // setYoutubeData(response.data)
        setYoutubeData(response.data)
        // const youtubeFetch = await response.json();
        console.log(response)
       return 'response'
    }
    useEffect(()=>{
        getYoutube('movies')
    },[])
    //to simply use youtubeData.items
    //1. Need form to get the YouTube Data
    //2. Display Youtube Data
    return(
        <div>
            <h1></h1>
            <h2>{youtubeData ? <>  {youtubeData.items[0].snippet.title}  <YouTube videoId= {youtubeData.items[0].id.videoId} /> </> : 'No YouTube data was gathered'}</h2>
        
            {/* <h2>{youtubeData && youtubeData.items[0].snippet.title}</h2> */}
            {/* <h2>{data('movies')}</h2> */}
        </div>
      
    )

}

// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video
// &key=YOURAPIKEY
export default Search

