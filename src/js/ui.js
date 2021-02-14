import { getVideoDetails, getVideoId, verifyUrl } from "./url";
import { addToPlayList, removeFromPlayList, state } from "./state";

let input = document.querySelector("#linkInput");

const render = (property) => {
  document.querySelector(`[data-binding="${property}"]`).innerHTML = state[
    property
  ]
    .map(
      ({ id, title }) => `
    <li data-key="${id}">
      <h3 class="title">${title}</h3>
      <button class="deletebtn">X</button>
    </li>
  `
    )
    .join("");
};

const handleVideoSubmit = async (evt) => {
  evt.preventDefault();
  const url = input.value;

  if (!verifyUrl(url)) {
    input.value = "";
    return;
  }

  try {
    const { title } = await getVideoDetails(url);
    addToPlayList({ url, title, id: getVideoId(url) });
  } catch (error) {
    console.log(error, "handleSubmit");
  } finally {
    input.value = "";
  }
};

const handleVideoDelete = (evt) => {
  if (evt.target.matches(".deletebtn")) {
    const id = evt.target.parentNode.dataset.key;
    removeFromPlayList(id);
  }
};

export { render, handleVideoSubmit, handleVideoDelete };
