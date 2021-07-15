function MediaPlayer({ el, plugins = [] }) {
  this.media = el;
  this.plugins = plugins;

  this._initPlugins();
}

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

MediaPlayer.prototype.mute = function () {
  console.log(this);
  this.media.muted = true;
};

MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
};

MediaPlayer.prototype.toggleMute = function () {
  this.media.muted ? this.unmute() : this.mute();
};

MediaPlayer.prototype._initPlugins = function () {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    mute: () => this.mute(),
    unmute: () => this.unmute(),
    media: this.media,
    get muted() {
      return this.media.muted;
    },
    set muted(value) {
      if (value) {
        this.mute();
      } else {
        this.unmute();
      }
    },
  };

  this.plugins.forEach(plugin => {
    plugin.run(player);
  });
};

export default MediaPlayer;
