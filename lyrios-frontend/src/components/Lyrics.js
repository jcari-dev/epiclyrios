import React, { useState, useEffect } from 'react';
import Axios from 'axios'

//need to require cors in server.js and app.use middleware
function Lyrics (props) {
const baseURL = "https://api.happi.dev/v1/music?";
const q = "&q=ariana%20grande%20needy";
const hasLyrics = "&lyrics=1";
const limit = "&limit=";
const type = "&type=";
const apiKey = "&apikey=6d400baq5E0tR7e8ItaBRyijAyJVpD9qLDYxcli0AwBHLoMayAPtZaNr";
const URL = `${baseURL}${q}${limit}${apiKey}${type}${hasLyrics}`;

    //function to make api call
    const getData = async (searchTerm) => {
        // console.log(URL)
        //make the call to get a response
        const response = await Axios.get(
            URL
        )
        //set lyrics state to response
        getLyricsData(response.data.result[0].api_lyrics)
        // console.log(response)
       return 'response'
    }
        
    const [lyricsData, setLyricsData] = React.useState(null)
    const getLyricsData = async (data) => {
        const response = await Axios.get(
            data +'?'+apiKey
        )
        setLyricsData(response.data.result.lyrics)
        return 'response'
    }
    //get only after page is rendered
    useEffect(()=>{
        getData('song')
    }, [])
    //return statement from the call to render to page
    return(
        <div>
            <h3>{lyricsData ? <>  {lyricsData}  </> : 'No Lyrics data was gathered'}</h3>
         </div>
    )
}

export default Lyrics;