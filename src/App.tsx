import React, { useState } from "react";
import AddAllButton from "./components/AddAllButton/AddAllButton";
import MusicUploadForm from "./components/MusicUploadForm/MusicUploadForm";
import PlayAllButton from "./components/PlayAllButton/PlayAllButton";
import SongList from "./components/SongList/SongList";

interface Song {
  songName: string;
  artistName: string;
  trackNumber: number;
  file?: File;
}

const initialSongs: Song[] = [
  {
    songName: "Song 1",
    artistName: "Artist 1",
    trackNumber: 1,
  },
  {
    songName: "Song 2",
    artistName: "Artist 2",
    trackNumber: 2,
  },
];

const App: React.FC = () => {
  const [songs, setSongs] = useState(initialSongs);

  const handleFileChange = (file: File | null) => {
    if (file) {
      // Create a new song with the uploaded file
      const newSong: Song = {
        songName: file.name,
        artistName: "Unknown",
        trackNumber: songs.length + 1,
        file,
      };
      setSongs([...songs, newSong]);
    }
  };

  return (
    <div className="App">
      <h1>Music Player</h1>
      <MusicUploadForm onFileChange={handleFileChange} />
      <SongList songs={songs} />
      <PlayAllButton />
      <AddAllButton />
    </div>
  );
};

export default App;
