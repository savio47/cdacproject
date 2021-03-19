import React from 'react';
import './Menu.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';


function Menu() {
  return (
    <div className="menu">
       
      {/*Nav-Bar */}
      <Nav />
    {/* Banner */}
    <Banner />
     


      {/* Different Rows*/}
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow = {true} // By default is it true so we can remove ={true}
      />
      <Row 
        title="Trending Now" 
        fetchUrl={requests.fetchTrendingNow}
      />
      <Row 
        title="Top Rated" 
        fetchUrl={requests.fetchTopRated}
      />
      <Row 
        title="Popular Movies" 
        fetchUrl={requests.fetchPopular}
      />
    </div>
  );
}

export default Menu;
