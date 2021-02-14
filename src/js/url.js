import { URLPATTERN } from "./constants";


const verifyUrl = url => URLPATTERN.test(url);
const getVideoId = url => url.replace(URLPATTERN, '$1');

const getVideoDetails = async url => {
  const res = await fetch(`https://www.youtube.com/oembed?url=${url}&format=json`);
  const data = await res.json();

  return data;
}

export { verifyUrl, getVideoId, getVideoDetails }