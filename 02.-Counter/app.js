// set initial cont
let count = 0;

//select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    styles.contains("decrease")? count-- : styles.contains("increase")? count++ : count=0;

    (count>0)? value.style.color = "green" : (count==0)? value.style.color ="black" : value.style.color ="red";

    value.textContent = count;
  });
});
