import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import YouTube from 'react-youtube'
import SearchBar from '../components/SearchBar'
import SearchOutput from '../components/SearchOutput'
import '../index.css';  

function TestPlayList () {
    const lyricsArray = [
        "https://api.happi.dev/v1/music/artists/4862/albums/153808/tracks/13227248/lyrics",
        "https://api.happi.dev/v1/music/artists/5130/albums/57340/tracks/13202642/lyrics",
        "https://api.happi.dev/v1/music/artists/917/albums/68395/tracks/1117145/lyrics",
        "https://api.happi.dev/v1/music/artists/2807/albums/219362/tracks/3452831/lyrics",
        "https://api.happi.dev/v1/music/artists/5472/albums/32903/tracks/546400/lyrics"
    ]

//YouTube API

//Lyrics API
    const artist = ['beyonce','sza','ariana grande','jay-z','rihanna','cold play','snoop dogg','bruno mars','marc anthony','bad bunny','incubus',
    'tiesto','billy joel','john mayer','el alfa','omega','celia cruz','cardi b','miguel','leon bridges']
    let random = Math.round(Math.random()*artist.length)
    let randomArtist = artist[random]


//Lyrics API Call - Happi.dev/docs/music
const [lyricsData, setLyricsData] = React.useState(null)
const baseLyricsURL = "https://api.happi.dev/v1/music?";
// const lyricsQ = "q=" + randomArtist
const hasLyrics = "&lyrics=1";
const limit = "&limit=";
const lyricsType = "&type=";
const apiLyricsKey = "&apikey=6d400baq5E0tR7e8ItaBRyijAyJVpD9qLDYxcli0AwBHLoMayAPtZaNr";   

const lyricsArrayNew = []
    
    const getLyricsData = async (data) => {
        // console.log(data)
        const response = await Axios.get(
            data + '?' + apiLyricsKey
        )
        // return console.log(response.data)
        console.log(response.data)
       if(!lyricsArrayNew.includes(response.data)) lyricsArrayNew.push(response.data)
        // console.log(response.data.result.lyrics)
        // console.log(response.data.result.track + ' ' + response.data.result.artist )
        // setLyricsData(response.data) //
        // getYoutubeData(response.data.result.track + ' ' + response.data.result.artist)
    }

    const getArray = (data) => {

        for (let i = 0; i < data.length; i++){
            console.log(data[i])
            getLyricsData(data[i])
            
        }
        console.log(lyricsArrayNew)
        return(
            <h1>Hello</h1>
        )
    }
    
return (
	<div>
	<h1>Personal Video PlayList</h1>
    <div>{getArray(lyricsArray)}</div>
    <div>  
    {lyricsArrayNew.map((value,index)=>{
        return(
        <p>test</p>
        )

    })}
    </div>

     {/* {lyricsArray.map((value, index)=>{
        console.log(value)
        getLyricsData(value)
        return(
            <h1>hi</h1>

            // <p>{lyricsData ? <p className="lyrics">{lyricsData.result.lyrics}</p> : 'No Lyrics Data Was Found'}</p>
        )

    })} */}

	</div>
)
};

export default TestPlayList;