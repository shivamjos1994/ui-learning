function showPage(page){                                             
    document.querySelectorAll('div').forEach(div=>{
        div.style.display = 'none';                            /* all the data except the data button you clicked on will be invisible*/
    })
    document.querySelector(`#${page}`).style.display = 'block';      /* showing the particular data*/
}

document.addEventListener('DOMContentLoaded', function(){                  /* after loading the content on the page*/
    document.querySelectorAll('button').forEach(button =>{
        button.onclick = function(){                         /* on clicking the particular button, respective data will be shown*/
            showPage(this.dataset.page);
        }
    });
});