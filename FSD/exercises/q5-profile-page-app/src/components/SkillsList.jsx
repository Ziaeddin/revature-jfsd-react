import React from 'react';

export default function SkillsList({ skills = [] }) {
  return (
    <section className="skills-section">
      <h3>Skills</h3>
      <div className="skills-list">
        {skills.map((s, i) => (
          <span key={i} className="skill-chip">{s}</span>
        ))}
      </div>
    </section>
  );
}
