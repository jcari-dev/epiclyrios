import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import YouTube from 'react-youtube'
import UserOutput from '../components/UserOutput';
import '../index.css';  

function ShowFavVideo () {
    let getinfo = async() => {


        let response =  await fetch('http://localhost:4000/favsong')

        let data = await response.json();

        return console.log(data)
        

    }
    
    // const lyricsArray = [
    //     "https://api.happi.dev/v1/music/artists/4862/albums/153808/tracks/13227248/lyrics",
    //     "https://api.happi.dev/v1/music/artists/5130/albums/57340/tracks/13202642/lyrics",
    //     "https://api.happi.dev/v1/music/artists/917/albums/68395/tracks/1117145/lyrics",
    //     "https://api.happi.dev/v1/music/artists/2807/albums/219362/tracks/3452831/lyrics",
    //     "https://api.happi.dev/v1/music/artists/5472/albums/32903/tracks/546400/lyrics"
    // ]
    // const newLink = "https://api.happi.dev/v1/music/artists/4862/albums/153808/tracks/13227248/lyrics"
const songtest = 'Tu Amor Me Hace Bien Marc Anthony'
//YouTube API
const baseURL = 'https://www.googleapis.com/youtube/v3';
const search = '/search?part=snippet';
const maxResult = '&maxResults=1';
const keyWord = '&q=rihanna';
const type = '&type=video';
//API Key 1
// const key = '&key=AIzaSyD5inzevVk7CDg0ipn9yBTXWP_TtekfF0A'; 
// API Key 2
const key = '&key=AIzaSyAjtiGq13vuyxMjQfPS7Ngj0Mny-7ol3GM'
//API Key 3
// const key = '&key=AIzaSyAlEKircfin7Ratd0qMcJT50yknQLgk67c';
const topicId = '&topicId=04rlf';
const [showYoutubeData, setShowYoutubeData] = React.useState(null)
const getYoutubeData = async (searchTerm) => {
    const response = await Axios.get(
        `${baseURL}${search}${maxResult}${type}${key}${topicId}&q=${searchTerm}`
    )
    setShowYoutubeData(response.data)
    // setSearchData(response.data)
    // const youtubeFetch = await response.json();
    console.log(response.data)
    // SearchOutput(response.data)
    return 'response'

}
//Lyrics API
const songArray = []
//Lyrics API Call - Happi.dev/docs/music
const [showlyricsData, setShowLyricsData] = React.useState([null])
const baseLyricsURL = "https://api.happi.dev/v1/music?";
const hasLyrics = "&lyrics=1";
const limit = "&limit=";
const lyricsType = "&type=";
//api key 1
// const apiLyricsKey = "&apikey=6d400baq5E0tR7e8ItaBRyijAyJVpD9qLDYxcli0AwBHLoMayAPtZaNr";   
//api key 2
const apiLyricsKey = "&apikey=78e089Xdo4n4bW6uzrz5HaYLJ3E801KK7uQ0LQlJFsZ7ROy1mr0ZDyjR";   

const lyricsArrayNew = ['That La, La, La Rihanna','Across The Room ODESZA']

    const getLyricsArray = async (searchTerm) => {
        if(searchTerm !== undefined){
        try{
        const response = await Axios.get(
        `${baseLyricsURL}${limit}${apiLyricsKey}${lyricsType}${hasLyrics}&q=${searchTerm}`
        )
        console.log(searchTerm)
        console.log(response.data)
        console.log(response.data.result[0].api_lyrics)
        // getLyricsData(response.data.result[0].api_lyrics)
        const responseLyrics = await Axios.get(
            response.data.result[0].api_lyrics + '?' + apiLyricsKey
        )
        console.log(responseLyrics)
        setShowLyricsData(responseLyrics.data)
        console.log(responseLyrics.data)
        console.log(responseLyrics.data.result.lyrics)
        getYoutubeData(responseLyrics.data.result.track + ' ' + responseLyrics.data.result.artist)
        } catch (error) {
            console.log('no lyrics found')
            // getYoutubeData(searchTerm)
            setShowLyricsData(null)
        }
        } else setShowLyricsData(null)
    }
////Test Data, ask Bryan for help on Sunday if he is available
    // const getLyricsData = async (data) => {
    //     console.log(data)
    //     const response = await Axios.get(
    //         data + '?' + apiLyricsKey
    //     )
    //     console.log(response.data)
    //     console.log(response.data.result.lyrics)
    //     console.log(response.data.result.track + ' ' + response.data.result.artist )
    //     setLyricsData(response.data)
    //     // getYoutubeData(response.data.result.track + ' ' + response.data.result.artist)
    // }
    // for(let i = 0; i < lyricsArrayNew.length; i ++){
    //     getLyricsArray(lyricsArrayNew[i])
    // }

    // lyricsArrayNew.map((value,index)=>{
        
    //     console.log(lyricsData)
    //     return(
    //         <div>
    //         {getLyricsArray(value)}
    //         <h1>hi</h1>
    //         </div>
    //     //    <h1>{lyricsData ? lyricsData.result.lyrics : '' }</h1>

    //         //            <div>{data.lyricsData ? <> 
    //         // <p className = "lyrics">{data.lyricsData.result.lyrics}</p>
    //         // </>: 'No Lyrics Data Was Found'}</div>
    //     )
 
    // })
    React.useEffect(()=>{
        getLyricsArray(songtest)
        // randomVideo(randomArtist)
        console.log('running use effect')
    },[])
    // const asyncfunction = async (data) => {
    //     const testData = async (search) => {
    //     const response = await Axios.get(
    //                 search + '?' + apiLyricsKey
    //     )
    //     console.log(response.data)
    //     if(!lyricsArrayNew.includes(response.data)) await lyricsArrayNew.push(response.data)
    //         // console.log(console)
    //         setLyricsData(response.data) 
    //     }
    //     const datacall = await data.map((value, index)=>{
    //     console.log(value)
            
    //     testData(value)
        

    //     })
    //     console.log(datacall)
    //     // datacall
    //     // const array = await 
    //     console.log(lyricsArrayNew)

    // }

    // asyncfunction(lyricsArray)
    // console.log(lyricsArrayNew)

    // const getLyricsData = async (data) => {
    //     // console.log(data)

    //     const response = await Axios.get(
    //         data + '?' + apiLyricsKey
    //     )
    //     // return console.log(response.data)
    //     console.log(response.data)
    //    if(!lyricsArrayNew.includes(response.data)) await lyricsArrayNew.push(response.data)
       
    //     // console.log(response.data.result.lyrics)
    //     // console.log(response.data.result.track + ' ' + response.data.result.artist )
    //     setLyricsData(response.data) //
    //     // getYoutubeData(response.data.result.track + ' ' + response.data.result.artist)
    // }




    // lyricsArray.map((value,index)=>{
    //     getLyricsData(value)
    // })
    // const getArray = (data) => {

    //     for (let i = 0; i < data.length; i++){
    //         console.log(data[i])
    //         // getLyricsData(data[i])
    //     }
    //     // setLyricsData(lyricsArrayNew)
    //     console.log(lyricsArrayNew)
    //     return(
    //         <div>
    //         {/* {console.log(lyricsArrayNew[0].)}
    //         <h2>{lyricsArrayNew[0].result.album}</h2> */}
    //         <h1>Hello</h1>
    //         {/* {lyricsArrayNew.map((value,index)=>{
    //         return(
    //         <p>test</p>
    //         )
    //         })} */}
    //     </div>
    //     )
    // }
    
return (
	<div>
	<h1>Your Favorite Song Below</h1>
    
    {/* <div>{asyncfunction(lyricsArray)}</div> */}
      {/* {  lyricsArrayNew ? console.log(lyricsArrayNew[0]) : ''} */}
    <div>  
    </div>
    {showlyricsData ?
    <>{ showYoutubeData  && <UserOutput youtubeData={showYoutubeData} lyricsData={showlyricsData} />} </>:
    <h3 className = 'boldUser'>Whoops, it appears you haven't signed in and picked a new favorite song! Please navigate to the home page and click add to favorites once signed in!</h3>
    }
  
     {/* {lyricsArray.map((value, index)=>{
        console.log(value)
        getLyricsData(value)
        return(
            <h1>hi</h1>

            // <p>{lyricsData ? <p className="lyrics">{lyricsData.result.lyrics}</p> : 'No Lyrics Data Was Found'}</p>
        )

    })} */}
    <button onClick={getinfo}>test</button>
	</div>
)
};

export default ShowFavVideo ;
