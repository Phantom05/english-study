const hideSentence = document.getElementById("hideSentence");
const hideTranslate = document.getElementById("hideTranslate");
const list = document.getElementById("list");
const startBtn = document.getElementById("startBtn");
const inputRepeat = document.getElementById("inputRepeat");
const inputStart = document.getElementById("inputStart");

const config = {
  list: [],
};
// axios.get("./data.json").then(({ data }) => {
//   console.log(data);
//   config.list = data;

//   // console.log(JSON.stringify(data));

//   const setFormat = {
//     list: config.list,
//     target: list,
//   };
//   setList(setFormat);
// });

config.list = data.list;
const setFormat = {
  list: data.list,
  target: list,
};
setList(setFormat);

startBtn.addEventListener("click", function() {
  console.log("startBtn");
  const startVal = Number(inputStart.value);
  const endValue = startVal + Number(inputRepeat.value);
  const getItem = config.list.filter((item) => {
    return item.id >= startVal && item.id <= endValue;
  });
  console.log(startVal, endValue);
  console.log(getItem);

  const setFormat = {
    list: getItem,
    target: list,
  };
  setList(setFormat);
  // console.log(inputRepeat.value);
  // console.log(inputStart.value);
});

hideSentence.addEventListener("click", function(e) {
  const toggleFormat = {
    toggleClass: "opacityZero",
    attrName: ["data-status", "true"],
    findListClass: ".sentence",
    target: this,
  };
  toggleClassControl(toggleFormat);
});

hideTranslate.addEventListener("click", function(e) {
  const toggleFormat = {
    toggleClass: "opacityZero",
    attrName: ["data-status", "true"],
    findListClass: ".translate",
    target: this,
  };
  toggleClassControl(toggleFormat);
});
