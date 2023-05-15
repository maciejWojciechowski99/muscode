const addElement = document.getElementById("addElement-toDoList");
const counter = document.querySelector('.container__items--toDoList--title-counter');
const ul = document.querySelector('.container__items--toDoList--mainElement--list');

let counterToDoList = 0;

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

const modalProduct = [...document.querySelectorAll('.container__items--product')];

const modalButtonSave = document.getElementById("modalButtonSave");
const modalButtonCancel = document.getElementById("modalButtonCancel");

const product_name = null;
const product_price = null;
const product_currency = null;

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

const modalImage = document.querySelector(".modal__img-js");

const promoBar = document.querySelector(".container__items--product--promoBar");
const promoBarSecond = document.querySelector(".container__items--product--promoBarSecond");
const promoBarThird = document.querySelector(".container__items--product--promoBarThird");
const promoBarFinalPrice = document.querySelector(".promoBar__finalPrice");
const promoBarFinalPriceSecond = document.querySelector(".promoBar__finalPriceSecond");
const promoBarFinalPriceThird = document.querySelector(".promoBar__finalPriceThird");

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

let flag = true;
let flag2 = true;
let flag3 = true;
let percent = 0;

function promoPriceCounter(){
    percent = (((100*modalProduktpromoPrice.value)/modalProduktPrice.value)-100);
    return percent;
}
function promoPriceCounterReset(){
    percent = 0;
}

modalProduct[0].addEventListener("click", () =>{
    flag=false;
    modalImage.style.backgroundImage="url(src/img1.png)"
    const productName = document.querySelector(".modalProductName");
    productName.innerHTML=product1.name;
    
    modalButtonSave.addEventListener('click', ()=>{
        if(!flag){
        product1.name = modalProduktName.value;
        nameBody.innerHTML = modalProduktName.value;
        nameBodyTable.innerHTML = modalProduktName.value;
        priceBody.innerHTML = modalProduktPrice.value;
        priceBodyTable.innerHTML = modalProduktPrice.value;
        promoPriceBody.innerHTML = modalProduktpromoPrice.value;
        if(modalProduktpromoPrice.value<=0){
            promoPriceBody.style.display="none";
            currencyPromoBody.style.display="none";
            priceBody.style.textDecoration="none";
            priceBody.style.fontWeight="500";
            priceBody.style.color="#862583";
            currencyBody.style.textDecoration="none"
            currencyBody.style.fontWeight="500";
            currencyBody.style.color="#862583";
            promoBar.classList.remove("container__items--product--promoBar-active");
        }else{
            promoPriceCounterReset();
            promoPriceCounter();
            promoBar.classList.add("container__items--product--promoBar-active");
            promoBarFinalPrice.textContent=+percent.toFixed(0) + "%";
            promoPriceBody.style.display="inline";
            currencyPromoBody.style.display="inline";
            priceBody.style.textDecoration="line-through";
            priceBody.style.fontWeight="300";
            priceBody.style.color="#384a5c";
            currencyBody.style.textDecoration="line-through"
            currencyBody.style.fontWeight="300";
            currencyBody.style.color="#384a5c";
        }
        promoPriceBodyTable.innerHTML = modalProduktpromoPrice.value;
        currencyBody.innerHTML = modalProduktCurrency.value;
        currencyPromoBody.innerHTML = modalProduktCurrency.value;
        currencyBodyTable.innerHTML = modalProduktCurrency.value;
        flag=true;
        }
    })
});

