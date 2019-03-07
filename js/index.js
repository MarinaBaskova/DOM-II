// Your code goes here
/* 
 mouseover
 keydown
 wheel
 drag / drop
 load
 focus
 resize
 scroll
 select
 dblclick

 1. find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.
 2. Nest two similar events somewhere in the site and prevent the event propagation properly
 3. Stop the navigation from items from refreshing the page by using preventDefault()
*/


// MOUSEOVER

const mainHeader= document.querySelector('.content-section, .text-content, h2');

mainHeader.addEventListener('mouseover', function(event){
    event.target.style.color = "orange";
});

//keydown

const homeContainer = document.querySelector('.home');

homeContainer.addEventListener('keydown', function(event){
    console.log(`A key was pressed ${event.key}`); 
});

// wheel
let allH2 = document.querySelectorAll('h2');


allH2.forEach(function(el){
    el.addEventListener('wheel', function(){
        event.target.style.fontSize = "10rem";
});
});

//drag and drop
let draggableH4 = document.getElementById('draggable')
draggableH4.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
  });
  
let dropzone = document.querySelector('.droptarget')
  dropzone.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  dropzone.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
      let data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
    }
  });

  // load
  window.addEventListener("load", function(event) {
    //alert("All resources finished loading!");
  });

  //focus ?

  const footerHome = document.querySelector('footer p');
  console.log(footerHome)

  footerHome.addEventListener('focus', function(event){
    event.target.style.backgroundColor = 'aquamarine';
  });

  // resize 
window.addEventListener('resize', function (event) {
    let w = window.outerWidth;
    let h = window.outerHeight;
    let windowWandH = `Window size: width=${w} and height ${h}`;
    console.log(windowWandH)
});

// scroll ?

let headerImg = document.querySelector('intro, img');
console.log(headerImg)
headerImg.addEventListener('scroll', function(event){
    event.target.style.width = '20%';
})



// select  
const input = document.querySelector('input');

input.addEventListener('select', function(event){
    const log = document.getElementById('selectedText');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  });

//dblclick

const allBtn = document.querySelectorAll('.btn');
let arrBtn = Array.from(allBtn)

arrBtn.forEach(function(el){
      el.addEventListener('dblclick', function(event){
          event.target.style.backgroundColor= "pink";
      })
  })

  

let navLink = document.querySelectorAll('.nav-link')
console.log(navLink)
let arrNavLinks = Array.from(navLink)
console.log(arrNavLinks)

arrNavLinks.forEach(function(el){
    el.addEventListener('click', function(event){
        event.target.style.color = 'pink';
        event.stopPropagation();
    })
})

let navTop = document.querySelector('.nav')
console.log(navTop)
navTop.addEventListener('click', function(event){
    event.target.style.backgroundColor = 'yellow';
    event.preventDefault();
})



// stretch 
let logo = document.querySelector('.logo-heading')
console.log(logo)

logo.addEventListener('mouseout', function(event){
  
    TweenMax.to(".logo", 1, {x: 100, ease: Bounce.easeOut});
})