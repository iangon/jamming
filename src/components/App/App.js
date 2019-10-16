import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

const searchResults = [
  {
    id: 1,
    name: "MIDDLE CHILD",
    artist: "J. Cole",
    album: "Revenge of the Dreamers III"
  },
  {
    id: 2,
    name: "No Role Modelz",
    artist: "J. Cole",
    album: "2014 Forest Hills Drive"
  }
];
const playlistName = "My Jams";
const playlistTracks = [
  { id: 3, name: "Lotus Flower Bomb", artist: "Wale", album: "Ambition" },
  { id: 4, name: "No Hands", artist: "Wale", album: "Flockaveli" }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          id: 1,
          name: "MIDDLE CHILD",
          artist: "J. Cole",
          album: "Revenge of the Dreamers III"
        },
        {
          id: 2,
          name: "No Role Modelz",
          artist: "J. Cole",
          album: "2014 Forest Hills Drive"
        }
      ],
      playlistName: playlistName,
      playlistTracks: [
        { id: 3, name: "Lotus Flower Bomb", artist: "Wale", album: "Ambition" },
        { id: 4, name: "No Hands", artist: "Wale", album: "Flockaveli" }
      ]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    const doesPlaylistContainTrack = tracks.find(
      savedTrack => savedTrack.id === track.id
    );

    if (doesPlaylistContainTrack) {
      return;
    }

    tracks.push(track);

    this.setState({
      playlistTracks: tracks
    });
  }

  removeTrack(track) {
    const tracks = this.state.playlistTracks.filter(
      savedTrack => savedTrack.id !== track.id
    );

    this.setState({
      playlistTracks: tracks
    });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              searchResults={this.state.searchResults}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
