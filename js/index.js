// Your code goes here


const zoom = document.querySelector(".intro img");
// console.log(zoom);

// mouse enter events
zoom.addEventListener("mouseenter", ()=>{
    zoom.style.transform = "scale(1.2)";
    zoom.style.transition = "all 0.3s"
})

// mouse leave event
zoom.addEventListener("mouseleave", ()=>{
    zoom.style.transform = "scale(1)";
    zoom.style.transition = "all 0.3s"
})

// click event
 document.querySelectorAll("h2").forEach(item => {
    item.addEventListener("click", () => {
      item.style.color="aqua";
    })
  })

// wheel event
const bigImg = document.querySelector(".img-content");
console.log(bigImg);
bigImg.addEventListener("wheel", ()=>{
    bigImg.style.transform = "scale(1.2)";
    bigImg.style.transition = "all 0.2s"
})

// double click event
const changeImg = document.querySelector('.content-destination img');
// console.log(changeImg);
changeImg.addEventListener("dblclick", () => {
  changeImg.src = "https://images.unsplash.com/photo-1562259977-efaac75abd24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
})

// click event
document.querySelectorAll("h4").forEach(item => {
    item.addEventListener("click", () => {
      item.style.color="pink";
    })
  })

  // click event
  const myButton = document.querySelectorAll(".btn").forEach((bt)=>{
      bt.addEventListener('click', greet, false)
      function greet(event){
    
        alert('Hi Web25');     
    }
  })

  // mouse enter events
  document.querySelectorAll(".destination p").forEach((bg) => {
    //   console.log(bg);
    bg.addEventListener("mouseenter", () =>{
        bg.style.background = "lightgray";
    })
})

// mouse leaves events
document.querySelectorAll(".destination p").forEach((bg) => {
    // console.log(bg);
  bg.addEventListener("mouseleave", () =>{
      bg.style.background = "snow";
  })
})

// mouse enter events
document.querySelectorAll(".content-section").forEach((bg) => {
    // console.log(bg);
  bg.addEventListener("mouseenter", () =>{
      bg.style.background = "lightgray";
  })
})

// mouse leaves events
document.querySelectorAll(".content-section").forEach((bg) => {
    // console.log(bg);
  bg.addEventListener("mouseleave", () =>{
      bg.style.background = "white";
  })
})

// scroll event
const backColor = document.querySelector("body");
window.addEventListener('scroll', () => {
    backColor.style.backgroundColor="slategray";
  })