import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');

const bttnTogglePlay = document.querySelector('#togglePlay');
const bttnToggleMute = document.querySelector('#toggleMute');

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

bttnTogglePlay.onclick = () => player.togglePlay();
bttnToggleMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(err => console.error(err));
}
