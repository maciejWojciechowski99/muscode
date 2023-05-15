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


const modalProduktName = document.querySelector(".modal__input--name");
const modalProduktPrice = document.querySelector(".modal__input--price");
const modalProduktpromoPrice = document.querySelector(".modal__input--promoPrice");
const modalProduktCurrency = document.querySelector(".modal__select");


//Produkt 1
const nameBody = document.querySelector(".product__name-js");
const nameBodyTable = document.querySelector(".product__name-jsTable");
const priceBody = document.querySelector(".product__price-js");
const priceBodyTable = document.querySelector(".product__price-jsTable");
const promoPriceBody = document.querySelector(".product__promoPrice-js");
const promoPriceBodyTable = document.querySelector(".product__promoPrice-jsTable");
const currencyBody = document.querySelector(".product__currency-js");
const currencyPromoBody = document.querySelector(".product__currencyPromo-js");
const currencyBodyTable = document.querySelector(".product__currency-jsTable");


//Produkt 2
const nameBodySecond = document.querySelector(".product__name-jsSecond");
const nameBodyTableSecond = document.querySelector(".product__name-jsTableSecond");
const priceBodySecond = document.querySelector(".product__price-jsSecond");
const priceBodyTableSecond = document.querySelector(".product__price-jsTableSecond");
const promoPriceBodySecond = document.querySelector(".product__promoPrice-jsSecond");
const promoPriceBodyTableSecond = document.querySelector(".product__promoPrice-jsTableSecond");
const currencyBodySecond = document.querySelector(".product__currency-jsSecond");
const currencyPromoBodySecond = document.querySelector(".product__currencyPromo-jsSecond");
const currencyBodyTableSecond = document.querySelector(".product__currency-jsTableSecond");


//Produkt 3
const nameBodyThird = document.querySelector(".product__name-jsThird");
const nameBodyTableThird = document.querySelector(".product__name-jsTableThird");
const priceBodyThird = document.querySelector(".product__price-jsThird");
const priceBodyTableThird = document.querySelector(".product__price-jsTableThird");
const promoPriceBodyThird = document.querySelector(".product__promoPrice-jsThird");
const promoPriceBodyTableThird = document.querySelector(".product__promoPrice-jsTableThird");
const currencyBodyThird = document.querySelector(".product__currency-jsThird");
const currencyPromoBodyThird = document.querySelector(".product__currencyPromo-jsThird");
const currencyBodyTableThird = document.querySelector(".product__currency-jsTableThird");


modalProduct[0].addEventListener("click", () =>{
    console.log("działa?")
    }
);

modalProduct[1].addEventListener("click", () =>{
    flag2 = false;
    modalImage.style.backgroundImage="url(src/img2.png)"
    
    const productName = document.querySelector(".modalProductName");
    productName.innerHTML=product2.name;
    modalButtonSave.addEventListener('click', ()=>{
        console.log("działa?")
    })
});
modalProduct[2].addEventListener("click", () =>{
    let flag3 = false;
    modalImage.style.backgroundImage="url(src/img3.png)"
    const productName = document.querySelector(".modalProductName");
    productName.innerHTML=product3.name;
    modalButtonSave.addEventListener('click', ()=>{
        console.log("działa?")
    })
})
