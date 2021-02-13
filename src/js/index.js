import { handleVideoSubmit } from './ui';
import { localStorageSync } from './utils';
import { loadPlayerScript } from './player';


const form = document.querySelector('#linkInputForm');


const init = () => {
  loadPlayerScript();
  localStorageSync();

  form.addEventListener('submit', (e) => handleVideoSubmit(e));
  // document.addEventListener('click', () => handleDelete());
}

init();
