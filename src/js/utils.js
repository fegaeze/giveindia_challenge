import { state } from "./state";
import { PLAYLIST } from "./constants";


export const localStorageSync = () => {
  const storedPlaylist = localStorage.getItem(PLAYLIST);
  
  if(!storedPlaylist) {
    localStorage.setItem(PLAYLIST, JSON.stringify(state.playlist))
    return;
  }
  
  state.playlist = [...JSON.parse(storedPlaylist)]
}