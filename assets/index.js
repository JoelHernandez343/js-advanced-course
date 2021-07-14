import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');

const bttnTogglePlay = document.querySelector('#togglePlay');
const bttnToggleMute = document.querySelector('#toggleMute');

const player = new MediaPlayer({ el: video });

bttnTogglePlay.onclick = () => player.togglePlay();
bttnToggleMute.onclick = () => player.toggleMute();
