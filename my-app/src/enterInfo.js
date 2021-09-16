import React, { useState } from 'react';

const EnterInfo = ({ getData }) => {
  const [loc, setLoc] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getData(loc);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter location:
        <input
          type="text"
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default EnterInfo;
