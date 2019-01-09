import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import VideoPlayer from './components/video-player/video-player';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <VideoPlayer />
        <Footer />
      </div>
    );
  }
}

export default App;
