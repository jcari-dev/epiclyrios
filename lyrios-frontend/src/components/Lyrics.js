import React from 'react';


//need to require cors in server.js and app.use middleware


const Data = (props) => {

const baseURL = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&callback=callback";
const searchTrack = "&q_track=supermodel";
const searchArtist = "&q_artist=sza"
const apiKey = "&apikey=9901cd7566e5b6558969d80850b2fc99";
const URL = `${baseURL}${searchTrack}${searchArtist}${apiKey}`;
//state to hold data
const [lyrics, setLyrics] = React.useState('null')
//function to make api call
const getLyrics = async () => {
    console.log(URL)
    //make api call to get response
    const response = await fetch(URL);
    //turn response into js object
    const data = await response.json();
    //set lyrics state to data
    setLyrics(data)
    console.log(data)
}
//get lyrics only after page is rendered
React.useEffect(() => {
    getLyrics();
});
//return data and render to page
const loaded = () => {
    return (
        <div>
            {/* <h2>{lyrics.body.lyrics.lyrics_body}</h2> */}
        </div>
    )
}
//if data arrives, return lyrics, if not return the second return statement
const loading = () => {
    return <h1>Loading...</h1>
};
    return lyrics ? loaded() : loading();
}

export default Data;

// function Lyrics (props) {
//     const [lyricsData, setLyricsData] = React.useState(null)
//     const getLyrics = async (searchTerm) => {
//         const response = await Axios.get(
//             URL
//         )
//         setLyricsData(response)
//         console.log(response)
//        return 'response'
//     }
//     useEffect(()=>{
//         getLyrics('song')
//     },[])
//     console.log(lyricsData)
//     return(
//         <div>
//             {/* <h2>{<Lyrics getLyrics = {lyricsData.body.lyrics.lyrics_body} />}</h2> */}
//             <h2>{lyricsData ? <>  {lyricsData.body.lyrics.lyrics_body}  </> : 'No Lyrics data was gathered'}</h2>
//          </div>
      
//     )

// }

