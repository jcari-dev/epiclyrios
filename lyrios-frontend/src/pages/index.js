import React from 'react';
import VideoOutput from '../components/VideoOutput';
import SearchBar from '../components/SearchBar';
import '../index.css';
const Home = () => {
return (
	<div>
       <div className = "indexTop">
	     <h1 className = "Heading">Welcome to Lyrios</h1>
         <h3>A True Music Experience. Submit Your Song Search Below</h3>
       </div>
	   <SearchBar/>
	   <VideoOutput/>
    </div>
  );
};

export default Home;