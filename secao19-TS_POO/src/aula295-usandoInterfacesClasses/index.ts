//  * Aula 295 - Usando interfaces e classes

/*
    _Nota_
    @ The Video Embed element
    @ https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
*/

interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayProtocol {
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
}

export default class VideoPlayer implements VideoPlayProtocol {

  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements){
      this.videoPlayer = videoPlayerElements.videoPlayer;
      this.playButton = videoPlayerElements.playButton;
      this.stopButton = videoPlayerElements.stopButton;
  }

  iniciarEventos(): void {
      this.playButton.addEventListener("click", () => {
          this.playToggle();
      });

      this.stopButton.addEventListener("click", () => {
          this.videoPlayer.pause();
          this.videoPlayer.currentTime = 0;
          this.playButton.innerText = "Play";
      });
  }

  playToggle(): void {
      if ( this.videoPlayer.paused) {
          this.videoPlayer.play();
          this.playButton.innerText = "Pause";
      } else {
          this.videoPlayer.pause();
          this.playButton.innerText = "Play";
      }
  }

  stop(): void {
      console.log("1");
  }

}

const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector(".video") as HTMLVideoElement,
    playButton: document.querySelector(".play") as HTMLButtonElement,
    stopButton: document.querySelector(".stop") as HTMLButtonElement,
});

videoPlayer.iniciarEventos();
