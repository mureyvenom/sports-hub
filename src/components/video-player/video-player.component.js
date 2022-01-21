import React from 'react';
import './video-player.styles.css';

const VideoPlayer = () => {
    return(
        <div className="video_container">
            <video height="480" width="100%" controls={true}>
                <source src="https://vc.sporttube.com/video/2021/1/17/JwLCCCG.mp4" />
            </video>
            <div className="title">
                Video Title
            </div>
        </div>
    );
}

export default VideoPlayer;