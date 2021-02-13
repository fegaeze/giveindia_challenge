import { render } from "./ui";
import { PLAYLIST } from "./constants";


const setState = state => {
  return new Proxy(state, {
    set(target, property, value) {
      target[property] = value;
      localStorage.setItem(PLAYLIST, JSON.stringify(target[property]));
      render(property);
      return true;
    }
  });
}

export const state = setState({
  playlist: []
});