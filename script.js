const addElement = document.getElementById("addElement-toDoList");
const counter = document.querySelector('.container__items--toDoList--title-counter');
const ul = document.querySelector('.container__items--toDoList--mainElement--list');

const toDoList = [];

const addElementToList = (e) => {
    if (e.keyCode === 13) {
        const newItemValue = addElement.value;
        if(newItemValue==="") return;
        const newLi = document.createElement('li');
        const newRadio = document.createElement('input');
        newRadio.type = "radio";
        newRadio.classList.add("container__items--toDoList--mainElement--list-radio")
        newRadio.addEventListener("click", () =>{
            counterToDoList++;
            counter.innerHTML=counterToDoList;
            if(toDoList.length<counterToDoList){
                counterToDoList=toDoList.length;
                counter.innerHTML=toDoList.length;
            }
        })
        newLi.classList.add("container__items--toDoList--mainElement--list-item");
        toDoList.push(newLi);
        ul.textContent="";
        toDoList.forEach(toDoElement => {
            ul.appendChild(toDoElement);
        })
        newLi.appendChild(newRadio);
        newLi.appendChild(document.createTextNode(newItemValue));
        ul.appendChild(newLi);
        addElement.value = "";
    }
}

let product1 = {
    name: "iPhone 6s Plus 16GB",
    salePrice: 649,
    price: 900,
    currency: "$"
  };
  
let product2 = {
    name: "iPad Pro 32GB",
    salePrice: 600,
    price: 800,
    currency: "$"
  };
  
let product3 = {
    name: "MacBook Pro",
    salePrice: null,
    price: 8000,
    currency: "PLN"
  };

addElement.addEventListener("keyup", addElementToList);

const modalProduct = [...document.querySelectorAll('.container__items--product')];


const modalView = () => {
    const modal = document.querySelector(".modal");
    const main = document.querySelector(".main");
    
    main.classList.toggle("main__dark");
    modal.classList.toggle("modal__active");
    modalButtonCancel.addEventListener("click", () =>{
        modal.classList.remove("modal__active");
        main.classList.remove("main__dark");
    });
    
}


modalProduct.forEach(view => view.addEventListener('click', modalView));
