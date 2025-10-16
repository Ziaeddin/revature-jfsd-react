import React from 'react';

export default function Footer({ name="-" }) {
  return (
    <footer className="footer">
      <small>© {new Date().getFullYear()} {name}. All rights reserved.</small>
    </footer>
  );
}
