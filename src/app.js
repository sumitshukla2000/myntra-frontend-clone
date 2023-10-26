const menu = document.getElementById("menu");
const list = document.getElementById("list");
const profile_button = document.getElementById("pro_btn");
const profile = document.getElementById("profile");
const black = document.getElementById("black");


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



