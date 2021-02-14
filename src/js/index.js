import { state } from "./state";
import { localStorageSync } from "./utils";
import { handleVideoSubmit, handleVideoDelete } from "./ui";
import { loadPlayerScript, createNewPlayer } from "./player";

const form = document.querySelector("#linkInputForm");

const init = () => {
  loadPlayerScript();
  localStorageSync();
  window.onYouTubePlayerAPIReady = createNewPlayer();

  window.addEventListener("storage", (e) => {
    state.playlist = JSON.parse(e.newValue);
  });
  form.addEventListener("submit", (e) => handleVideoSubmit(e));
  document.addEventListener("click", (e) => handleVideoDelete(e));
};

init();
