const textArea = document.querySelector("textarea");
const randomItem = (arr) => Math.floor(Math.random() * arr.length);
const tags = document.querySelector(".tags");

window.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const items = doThat();
    items.length && randomClass(items);
  }
});

const doThat = (_) => {
  tags.innerHTML = "";
  const tagsArr = [];
  const words = textArea.value.split(",").filter((item) => item.trim());
  if (words.length) {
    console.log(words);
    words.forEach((word) => {
      const tag = document.createElement("span");
      tag.textContent = word;
      tagsArr.push(tag);
      tags.appendChild(tag);
      textArea.value = "";
      return tagsArr;
    });
  } else {
    tags.textContent = "You MUST Enter some Valid Values";
    textArea.value = "";
    return [];
  }
};

const randomClass = (tags) => {
  const word = tags[randomItem(tags)];
  word.classList.add("active");
};

textArea.addEventListener("input", (_) => {});
