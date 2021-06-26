import React from 'react';
import YouTube from 'react-youtube'
import Axios from 'axios'


const UserOutput = (data) => {
    console.log(data.userData)
    console.log(data.userData[0])
    console.log(data.userData[0]._id)
    const deleteFavorite = async () => {
    await Axios.delete(`http://localhost:4000/favsong/${data.userData[0]._id}`)
    console.log('Deleting favorite song')
    window.location.reload();
    }

    // let getinfo = async() => {
    //     let response =  await Axios.get('http://localhost:4000/favsong')
    //     const userFavs = []
    //     response.data.forEach((elm)=>{
    //         if (elm.email === localStorage.getItem('SessionEmail')){
    //             userFavs.push(elm)
    //         }
    //     })
    //     const newFavs = userFavs.map((elm)=>{
    //         return(
    //             <div>
    //                 <p>{elm.favoriteSong}</p>
    //                 <button onClick={() => deleteFavorite(elm._id)}>Delete Favorite</button>
    //             </div>
    //         )
    //     })
    //     setMyFavs(newFavs)
    // }


    console.log(data.youtubeData)
    console.log(data.youtubeData.items[0].snippet.title)
    console.log(data.lyricsData)
    // console.log(lyricsData)
    return(
       <div>
            
            {/* <YouTube videoId= {youtubeData.results.items[0].id.videoId} /> */}
            <div className = 'videoItem'>
            <div>{data.youtubeData ? <><h4 className ="videoTitle">{data.youtubeData.items[0].snippet.title}</h4>  <YouTube videoId= {data.youtubeData.items[0].id.videoId}/> </> :
            'No YouTube data was gathered'}
           
            </div>
            <br/>

            {data.lyricsData ? <> <a href = '/'><button className = "button is-info" >Edit Song</button></a> <button className = "button is-danger" onClick={deleteFavorite} >Delete Song</button></>: ''}    
            <div>{data.lyricsData ? <> 
            <br/>
            <h2 className = 'bold'>To edit your favorite song simply click edit to search for a new favorite tune!</h2>
            <p className = "lyrics">{data.lyricsData.result.lyrics}</p>
            </>: 'No Lyrics Data Was Found'}</div>
            {/* {youtubeData ?   <>     
            {youtubeData.results.item.map((value, index)=>{
                console.log(value)
                return(
                    <div className = 'videoItem'>
                       <h4 className = 'videoTitle'>{value.snippet.title}</h4>  <YouTube videoId= {value.id.videoId} className = 'videoIndex'/>
            
                    </div>
                )

            })}</> : <p>Please submit a search request.</p>
            }   */}

            </div> 
        </div>
      
    )

}


export default UserOutput