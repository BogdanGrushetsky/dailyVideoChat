import React, { useState } from 'react';

export default function JoinRoom() {
  const [room, setRoom] = useState(null);

  const onSubmit = () => {
    window.location.assign(`/video/${room}`);
  };

  return (
    <div className="container">
      <span>
        <input
          class="basic-slide"
          id="name"
          type="text"
          placeholder="Your room"
          onChange={e => setRoom(e.target.value)}
        />
        <label for="name" onClick={onSubmit}>
          Submit
        </label>
      </span>
    </div>
  );
}
