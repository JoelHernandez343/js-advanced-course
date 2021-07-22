import MediaPlayer from '../MediaPlayer';

class AutoPause {
  private threshold: number;
  player: MediaPlayer;

  run(player) {
    this.player = player;
    this.threshold = 0.25;

    const observer = new IntersectionObserver(
      entries => this.handleIntersection(entries),
      {
        threshold: this.threshold,
      }
    );

    observer.observe(player.media);

    document.addEventListener('visibilitychange', () =>
      this.handleVisibilityChange()
    );
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  private handleVisibilityChange() {
    const isVisible = document.visibilityState === 'visible';

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
