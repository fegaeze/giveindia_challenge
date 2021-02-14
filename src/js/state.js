import { render } from "./ui";
import { PLAYLIST } from "./constants";
import { loadPlaylist, player } from "./player";

const setState = (state) => {
  return new Proxy(state, {
    set(target, property, value) {
      const prevState = target[property];

      target[property] = value;
      localStorage.setItem(PLAYLIST, JSON.stringify(target[property]));

      handleStateChanges(prevState, target[property]);

      render(property);
      return true;
    },
  });
};

export const state = setState({
  playlist: [],
});

export const addToPlayList = (data) => {
  state.playlist = [...state.playlist, data];
};

export const removeFromPlayList = (id) => {
  state.playlist = state.playlist.filter((item) => item.id !== id);
};

const handleStateChanges = (prevState, currentState) => {
  if (player && currentState.length === 0) {
    player.stopVideo();
  } else if (player && currentState.length === 1) {
    loadPlaylist(player);
  } else if (prevState.length > currentState.length) {
    player.nextVideo();
  }
};
