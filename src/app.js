const menu = document.getElementById("menu");
const list = document.getElementById("list");
const profile_button = document.getElementById("pro_btn");
const profile = document.getElementById("profile");
const black = document.getElementById("black");

menu.addEventListener("click" , ()=>{
    list.classList.toggle('invisible');
    list.classList.toggle("mouseOut");
    black.classList.toggle("hidden");
});

profile_button.addEventListener("click" , ()=>{
        profile.classList.toggle("invisible");
        // black.classList.toggle("hidden");
}); 




