import React from "react";

const AddAllButton: React.FC = () => {
  const handleAddAll = () => {
    console.log("Adding all songs to queue...");
  };

  return <button onClick={handleAddAll}>Add All</button>;
};

export default AddAllButton;
