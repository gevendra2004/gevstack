
var see_content = document.querySelector('.see_content');
var contact_details = document.querySelector('.contact_details');

see_content.addEventListener('click', () => {
    var container = document.querySelector('.container');
    var content_container = document.querySelector('.content_container');
    if (container.style.maxHeight) {
        container.style.maxHeight = null;
        contact_details.classList.remove('active');


    } else {
        container.style.maxHeight = container.scrollHeight + "px";
        contact_details.classList.add('active');
    
    }

})