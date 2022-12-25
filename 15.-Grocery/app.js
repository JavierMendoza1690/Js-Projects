// ****** SELECT ITEMS **********

const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);
// clear items
clearBtn.addEventListener('click',ClearItems);
// load items
window.addEventListener('DOMContentLoaded',setupItems);

// const deleteBtn = document.querySelector('.delete-btn');

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    createListItem(id,value);
    
    
    //display alert
    displayAlert("item added to the list", "success");
    //show container
    container.classList.add("show-container");
    // add to local storage
    addToLocalStorage(id,value);
    //set back to default
    setBackToDefault();
   
  } else if (value && editFlag) {
    
    editElement.innerHTML = value;
    displayAlert("value changed",'success');
    // edit local storage
    editLocalStorage(editID,value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}


let displayAlert = (text, action) => {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1160);
};
  // set back to default
  let setBackToDefault = ()=>{
    grocery.value="";
    editFlag=false;
    editID = "";
    submitBtn.value="Submit";
  }
  // clearItems
 function ClearItems(){
    const items = document.querySelectorAll('.grocery-item');
    // console.log(items);
    
    if(items.length>0){
     items.forEach((item)=>{
      list.removeChild(item);
     });
    }
  container.classList.remove("show.container");
  displayAlert("empty list","danger");
  setBackToDefault();
  localStorage.removeItem('list');
}
// delete function
function deleteItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if(list.children.length===0){
    container.classList.remove("show-container");
  }
  displayAlert('item removed','danger');
  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}
// edit function
function editItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
editElement = e.currentTarget.parentElement.previousElementSibling;
// set form value
grocery.value = editElement.innerHTML;
editFlag =true;
editID = element.dataset.id;
submitBtn.textContent = "edit";
}
// ****** LOCAL STORAGE **********
let addToLocalStorage = (id,value)=>{
  const grocery={id:id,value:value};
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem('list',JSON.stringify(items));
  console.log(items);
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
function removeFromLocalStorage(id){
  let items = getLocalStorage();

  items = items.filter((item)=> {
    if (item.id !== id) {
      return item;
    }
  });

  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {

  // localStorage.setItem("orange",JSON.stringify(['item1','item2']));
  // const oranges = JSON.parse(localStorage.getItem('orange'));
  // console.log(oranges);
  // localStorage.removeItem('orange');
  
  let items = getLocalStorage();

  items = items.map(function (item) {

    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}



// ****** SETUP ITEMS **********

function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItem(id,value){
  const element = document.createElement("article");
    //add class
    element.classList.add("grocery-item");
    // add id
    const attr = document.createAttribute("data-id");
    // console.log(attr);
    attr.value = id;
    // console.log(attr);
    // console.log(element);
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
    </div>`;
    const deleteBtn=element.querySelector(".delete-btn");
    const editBtn= element.querySelector(".edit-btn");
    deleteBtn.addEventListener('click',deleteItem);
    editBtn.addEventListener('click',editItem);

    // console.log(deleteBtn);
    // append child
    list.appendChild(element);
}