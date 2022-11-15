const textArea = document.querySelector("textarea");
const randomItem = (arr) => Math.floor(Math.random() * arr.length);
const randomNum = (n) => Math.ceil(Math.random() * n * 100);
const tags = document.querySelector(".tags");

textArea.focus();

window.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const items = doThat();
    if (items.length) {
      items.forEach((item) => item.classList.add("temp"));

      setTimeout(() => {
        items.forEach((item) => item.classList.remove("temp"));
        randomClass(items);
      }, 2000);
    }
  }
});

const doThat = (_) => {
  tags.innerHTML = "";
  const tagsArr = [];
  const words = textArea.value.split(",").filter((item) => item.trim());
  if (words.length) {
    words.forEach((word) => {
      const tag = document.createElement("span");
      tag.textContent = word;
      tagsArr.push(tag);
      tags.appendChild(tag);
      textArea.value = "";
    });
    return tagsArr;
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
