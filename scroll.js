window.onscroll = ()=>{
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight){
    document.querySelector('body').style.background = "green";
  }
  else{
    document.querySelector('body').style.background = "white";
  }
};


document.addEventListener('DOMContentLoaded', function(){
    let div = document.getElementById('div');
      for(let i=1; i<=100; i++){
        let para = document.createElement("p");
        para.textContent = "Para " +i;
        div.appendChild(para);
      }
    });
