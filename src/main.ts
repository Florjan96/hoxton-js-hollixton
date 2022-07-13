import "./style.css";

let state = {
  store: [],
};

function mainItems() {
  fetch(`http://localhost:3005/store`)
    .then((resp) => resp.json())
    .then((itemsMain) => {
      state.store = itemsMain;
      render();
    });
}
mainItems();
console.log(mainItems());
window.state = state;

function render() {
  let appEl = document.querySelector("#app");
  if (!appEl) return;
  appEl.textContent = "";

  let header = document.createElement("header");
  header.className = "header";

  let headerLeft = document.createElement("div");
  headerLeft.className = "header-left";

  let hollixtonH1 = document.createElement("h1");
  hollixtonH1.textContent = "HOLLIXTON";

  let girls = document.createElement("h4");
  girls.textContent = "Girls";
  let guys = document.createElement("h4");
  guys.textContent = "Guys";

  let sale = document.createElement("h4");
  sale.textContent = "Sale";
  let headerRight = document.createElement("div");
  headerRight.className = "header-right";

  let search = document.createElement("span");
  search.className = "material-symbols-outlined";
  search.textContent = "search";

  let person = document.createElement("span");
  person.className = "material-symbols-outlined";
  person.textContent = "person";

  let bag = document.createElement("span");
  bag.className = "material-symbols-outlined";
  bag.textContent = "local_mall";

  headerLeft.append(hollixtonH1, girls, guys, sale);
  headerRight.append(search, person, bag);
  header.append(headerLeft, headerRight);
  appEl.append(header);
  prove(appEl)
}
render();

function prove() {
  let appEl = document.querySelector("#app");

  let prb=document.createElement('div')
  prb.className='problem'


  for (let items of state.store) {
    //     <div class="post">

    //     <div class="image"> <img src='foto-e-hoxx.png'></div>
    //   <div class="description">Crewneck T-Shirt 3-Pack</div>
    //   <div class="price">$21.99</div>
    // </div>


    let post = document.createElement("div");
    post.className = "post";

    let imageDiv = document.createElement("div");
    imageDiv.className = "image";

    let img = document.createElement("img");
    img.src = items.image
    

    let description = document.createElement("div");
    description.className = "description";
    description.textContent = items.name

    let price = document.createElement("div");
    price.className = "price";
    price.textContent ='$'+ items.price

    imageDiv.append(img);
    post.append(imageDiv, description, price);
    prb.append(post)
    appEl.append(prb);
  }
}

function whenClickEl(){

  let post = document.createElement("div");
  post.className = "post";
  post.addEventListener('click',()=>{
    let appEl = document.querySelector("#app");
    appEl.textContent=''

    let prb=document.createElement('div')
    prb.className='problem'
    
   

    let imageDiv = document.createElement("div");
    imageDiv.className = "image";

    let img = document.createElement("img");
    img.src = items.image
    

    let description = document.createElement("div");
    description.className = "description";
    description.textContent = items.name

    let price = document.createElement("div");
    price.className = "price";
    price.textContent ='$'+ items.price

    imageDiv.append(img);
    post.append(imageDiv, description, price);
    prb.append(post)
    appEl.append(prb);
   




  })

}

whenClickEl()