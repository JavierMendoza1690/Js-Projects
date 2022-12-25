const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

let getRandomNumber = ()=>{
    // return parseInt(Math.random()*colors.length);    Es mas correcto el uso de Math.floor que parseint

    return Math.floor(Math.random()*colors.length);
}

btn.addEventListener("click", () => {
  //selecciona el body cuando se hace click
  // console.log(document.body);

//   get random number between 0-3 colors[i]
  const randomNumber = getRandomNumber();
  console.log(randomNumber);


  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
