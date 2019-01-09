import React, { Component } from 'react';
import './video-player.css';
import Video from '../../video.png';

class VideoPlayer extends Component {
    render() {
        return (
            <div className="Video-Player">
                <a href="https://www.youtube.com/watch?v=16GIYWpMGhU" target="_blank">
                    <img className="video-image" src={Video}/>
                </a>
            </div>
        )
    }
}

export default VideoPlayer;