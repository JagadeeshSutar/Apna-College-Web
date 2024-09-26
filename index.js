let word = [
  "Alpha - DSA",
  "Delta Development",
  "Sigma - DSA & Web Development",
  "C++ DSA",
];
// // let word = "Hanuman";
// let newWord = "";
// for (let i = 0; i < word.length; i++){
//   newWord += word[i];
//   for (let j = 0; j < word[i].length; j++){
//   for (let j = 0; j <newWord.length; j++){

//     console.log(newWord[i][j])
//     setInterval(() => {
//       console.log(newWord)
//       console.log(charAt(wo))
//       let sentence += word[i][j];
//       console.log(sentence)
//     }, 1000)
//   }
// }
// for (let i = 0; i < word.length; i++){
//   // let  = newWord.charAt(i);
//   console.log()
// }
// let newWord = "";
// setInterval(() => {
//   for (let i = 0; i < word.length; i++) {
//     let n = word[i].length;
//     for (let j = 0; j < n; j++) {
//       newWord += word[i][j];
//       // console.log(newWord);
//     }
//     newWord = "";
//   }
// }, 1000);

let newWord = "";
let i = 0;
let j = 0;
setInterval(() => {
  if (i < word.length) {
    if (j < word[i].length) {
      newWord += word[i][j];
      // console.log(newWord);
      let dom = (document.getElementsByClassName("animatedText")[0].innerText =
        newWord);
      // console.log(dom);
      j++;
    } else {
      newWord = "";
      j = 0;
      i++;
    }
  }
}, 200);

let socialMedia = ["#Youtube", "#Instagram", "#Telegram"];

let newSocialMedia = "";
let a = 0;
let b = 0;
setInterval(() => {
  if (a < socialMedia.length) {
    if (b < socialMedia[a].length) {
      newSocialMedia += socialMedia[a][b];
      // console.log(newWord);
      let dom = (document.getElementsByClassName("app-name")[0].innerText =
        newSocialMedia);
      // console.log(dom);
      b++;
    } else {
      newSocialMedia = "";
      b = 0;
      a++;
    }
  }
}, 200);

let insta = document.getElementsByClassName("app-name")[0].innerText;
console.log(insta);

let crsListBtn = document.getElementsByClassName("btn-newCrs")[0];
let list = document.getElementsByClassName("new-courses-hide")[0];
crsListBtn.onmouseover = function () {
  list.classList.add("new-courses");
  list.classList.remove("new-courses-hide");
}
crsListBtn.onmouseout = function () {
  list.classList.add("new-courses-hide");
  list.classList.remove("new-courses");
}
list.onmouseover = function () {
  list.classList.add("new-courses");
  list.classList.remove("new-courses-hide");
}
list.onmouseout = function () {
  list.classList.add("new-courses-hide");
  list.classList.remove("new-courses");
}

let hamburger = document.getElementsByClassName("fa-bars")[0];
let xmark = document.getElementsByClassName("x-mark")[0];
console.log(xmark)
let navbuttons = document.getElementsByClassName("nav-buttons-hide")[0];
hamburger.onclick = function () {
  navbuttons.classList.add("nav-buttons");
  navbuttons.classList.remove("nav-buttons-hide");
  console.log(navbuttons);
}
xmark.onclick = function () {
  navbuttons.classList.add("nav-buttons-hide")
  navbuttons.classList.remove("nav-buttons")
  console.log("working!!")
}


// xmark.onclick = function () { 
//   navbuttons.classList.add("nav-buttons")
//   navbuttons.classList.remove("nav-buttons-unhide")
//   console.log("It's working)")
// }
// console.log(xmark)
// xmark.onclick = function () {
//   navbuttons.classList.add("nav-buttos");
//   navbuttons.classList.remove("nav-buttons-unhide")
// }
// console.log(button)