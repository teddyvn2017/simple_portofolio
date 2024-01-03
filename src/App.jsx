import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Bot } from './components/Bot'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Hireme } from './components/Hireme'
import { Project } from './components/Project'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


const App = () => {
  return (
    <div>
        <Navbar />
        <Bot />
        <Hero /> 
        <About />
        <Skills />
        <Hireme />
        <Project />
        <Contact />
        <Footer />
    </div>
  );
};

export default App
