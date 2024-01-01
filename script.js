let star1 = document.getElementById("num1");
let star2 = document.getElementById("num2");
let star3 = document.getElementById("num3");
let star4 = document.getElementById("num4");
let star5 = document.getElementById("num5");
let thx = document.getElementById("thx");


star1.addEventListener("click", function(){
    star1.classList.add("fa-solid");
    star2.classList.remove("fa-solid");
    star3.classList.remove("fa-solid");
    star4.classList.remove("fa-solid");
    star5.classList.remove("fa-solid");
    thx.innerText = "Ow we hope next time you'll be satisfied"
});
star2.addEventListener("click", function(){
    star1.classList.add("fa-solid");
    star2.classList.add("fa-solid");
    star3.classList.remove("fa-solid");
    star4.classList.remove("fa-solid");
    star5.classList.remove("fa-solid");
    thx.innerText = "Can you tell us what u didn't like?"
});
star3.addEventListener("click", function(){
    star1.classList.add("fa-solid");
    star2.classList.add("fa-solid");
    star3.classList.add("fa-solid");
    star4.classList.remove("fa-solid");
    star5.classList.remove("fa-solid");
    thx.innerText = "We'll make our service better soon"
});
star4.addEventListener("click", function(){
    star1.classList.add("fa-solid");
    star2.classList.add("fa-solid");
    star3.classList.add("fa-solid");
    star4.classList.add("fa-solid");
    star5.classList.remove("fa-solid");
    thx.innerText = "It looks like you liked our service :) !"
});
star5.addEventListener("click", function(){
    star1.classList.add("fa-solid");
    star2.classList.add("fa-solid");
    star3.classList.add("fa-solid");
    star4.classList.add("fa-solid");
    star5.classList.add("fa-solid");
    thx.innerText = "Thank you for your support we really apreciate that!"
});