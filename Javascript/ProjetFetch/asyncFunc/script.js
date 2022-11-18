

"use strict";

const dogContainer = document.querySelector(".dogContainer");
const btn = document.querySelector("button");

async function fetchDog() {
  try {
    // const dogResponse = await fetch("https://dog.ceo/api/breeds/list/all%22);
    const dogResponse = await fetch("https://dog.ceo/api/breed/hound/images");
    // const dogResponse = await fetch("https://dog.ceo/api/breeds/image/random%22);
    console.log(dogResponse);
    if (!dogResponse.ok) throw new Error("Sorry could not fetch the data");
    const img = await dogResponse.json();
    img
    // const img = dogResponse.json();
    console.log(img);
    const imgArray = img.message;
    console.log(imgArray);
    imgArray.forEach((dog, i) => {
      const renderImg = document.createElement("img");
      renderImg.setAttribute("src", dog);
      renderImg.classList.add(`dog-${i}`);
      renderImg.classList.add("items");
      renderImg.style.width = "100px";
      renderImg.style.height = "100px";
      renderImg.classList.add(".img");

      if(i == 1){
    document.getElementsByClassName('dogContainer')[0].style.backgroundColor = "";
      }

      dogContainer.appendChild(renderImg);
    });
  } catch (err) {
    console.error(err);
  }
}
// }

// btn.addEventListener("click", fetchDog);

btn.onclick=()=>{
    document.getElementsByClassName('dogContainer')[0].style.backgroundColor = "darkblue";
    fetchDog()
}