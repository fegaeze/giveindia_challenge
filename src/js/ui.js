import { state } from './state';
import { loadVideoPlayer } from './player';
import { getVideoId, verifyUrl } from './url';


const input = document.querySelector('#linkInput');


const render = property => {
  document.querySelector(`[data-binding="${property}"]`).innerHTML = state[property].map((_, i) => `
    <li>
      <h3 class="title">Link ${i + 1}</h3>
      <button>X</button>
    </li>
  `).join('');
}

const handleVideoSubmit = evt => {
  evt.preventDefault();

  if(verifyUrl(input.value)) {
    state.playlist = [...state.playlist, input.value];
  }

  input.value = '';
}

const handleVideoDelete = () => {
  // state.playlist = state.playlist.filter(item => url !== item);
}

const handleUiUpdates = list => {
  // const id = getVideoId(list[0])
  // window.onYouTubePlayerAPIReady = loadVideoPlayer(id)
}

export { 
  render, 
  handleVideoSubmit, 
  handleVideoDelete, 
  handleUiUpdates 
}