import React, { Component } from 'react';


export default class Video extends Component {
  constructor(props) {
    super(props);
  }

  playPause(id) {
    const clicked_video = `video${id}`;
    const myVideo = document.getElementById(clicked_video);
    const controllerImage = document.getElementById(id);

    if (myVideo.paused) {
        myVideo.play();
        $('#'+id).hide();
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
    const videoSrcWebm = `https://s3-us-west-2.amazonaws.com/facepop/video/video-${this.props.video}.webm`;


    return(
      <div className={ this.props.isRestricted ? 'hide' : 'product-video-container pad-bottom-lg' }>
        <div className="video-mask">
          <video preload="none" poster={poster} id={videoId} style={this.props.vidStyle} className="contact-video-footer">
            <source src={videoSrcWebm} type="video/webm" />
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <img id={this.props.video} ref={this.props.video} className="play-button product-video-play-image" onClick={this.playPause.bind(this, this.props.video)} src="https://s3-us-west-2.amazonaws.com/facepop/play-button.png" />
        </div>
      </div>
    );
  }
}
