import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');

const bttnTogglePlay: HTMLElement = document.querySelector('#togglePlay');
const bttnToggleMute: HTMLElement = document.querySelector('#toggleMute');

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

bttnTogglePlay.onclick = () => player.togglePlay();
bttnToggleMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(err => console.error(err));
}
