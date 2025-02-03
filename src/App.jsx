import React, { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [effectActive, setEffectActive] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const firstSection = document.getElementById("home");
      const threshold = firstSection ? firstSection.offsetHeight * 0.75 : 0;

      if (currentScroll >= threshold) {
        setEffectActive(true);
        if (currentScroll < lastScroll.current) {
          setScrollingUp(true);
        } else {
          setScrollingUp(false);
        }
      } else {
        setEffectActive(false);
        setScrollingUp(true);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`app ${
        effectActive ? (scrollingUp ? "white" : "black") : "white"
      }`}
    >
      <header className="navbar">
        <h1>Technook Capstone project 1</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#hobbies">hobies</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="section" id="home">
        <h1>Welcome to My website</h1>
        <p>
          This is a simple capstone project where there are 2 sections and i
          have to implement a effect that when i scroll down the first section
          the black theme changes to white theme.
        </p>
      </section>

      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
          This is the first section , in this section let me describe myself , I
          am Sanath Kamath , I currently am pursuing my btech from vellore
          institute of technology, i am part of web development course of
          technook of december batch, i have worked with flask , node , react
          and nextjs in the past and am expanding my knowledge.
        </p>
      </section>

      <section className="section" id="hobbies">
        <h2>My hobbies</h2>
        <ul>
          <li>Cricket</li>
          <li>Football</li>
          <li>Badminton</li>
          <li>Chess</li>
          <li>BasketBall</li>
          <li>Watching Anime</li>
        </ul>
        <p></p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Sanath Kamath. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
