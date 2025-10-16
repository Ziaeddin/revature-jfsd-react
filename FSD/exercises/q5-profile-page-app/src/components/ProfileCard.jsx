import React from 'react';

export default function ProfileCard({ name, role, image, dark = false }) {
  return (
    <aside className="profile-card">
      <img src={image} alt={`${name} avatar`} className="avatar" />
      <h2 className="profile-name">{name}</h2>
      <div className="profile-role">{role}</div>
    </aside>
  );
}
