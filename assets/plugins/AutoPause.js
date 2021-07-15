class AutoPause {
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

  handleIntersection(entries) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;

    console.log(this.player);

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  handleVisibilityChange() {
    const isVisible = document.visibilityState === 'visible';

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
