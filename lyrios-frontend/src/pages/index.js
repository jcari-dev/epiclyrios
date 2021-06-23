import React from 'react';
import Axios from 'axios'
import YouTube from 'react-youtube'
import SearchBar from '../components/SearchBar'
import SearchOutput from '../components/SearchOutput'
import '../index.css';



function GetSearch () {
    const baseURL = 'https://www.googleapis.com/youtube/v3';
    const search = '/search?part=snippet';
    const maxResult = '&maxResults=12';
    const keyWord = '&q=rihanna';
    const type = '&type=video';
    //API Key 1
    // const key = '&key=AIzaSyD5inzevVk7CDg0ipn9yBTXWP_TtekfF0A'; 
    // API Key 2
    const key = '&key=AIzaSyAjtiGq13vuyxMjQfPS7Ngj0Mny-7ol3GM'
    //API Key 3
    // const key = '&key=AIzaSyAlEKircfin7Ratd0qMcJT50yknQLgk67c';
    const topicId = '&topicId=04rlf';

    
    const [youtubeData, setYoutubeData] = React.useState(null)
    const [searchData, setSearchData] = React.useState(null)
    const getData = async (searchTerm) => {
        const response = await Axios.get(
            `${baseURL}${search}${maxResult}${type}${key}${topicId}&q=${searchTerm}`
        )
        setYoutubeData(response.data)
        // setSearchData(response.data)
        // const youtubeFetch = await response.json();
        console.log(response.data)
        // SearchOutput(response.data)
        return 'response'

    }
    const songArray = []
    const randomVideo = async (searchTerm) => {
        const artist = ['beyonce','sza','ariana grande','jay-z','rihanna','cold play','snoop dogg','bruno mars','marc anthony','bad bunny','incubus',
        'a boggie wit da hoodie','tiesto','billy joel','john mayer','el alfa','omega','celia cruz','cardi b','miguel','leon bridges']
        let random = Math.round(Math.random()*artist.length)
        let randomArtist = artist[random]
        console.log(artist[random])
        const response = await Axios.get(
            `${baseURL}${search}${maxResult}${type}${key}${topicId}&q=${randomArtist}`
        )

        console.log(response.data)
        setYoutubeData(response.data)
    }
 
        
    React.useEffect(()=>{
        // getData()
        randomVideo()
        console.log('running use effect')
    },[])


    return(
        <div>
        <br/>
            <div className = "indexTop">
                <h1 className = "Heading">Welcome to Lyrios</h1>
                <h3>A True Music Experience. Submit Your Song Search Below</h3>
            </div>
            <SearchBar songSearch={getData}/>
            {youtubeData && <SearchOutput results = {youtubeData}/>}
        </div>
    )
}

export default GetSearch