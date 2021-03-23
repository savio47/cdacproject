import React from 'react';
import "./HomeScreen.css";
import requests from '../requests';
import Banner from '../Banner';
import Nav from '../Nav';
import Row from '../Row';

function HomeScreen() {
    return (
    <div className = "homeScreen">
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
      
      <Row  title="Trending Now"  fetchUrl={requests.fetchTrendingNow}  />
      <Row  title="Top Rated"  fetchUrl={requests.fetchTopRated}  />
      <Row  title="Popular Movies"   fetchUrl={requests.fetchPopular}  />
      <Row  title="Upcoming Movies"   fetchUrl={requests.fetchUpcoming}  />
      <Row  title="Action Movies"   fetchUrl={requests.fetchActionMovies}  />
      <Row  title="Comedy Movies"   fetchUrl={requests.fetchComedyMovies}  />
      <Row  title="Horror Movies"   fetchUrl={requests.fetchHorrorMovies}  />
      <Row  title="Romance Movies"   fetchUrl={requests.fetchRomanceMovies}  />
      <Row  title="Documentaries"   fetchUrl={requests.fetchDocumentaries}  />


    </div>
    );
}

export default HomeScreen ;
//require(HomeScreen).default; 
