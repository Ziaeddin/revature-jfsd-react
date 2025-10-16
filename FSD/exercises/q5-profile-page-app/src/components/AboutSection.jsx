import React from 'react';

export default function AboutSection({ bio }) {
  return (
    <section className="about-section">
      <h3>About Me</h3>
      <p>{bio}</p>
    </section>
  );
}
