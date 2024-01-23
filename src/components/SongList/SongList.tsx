import React from "react";
import SongRow from "../SongRow/SongRow";

interface Song {
  songName: string;
  artistName: string;
  trackNumber: number;
  file?: File;
}

interface SongListProps {
  songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Track</th>
          <th>Song Name</th>
          <th>Artist</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <SongRow key={song.trackNumber} song={song} />
        ))}
      </tbody>
    </table>
  );
};

export default SongList;
