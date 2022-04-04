
const createElement = function (elName, className, textContent) {
  const createdElement = document.createElement(elName);
  createdElement.className = className;

  if (textContent) {
    createdElement.textContent = textContent;
  }

  return createdElement
}


const appendChildren = function (parentElement, children) {
  for (let i = 0; i < children.length; i++) {
    parentElement.append(children[i])
  }
}



const productsWrapper = document.querySelector(".products-wrapper");

for (let i = 0; i < products.length; i++) {
  const carrenProduct = products[i]
  const elProduct = createElement("li", "col-4");
  productsWrapper.append(elProduct)
  const cardWapper = createElement("div", "card")
  elProduct.append(cardWapper)

  const cartImg = document.createElement("img", "card-img-top")
  cartImg.setAttribute("src", carrenProduct.img)
  cardWapper.append(cartImg)
  const divWrapper = createElement("div", "card-body")
  cardWapper.append(divWrapper)
  const cardTitle = createElement("h3", "card-title", carrenProduct.title)
  divWrapper.append(cardTitle)
  const cartText = createElement("p", "card-text fw-bold", carrenProduct.price)
  divWrapper.append(cartText)
  const mark = createElement("mark",)
  cartText.append(mark)
  const cardText = createElement("p", "card-text", carrenProduct.price)
  divWrapper.append(cardText)
  const cardTexts = document.createElement("s")
  cardText.append(cardTexts)
  const elpWrapper = createElement("p", "badge bg-success", carrenProduct.model)
  divWrapper.append(elpWrapper)
  const elpText = createElement("p", "card-text", carrenProduct.addedDate)
  divWrapper.append(elpText)

  const cartList = createElement("ul", "d-flex flex-wrap list-unstyled")
  divWrapper.append(cartList)
  const cartItem = createElement("li", "badge bg-primary me-1 mb-1", carrenProduct.benefits)
  cartList.append(cartItem)
  const cartItems = createElement("li", "badge bg-primary me-1 mb-1", carrenProduct.benefits)
  cartList.append(cartItems)

  const cartItemlet = createElement("li", "badge bg-primary me-1 mb-1", carrenProduct.benefits)
  cartList.append(cartItemlet)

  const cartItemdet = createElement("li", "badge bg-primary me-1 mb-1", carrenProduct.benefits)
  cartList.append(cartItemdet)

  // for(let i = 0; i < benefits.length; i++){
  //   const benefitslist = benefits[i];
  //   const cartList = createElement("ul","d-flex flex-wrap list-unstyled" )
  //   divWrapper.append(cartList)
  //   const cartItem = createElement("li","badge bg-primary me-1 mb-1",benefitslist)
  //   cartList.append(cartItem)
  //   const cartItems = createElement("li","badge bg-primary me-1 mb-1",benefitslist)
  //   cartList.append(cartItems)

  //   const cartItemlet = createElement("li","badge bg-primary me-1 mb-1",benefitslist)
  //   cartList.append(cartItemlet)

  //   const cartItemdet = createElement("li","badge bg-primary me-1 mb-1",benefitslist)
  //   cartList.append(cartItemdet)
  // console.log(benefitslist)

  // }
}


const form = document.querySelector("#form")
form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const elements = evt.target.elements;

  const producttitle = elements.producttitle;
  const price = elements.price;
  const benefits = elements.benefits;


  const producttitleValue = producttitle.value;
  const priceValue = price.value;
  const benefitsValue = benefits.value;


  for (let i = 0; i < manufacturer.length; i++) {
    const manu = manufacturer[i];
    const { id, name } = manu;
    const manuName = document.createElement("option")
    manuName.name = value.name;
    manuName.textContent.name;
    const manufacturer = document.querySelector("#product-manufacturer")
    manufacturer.append(manuName)
  }


  if (producttitleValue.trim() && priceValue.trim() && benefitsValue.trim()) {
    const formSelect = {
      id: Math.floor(Math.random() * 1000),
      title: producttitleValue,
      img: "https://picsum.photos/300/200",
      model: manu,



    }


  }

})





