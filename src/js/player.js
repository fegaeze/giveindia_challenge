window.onYouTubePlayerAPIReady = null;


const loadVideoPlayer = id => {
  return () => {
    // eslint-disable-next-line no-undef
    new YT.Player('player', {
      videoId: id,
      playerVars: { 
        autoplay: 1,
        modestbranding: 1,
        iv_load_policy: 3
      }, 
      event: {
        onReady: () => console.log('ready'),
        onerror: () => console.log('error')
      }
    });
  }
}

const loadPlayerScript = () => {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";

  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

export {
  loadVideoPlayer,
  loadPlayerScript,
}
