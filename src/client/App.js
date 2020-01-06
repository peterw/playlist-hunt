import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./app.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table_dates: []
    };
  }
  getAllPlaylists() {
    fetch("/api/getAllPlaylists")
      .then(response => response.json())
      .then(tables => this.setState({ table_dates: tables.content }));
    console.log(this.state.table_dates);
  }
  componentWillMount() {
    this.getAllPlaylists();
  }
  render() {
    return (
      <div className="bg-orange-100">
        <div className="mx-64">
          <div class="absolute text-white my-20 mx-10">
            <span className="flex font-bold text-4xl"> PLAYLIST Hunt 🎶</span>
            <span className="flex text-xl"> Find your next favorite playlist. </span>
          </div>
          <img className="h-1/2 rounded-lg shadow-md" src="/public/music_cover.jpg" />
        </div>
        <span className="text-xl text-center"> *Updated daily (hopefully!)*</span>

        {/* this successfully gets the objects in reverse order from the json but if needs better logic to get by the latest date.. */}
        {this.state.table_dates.reverse().map(playlist => {
          return (
            <div className="md:flex bg-gray-300 m-16 w-1/3 ml-64 rounded-lg shadow-lg">
              <div className="w-1/3">
                <a href={playlist.url}>
                  <img
                    className="rounded-lg"
                    src="https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                    alt="spotify playlist"
                  ></img>
                </a>
              </div>
              <div className="w-2/3">
                <a href={playlist.url}>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <p className="block mt-1 text-lg leading-tight font-semibold text-gray-900 text-left">
                      {playlist.title}
                    </p>
                    {/* <p className="mt-1 text-gray-600 text-xs">Description: {playlist.desc}</p> */}
                    <p className="mt-3 text-gray-600 text-xs text-left">Added on: {playlist.date}</p>
                  </div>
                </a>
              </div>

            </div>
          );
        })}
      </div>
    );
  }
}
export default Home;
