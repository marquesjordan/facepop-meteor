import React, { Component } from 'react';


export default class IphoneVideo extends Component {
  playPause(id) {
    const clicked_video = `video${id}`;
    const myVideo = document.getElementById(clicked_video);
    const controllerImage = document.getElementById(id);

    if (myVideo.paused) {
        $('#'+id).hide();
        myVideo.play();
    }

    myVideo.onended = function() {
      $('#'+id).show();
      controllerImage.src = 'https://s3-us-west-2.amazonaws.com/facepop/play-button.png';
    };
  }

  render() {
    const poster = `https://s3-us-west-2.amazonaws.com/facepop/poster${this.props.video}.png`;
    const videoId = `video${this.props.video}`;
    const videoSrc = `https://s3-us-west-2.amazonaws.com/facepop/video/video-${this.props.video}.mp4`;

    return(
      <div className="iphone-video-container">
        <div>
          <video poster={poster} id={videoId} className="iphone-video">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <img id={this.props.video} ref={this.props.video} className="iphone-video-play-btn" onClick={this.playPause.bind(this, this.props.video)} src="https://s3-us-west-2.amazonaws.com/facepop/play-button.png" />
        </div>
      </div>
    );
  }
}
