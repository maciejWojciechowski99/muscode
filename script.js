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

addElement.addEventListener("keyup", addElementToList);