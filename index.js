


window.addEventListener('backbutton'
, 
() => {
event.PreventDefault();
window.close();

});

window.addEventListener("loaderror", (event) => {
  alert("The network connection has been lost2.");
});


window.addEventListener("offline", (event) => {
  alert("The network connection has been lost.");
});




document.querySelector('.pfade').addEventListener('click', function() {
    // Hide the hidden message
    document.querySelector('.complete-page').style.display = 'block';
    // Display the body content
    document.querySelector('.instruction').style.display = 'none';
document.querySelector('.phone-rotate').style.display = 'none';
document.querySelector('.pfade').style.display = 'none';
    
});
