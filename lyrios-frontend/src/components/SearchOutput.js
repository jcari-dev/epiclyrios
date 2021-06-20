import React from 'react';
import YouTube from 'react-youtube'



const SearchOutput = (youtubeData) => {
    console.log(youtubeData)
    return(
       <div>
          
            {/* <YouTube videoId= {youtubeData.results.items[0].id.videoId} /> */}
            <div className = 'videoMap'>
            {youtubeData ?   <>     
            {youtubeData.results.map((value, index)=>{
                console.log(value)
                return(
                    <div className = 'videoItem'>
                       <h4 className = 'videoTitle'>{value.snippet.title}</h4>  <YouTube videoId= {value.id.videoId} className = 'videoIndex'/>

                    </div>
                )

            })}</> : <p>Please submit a search request.</p>
            }  
            </div> 
        </div>
      
    )

}


export default SearchOutput