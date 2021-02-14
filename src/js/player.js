import { removeFromPlayList, state } from "./state";

let player;

const loadPlayerScript = () => {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";

  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
};

const createNewPlayer = (id) => {
  // eslint-disable-next-line no-undef
  return function newPlayer() {
    try {
      // eslint-disable-next-line no-undef
      player = new YT.Player("player", {
        videoId: id,
        playerVars: {
          autoplay: 1,
          modestbranding: 1,
          iv_load_policy: 3,
        },
        events: {
          onReady: (e) => loadPlaylist(e.target),
          onStateChange: onPlayerStateChange,
          onerror: onPlayerError,
        },
      });
    } catch (error) {
      console.log(error, "new player");
    }
  };
};

const loadPlaylist = (player) => {
  player.loadPlaylist({
    playlist: state.playlist.map(({ id }) => id),
  });
};

const onPlayerStateChange = (evt) => {
  if (evt.data === 0) {
    removeFromPlayList(state.playlist[0]["id"]);
    loadPlaylist(evt.target);
  }
};

const onPlayerError = () => {
  console.log("error");
};

export { player, loadPlaylist, createNewPlayer, loadPlayerScript };
