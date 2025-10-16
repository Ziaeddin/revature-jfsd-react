import React, { useState } from 'react';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import AboutSection from './components/AboutSection';
import SkillsList from './components/SkillsList';
import Footer from './components/Footer';
import './profile.css';

const sampleProfile = {
  name: 'Ziaeddin Najafian',
  role: 'Java Full Stack Developer',
image: 'https://avatars.githubusercontent.com/u/5163177?v=4',
  
  bio:
    "I am a results-driven Full Stack and Backend Developer with over a decade of experience designing and delivering secure, scalable software solutions across a wide range of industries. My academic foundation includes a Master’s in Computer Software Engineering with a focus on Power SmartGrid and AI, and a Bachelor’s in Information Technology Engineering. This technical background fuels my passion for creating high-impact, innovative solutions.Recently, I completed the Revature Pre-Training Program, where I strengthened both my foundational and advanced Java skills, deepened my understanding of Java frameworks, and worked extensively with relational databases and SQL. I also gained hands-on experience creating RESTful APIs using Javalin, culminating in the development of a fully functional REST API backend.",
  skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Java']
};

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`app ${dark ? 'dark' : 'light'}`}>
      <div className="container">
  <Header title="Hello, Everyone!" dark={dark} setDark={setDark} />

        <main className="card-grid">
          <ProfileCard
            name={sampleProfile.name}
            role={sampleProfile.role}
            image={sampleProfile.image}
            dark={dark}
          />

          <section>
            <AboutSection bio={sampleProfile.bio} />
            <SkillsList skills={sampleProfile.skills} dark={dark} />
          </section>
        </main>

        <Footer name={sampleProfile.name} />
      </div>
    </div>
  );
}
