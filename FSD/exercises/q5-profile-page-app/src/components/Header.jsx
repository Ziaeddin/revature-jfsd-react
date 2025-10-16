import React from 'react';

export default function Header({ title = 'Profile', dark = false, setDark }) {
  return (
    <header className="header">
      <h1 className="title">{title}</h1>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div className="toggle-wrap">
          <button
            onClick={() => setDark && setDark(d => !d)}
            className="toggle-btn"
          >
            {dark ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    </header>
  );
}
