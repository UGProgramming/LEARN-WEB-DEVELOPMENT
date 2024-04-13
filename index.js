
 
    window.addEventListener("animationend", () => {
    
      document.querySelector('.loading-page').classList.add('loading-page--hidden')
      document.querySelector('.loading-page').classList.add('spin')
      
}
    
    );

    
      document.addEventListener("DOMContentLoaded", 
                               function(){
                               document.addEventListener("backbutton", backButtonHandler);
                               }
                               
                               );

function backButtonHandler(event){
event.preventDefault();
window.close();
}
