const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const mobileMenu = document.getElementById('mobileMenu')
const body = document.body

openMenu.addEventListener('click', function(){
    mobileMenu.classList.add('active')
    // openMenu.style.display = 'none'
    body.classList.add('no-scroll')
})

closeMenu.addEventListener('click', function(){
    mobileMenu.classList.remove('active')
    // openMenu.style.display = 'none'
    body.classList.remove('no-scroll')
})

