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
      <div>
        <h1 className="mx-10 my-2 font-bold"> PLAYLIST HUB </h1>
        <h2 className="mx-10 text-xs"> Find your next favorite playlists</h2>
        {this.state.table_dates.map(playlist => {
          return (
            <a
              href={playlist.url}
              className="block mt-1 text-lg leading-tight font-semibold text-gray-900"
            >
              <div className="md:flex bg-gray-300 m-16">
                <div class="md:flex-shrink-0">
                  <img
                    className="rounded-lg md:w-56"
                    src="https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                    alt="Woman paying for a purchase"
                  ></img>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <p className="block mt-1 text-lg leading-tight font-semibold text-gray-900">
                    {playlist.title}
                  </p>
                  <p className="mt-1 text-gray-600 text-xs">Description: {playlist.desc}</p>
                  <p className="mt-1 text-gray-600 text-xs">Dated added: {playlist.date}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    );
  }
}
export default Home;
