import React from "react"
import { FaLinkedin, FaGithubSquare, FaTelegram, FaTwitterSquare } from 'react-icons/fa';

import './styles.scss';

export default function Home() {
  return (
    <section className="wrapper">
      <section>
        <div className="content">
          <header>
            <h1>@m7he4rt</h1>    
          </header>

          <h2>Frontend Developer <span aria-label="Man Technologist Emoji">🧑🏻‍💻</span></h2>
          
          <div className="profile">
            <p>Age: 19 
              <span aria-label="Flying Saucer Emoji"> 🛸</span>
            </p>
            <p>
              Email:{' '}
              <a className="link" href="mailto:mateuspm2015@hotmail.com?Subject=Whats%20up!" rel="noopener noreferrer" target="_blank">mateuspm2015@hotmail.com</a>
              <span aria-label="Envelope Emoji"> ✉️</span>
            </p>
            <p>
              Location: Goiânia, Brazil 
              <span aria-label="Pushpin Emoji"> 📌</span>
            </p>
          </div>
        
          <div className="communication">
            <a className="link" href="https://twitter.com/m7he4rt" rel="noopener noreferrer" target="_blank" aria-label="Twiiter Icon">
              <FaTwitterSquare color="#fff" size={50} />
            </a>
            <a className="link" href="https://t.me/m7he4rt" rel="noopener noreferrer" target="_blank" aria-label="Discord Icon">
              <FaTelegram color="#fff" size={50} />
            </a>
            <a className="link" href="https://github.com/m7he4rt" rel="noopener noreferrer" target="_blank" aria-label="Github Icon">
              <FaGithubSquare color="#fff" size={50} />
            </a>
            <a className="link" href="https://www.linkedin.com/in/m7aei" rel="noopener noreferrer" target="_blank" aria-label="Linkedin Icon">
              <FaLinkedin color="#fff" size={50} />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
