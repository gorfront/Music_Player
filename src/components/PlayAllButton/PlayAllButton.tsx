import React from "react";

const PlayAllButton: React.FC = () => {
  const handlePlayAll = () => {
    console.log("Playing all songs...");
  };

  return <button onClick={handlePlayAll}>Play All</button>;
};

export default PlayAllButton;
