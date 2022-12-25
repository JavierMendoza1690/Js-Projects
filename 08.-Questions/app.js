//using selectors inside the element

const question = document.querySelectorAll(".question");

question.forEach((orange) => {
  let btn = orange.querySelector(".question-btn");
  btn.addEventListener("click", (e) => {
    question.forEach((item)=>{
        if(item != orange){
           item.classList.remove("show-text");
        }
    });
    orange.classList.toggle("show-text");
  });
});


// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn)=>{
//     btn.addEventListener('click', (event)=>{
//         let text = event.currentTarget.parentElement.parentElement;
//         text.classList.toggle("show-text")
//      });
// });
