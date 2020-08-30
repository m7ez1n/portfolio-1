import React from "react"

import { links } from '../utils/socialMedia';
import { skills } from '../utils/skills';
import { Skill } from '../components/ProgressBar';

import './styles.scss';
import "react-sweet-progress/lib/style.css";

export default function Home() {
  return (
    <>
      <section className="wrapper">
        <section>
          <div className="content">
            <header>
              <h1>@m7he4rt</h1>    
            </header>

            <h2>Frontend Developer <span aria-label="Man Technologist Emoji" role="img">🧑🏻‍💻</span></h2>
            
            <div className="profile">
              <p>Age: 19 
                <span role="img" aria-label="Flying Saucer Emoji"> 🛸</span>
              </p>
              <p>
                Email:{' '}
                <a className="email" href="mailto:mateuspm2015@hotmail.com?Subject=Whats%20up!" rel="noopener noreferrer" target="_blank">mateuspm2015@hotmail.com</a>
                <span role="img" aria-label="Envelope Emoji"> ✉️</span>
              </p>
              <p>
                Location: Goiânia, Brazil 
                <span role="img" aria-label="Pushpin Emoji"> 📌</span>
              </p>
              <p>
                <a className="email" href="#skill-set">Skill Set</a>
                <span role="img" aria-label="Person levitating Emoji"> 🕴🏻</span>
              </p>
            </div>
          
            <div className="communication">
              {links.map((value, idx) => (
                <a className="link" href={value.link} rel="noopener noreferrer" target="_blank" aria-label={value.label} key={`key-${idx}`}>
                  {value.icon}
                </a>
              ))}
            </div>

            <a href="#form" className="formLink">Entre em contato</a>
          </div>
        </section>
      </section>
      
			<section className="skills" id="skill-set">
        <header>
          <h1>Skill Set</h1>          
        </header>
        {skills.map((value, idx) => (
          <Skill name={value.name} percent={value.percent} key={`key-skill-${idx}`} />
        ))}
      </section>

      <section className="form" id="form">
					<header>
						<h1>Contato</h1>
					</header>
					<form>
						<div className="input-block">
							<label for="form-name">Nome</label>
							<input />
						</div>
						<div className="input-block">
							<label for="form-email">Email</label>
							<input type="email" />
						</div>
						<div className="input-block">
							<label for="form-message">Mensagem</label>
							<textarea rows={5} cols={15} />
						</div>
					</form>
			</section>
    </>
  );
}
