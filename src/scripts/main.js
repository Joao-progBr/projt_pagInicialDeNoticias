const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const mobileMenu = document.getElementById('mobileMenu')

openMenu.addEventListener('click', function(){
    mobileMenu.classList.add('active')
    // openMenu.style.display = 'none'
})

closeMenu.addEventListener('click', function(){
    mobileMenu.classList.remove('active')
    // openMenu.style.display = 'none'
})

