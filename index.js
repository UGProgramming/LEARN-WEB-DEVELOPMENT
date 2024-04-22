window.addEventListener('backbutton'
, 
() => {
event.PreventDefault();
window.close();

});


document.getElementById('continueButton').addEventListener('click', function() {
    // Hide the hidden message
    document.querySelector('.hidden-message').style.display = 'none';
    // Display the body content
    document.querySelector('body').style.display = 'block';
});
