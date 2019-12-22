import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './app.css';

class Home extends React.Component {
  render() {
    return  <div> 

<h1 class="mx-10 my-2 font-bold"> PLAYLIST HUB </h1>
<h2 class="mx-10 text-xs"> Find your next favorite playlists</h2>
<a href="https://open.spotify.com/user/jimstella42/playlist/6I6g9yQiWATQ0aWicxIE4N?si=ih2PSSwhQb2I-puvqLKmJQ" class="block mt-1 text-lg leading-tight font-semibold text-gray-900">
<div class="md:flex bg-gray-300 m-16">
  <div class="md:flex-shrink-0">
    <img class="rounded-lg md:w-56" src="https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" alt="Woman paying for a purchase"></img>
  </div>
  <div class="mt-4 md:mt-0 md:ml-6">
    <p class="block mt-1 text-lg leading-tight font-semibold text-gray-900">1972 Favorites</p>
    <p class="mt-1 text-gray-600 text-xs">Hottest track from the 1970s!</p>
  </div>
</div>
</a>
 </div>
  }
}
export default Home