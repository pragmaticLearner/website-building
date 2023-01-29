const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/jinSakai.jpg") {
    myImage.setAttribute("src", "images/view.jpg");
  } else {
    myImage.setAttribute("src", "images/jinSakai.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName}`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  