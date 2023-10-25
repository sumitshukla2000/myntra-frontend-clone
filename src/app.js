const menu = document.getElementById("menu");
const list = document.getElementById("list");
const profile_button = document.getElementById("pro_btn");
const profile = document.getElementById("profile");
const black = document.getElementById("black");

const container = document.getElementById("container");
const cont = document.getElementById("cont");
    // const div = document.createElement("div");
    // cont.appendChild(div);
    // const img = document.createElement('img');
    // img.src = "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/640px-IMG_Academy_Logo.svg.png";
    // img.classList.add('h-48');
    // div.appendChild(img);

    // const div2 = document.createElement("div");
    
    // const p = document.createElement("p");
    // p.textContent = '1.9'
    // const p1 = document.createElement("p");
    // p1.textContent = 'red shirt'
    // div2.appendChild(p)
    // div2.appendChild(p1)

    // div.appendChild(div2)

menu.addEventListener("click" , ()=>{
    list.classList.toggle('invisible');
    list.classList.toggle("mouseOut");
    black.classList.toggle("hidden");
});

profile_button.addEventListener("click" , ()=>{
        profile.classList.toggle("invisible");
        // black.classList.toggle("hidden");
}); 



var dataArr = []
 fetch("https://fakestoreapi.com/products/category/men's clothing")
.then(req=>req.json())
.then(data=>{
  for(var key in data){
    dataArr.push({
      id:data[key].id,
      title:data[key].title,
      price:data[key].price,
      image:data[key].image
    })
  }  

  dataArr.map(item => {
    const div = document.createElement("div");
    div.classList.add('rounded-md' , 'shadow-lg' , 'overflow-hidden' , 'h-70' , 'w-56');
    cont.appendChild(div);
    const img = document.createElement('img');
    img.classList.add('mx-auto' , 'h-48' , 'object-cover');
    img.src = item.image;
    div.appendChild(img);

    const div2 = document.createElement("div");
    div2.classList.add("bg-white" , "mt-2");
    const p = document.createElement("p");
    p.classList.add("text-md" , "text-center" , "font-avg px-2");
    p.textContent = item.price
    const p1 = document.createElement("p");
    p1.classList.add("text-md" , "font-avg" , "text-center" , "px-2");
    p1.textContent = item.title
    div2.appendChild(p)
    div2.appendChild(p1)
    div.appendChild(div2)
  })

  })
