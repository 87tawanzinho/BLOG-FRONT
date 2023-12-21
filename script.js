const request = () => {
  fetch(`https://api-blog-black.vercel.app`)
    .then((response) => response.json())
    .then((data) => {
      theArray(data);
      console.log(data);
    })
    .catch((err) => console.log(err));
};

const theArray = (data) => {
  const dataMap = data.map((item) => ({
    title: item.title,
    description: item.description,
  }));

  dataMap.forEach((mappedItem) => {
    let item = document.createElement("div");
    item.classList.add("item");
    let list = document.querySelector(".list");
    item.innerHTML = `<h2>${mappedItem.title}</h2> <p>${mappedItem.description}`; // Use mappedItem.title
    list.appendChild(item);
  });
};

const aboutMe = document.querySelector("#aboutMe");
let clicked = false;

function clickedAbout() {
  const divAboutMe = document.querySelector("#div-aboutMe");
  if (clicked) {
    divAboutMe.classList.remove("mobile");
  } else {
    divAboutMe.classList.add("mobile");
  }
  console.log(clicked);

  clicked = !clicked;
}

aboutMe.addEventListener("click", clickedAbout);
request();
