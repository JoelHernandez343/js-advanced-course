class MediaPlayer {
  media: HTMLMediaElement;
  plugins: any[];

  constructor({ el, plugins = [] }) {
    this.media = el;
    this.plugins = plugins;

    this.#initPlugins();
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  mute() {
    console.log(this);
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  toggleMute() {
    this.media.muted ? this.unmute() : this.mute();
  }

  #initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
}

export default MediaPlayer;
