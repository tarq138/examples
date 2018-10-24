window.addEventListener('load', function(){
    const button = document.querySelector('.request');
    const popup = document.querySelector('.popup');
    const close_button = document.querySelector('.closePopup');
    const open_menu = document.querySelector('.openMenu');
    const close_menu = document.querySelector('.closeMenu');
    const menu = document.querySelector('.menu');
    button.addEventListener('click', () => {
        popup.style.display = 'flex';
    })
    close_button.addEventListener('click', () => {
        popup.style.display = 'none';
    })
    open_menu.addEventListener('click', () => {
        menu.style.left = '0';
    })
    close_menu.addEventListener('click', () => {
        menu.style.left = '-50vw';
    })
})

/*form.onsubmit = function(e){
    e.preventDefault();
    console.log('Submitted');
}*/