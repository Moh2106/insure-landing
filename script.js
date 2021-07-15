let hamburger = document.getElementById('hamburger')
let list = document.querySelector('.list')
let different = document.getElementById('different')
let footerMedia = document.getElementById('footerMedia')
let humanizing = document.getElementById('humanizing')


hamburger.addEventListener('click', show)

function show(){
    list.classList.toggle('liste')
    hamburger.classList.toggle('hambur')
    different.classList.toggle('differentMove')
    footerMedia.classList.toggle('footerMove')
    humanizing.classList.toggle('humanizingMargin')
    //document.getElementById("image").src="images/icon-close.svg";
}