/**
 * window.onscroll is used, when a user scrolls down and reaches at the end of the page, something should happen.
 * Here the color changes to green when the user reaches at the bottom of the page.
 * ()=> defines an arrow function, it's a shorthand for function()
 */
window.onscroll = ()=>{
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight){         // it calculates the bottom of the screen
    document.querySelector('body').style.background = "green";
  }
  else{
    document.querySelector('body').style.background = "white";
  }
};


// after the contents being loaded 
document.addEventListener('DOMContentLoaded', function(){     
    let div = document.getElementById('div');
      for(let i=1; i<=100; i++){
        let para = document.createElement("p");
        para.textContent = "Para " +i;
        div.appendChild(para);
      }
    });
