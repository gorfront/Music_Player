import React from "react";

interface Song {
  songName: string;
  artistName: string;
  trackNumber: number;
  file?: File;
}

interface SongRowProps {
  song: Song;
}

const SongRow: React.FC<SongRowProps> = ({ song }) => {
  return (
    <tr>
      <td>{song.trackNumber}</td>
      <td>{song.songName}</td>
      <td>{song.artistName}</td>
      <td>Actions</td>
    </tr>
  );
};

export default SongRow;
