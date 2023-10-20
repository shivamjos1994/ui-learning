// after loading the DOM contents, the function will run and create elements. 
document.addEventListener('DOMContentLoaded', function(){
    let posts = document.getElementById("posts");
    for(i=1; i<=10; i++){
        // create div elements and append it too the main div.
        const div = document.createElement('div');
        div.className = "div";
        div.textContent = "This is a div "+i;
        
        // create buttons and append it to the div elements.
        const button = document.createElement('button');
        button.className = "hide";
        button.textContent = "HIDE";
        posts.append(div);
        div.append(button);
    }
});


// on clicking the button, the parent element of that button that is the div element will get removed.
document.addEventListener('click', event => {
      const element = event.target;
      if (element.className === "hide"){
          element.parentElement.style.animationPlayState = 'running';
          element.parentElement.addEventListener('animationend', function(){
             element.parentElement.remove();
          })
        }
});