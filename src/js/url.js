import { URLPATTERN } from "./constants";


const verifyUrl = url => URLPATTERN.test(url);
const getVideoId = url => url.replace(URLPATTERN, '$1');

export { verifyUrl, getVideoId }