modalProduct[1].addEventListener("click", () =>{
    flag2 = false;
    modalImage.style.backgroundImage="url(src/img2.png)"
    
    const productName = document.querySelector(".modalProductName");
    productName.innerHTML=product2.name;
    modalButtonSave.addEventListener('click', ()=>{
        if(!flag2){
        product2.name = modalProduktName.value;
        nameBodySecond.innerHTML = modalProduktName.value;
        nameBodyTableSecond.innerHTML = modalProduktName.value;
        priceBodySecond.innerHTML = modalProduktPrice.value;
        priceBodyTableSecond.innerHTML = modalProduktPrice.value;
        promoPriceBodySecond.innerHTML = modalProduktpromoPrice.value;
        promoPriceBodyTableSecond.innerHTML = modalProduktpromoPrice.value;
        if(modalProduktpromoPrice.value<=0){
            promoPriceBodySecond.style.display="none";
            priceBodyThird.style.fontWeight="300";
            currencyPromoBodySecond.style.display="none";
            priceBodySecond.style.textDecoration="none";
            priceBodySecond.style.fontWeight="500";
            priceBodySecond.style.color="#862583";
            currencyBodySecond.style.textDecoration="none"
            currencyBodySecond.style.fontWeight="500";
            currencyBodySecond.style.color="#862583";
            promoBarSecond.classList.remove("container__items--product--promoBar-active");
            promoBarFinalPriceSecond.textContent="";
        }else{
            promoPriceCounterReset();
            promoPriceCounter();
            promoBarSecond.classList.add("container__items--product--promoBar-active");
            promoBarFinalPriceSecond.textContent= percent.toFixed(0) + "%";
            promoPriceBodySecond.style.display="inline";
            currencyPromoBodySecond.style.display="inline";
            priceBodySecond.style.textDecoration="line-through";
            priceBodySecond.style.fontWeight="300";
            priceBodySecond.style.color="#384a5c";
            currencyBodySecond.style.textDecoration="line-through"
            currencyBodySecond.style.fontWeight="300";
            currencyBodySecond.style.color="#384a5c";
        }
        currencyBodySecond.innerHTML = modalProduktCurrency.value;
        currencyPromoBodySecond.innerHTML = modalProduktCurrency.value;
        currencyBodyTableSecond.innerHTML = modalProduktCurrency.value;
        flag2 = true;
        }
    })
});
modalProduct[2].addEventListener("click", () =>{
    let flag3 = false;
    modalImage.style.backgroundImage="url(src/img3.png)"
    const productName = document.querySelector(".modalProductName");
    productName.innerHTML=product3.name;
    modalButtonSave.addEventListener('click', ()=>{
        if(!flag3){
        product3.name = modalProduktName.value;
        nameBodyThird.innerHTML = modalProduktName.value;
        nameBodyTableThird.innerHTML = modalProduktName.value;
        priceBodyThird.innerHTML = modalProduktPrice.value;
        priceBodyTableThird.innerHTML = modalProduktPrice.value;
        promoPriceBodyThird.innerHTML = modalProduktpromoPrice.value;
        promoPriceBodyTableThird.innerHTML = modalProduktpromoPrice.value;
        if(modalProduktpromoPrice.value<=0){
            promoPriceBodyThird.style.display="none";
            currencyPromoBodyThird.style.display="none";
            priceBodyThird.style.textDecoration="none";
            priceBodyThird.style.fontWeight="500";
            priceBodyThird.style.color="#862583";
            currencyBodyThird.style.textDecoration="none"
            currencyBodyThird.style.fontWeight="500";
            currencyBodyThird.style.color="#862583";
            promoBarThird.classList.remove("container__items--product--promoBar-active");
            promoBarFinalPriceThird.textContent= "";
        }else{
            promoPriceCounterReset();
            promoPriceCounter();
            promoBarThird.classList.add("container__items--product--promoBar-active");
            promoBarFinalPriceThird.textContent= percent.toFixed(0) + "%";
            promoPriceBodyThird.style.display="inline";
            currencyPromoBodyThird.style.display="inline";
            priceBodyThird.style.textDecoration="line-through";
            priceBodyThird.style.fontWeight="300";
            priceBodyThird.style.color="#384a5c";
            currencyBodyThird.style.textDecoration="line-through"
            currencyBodyThird.style.fontWeight="300";
            currencyBodyThird.style.color="#384a5c";
        }
        currencyBodyThird.innerHTML = modalProduktCurrency.value;
        currencyPromoBodyThird.innerHTML = modalProduktCurrency.value;
        currencyBodyTableThird.innerHTML = modalProduktCurrency.value;
        flag3 = true;
        }
    })
})
