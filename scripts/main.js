
// Update the text content of the <h1>
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/jubin.jpg") {
    myImage.setAttribute("src", "images/jubin2.jpg");
  } else {
    myImage.setAttribute("src", "images/jubin.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `jubin!!!, ${myName}`;
  }

if (!localStorage.getItem("name")) {
  setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `jubin!!!, ${storedName}`;
}
myButton.addEventListener("click", () => {
    setUserName();
  });