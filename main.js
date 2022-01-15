const container = document.querySelector("#container");
const total = document.getElementById("total");
let totalPrice = 0;


const pr1 = {
  name: "Food",
  price: 12,
  image: "./image.jpg",
};
const pr2 = {
  name: "shoes",
  price: 6,
  image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9775786cd7b446af9ddcac5e004a275e_9366/chaussure-forum-low.jpg"
};

const pr3 = {
  name: "Covid mask",
  price: 0.25,
  image:"https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2020-02/mascarilla-1400x896.png?itok=m3jJoOZi",
};
const pr4 ={
  name: "bag",
  price: 20,
  image:"https://www.ikea.com/us/en/images/products/spikrak-shopping-bag-cotton-natural__0968684_pe810513_s5.jpg?f=s"
}

const database = [pr1, pr2, pr3, pr4];

database.forEach(function (product){

const cart = document.createElement("div");
cart.setAttribute("class", "cart");
const imageProduct = document.createElement("img");
imageProduct.setAttribute("src", product.image);
imageProduct.setAttribute("width","250px");
imageProduct.setAttribute("height", "200px");

const productName = document.createElement("h4");
productName.innerText = product.name;
const productPrice = document.createElement("h5");
productPrice.innerText = product.price;
const addBtn = document.createElement("button");
addBtn.innerText = "Add";

 addBtn.onclick = function(){
   totalPrice = totalPrice + product.price ;
   total.innerText = totalPrice + " $";
 }



cart.append(imageProduct);
cart.append(productName);
cart.append(productPrice);
cart.append(addBtn);

container.append(cart);
});


// connect with server 

// fetch("http://192.168.0.143:1337/").then((data)=>{
//   data.json().then(function(info){
//       const prList = info.productList;   
// prList.forEach(function (product){

// const cart = document.createElement("div");
// cart.setAttribute("class", "cart");
// const imageProduct = document.createElement("img");
// imageProduct.setAttribute("src", product.img);
// imageProduct.setAttribute("width","250px");
// imageProduct.setAttribute("height", "200px");

// const productName = document.createElement("h4");
// productName.innerText = product.name;
// const productPrice = document.createElement("h5");
// productPrice.innerText = product.price;
// const addBtn = document.createElement("button");
// addBtn.innerText = "Add";

//  addBtn.onclick = function(){
//    totalPrice = totalPrice + product.price ;
//    total.innerText = totalPrice + " $";
//  }


// cart.append(imageProduct);
// cart.append(productName);
// cart.append(productPrice);
// cart.append(addBtn);

// container.append(cart);
// });
//       })
//   })


