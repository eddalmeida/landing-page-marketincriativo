
function menuShow(){

    let menuMobile = document.querySelector('.mobile-menu')
    let icon = document.getElementById('icon')

    if (menuMobile.classList.contains('ativo')){

        menuMobile.classList.remove('ativo')
        menuMobile.classList.add('inativo')
        icon.innerHTML = `<i class='bx bx-menu'></i>`
    }else{

        menuMobile.classList.remove('inativo')
        menuMobile.classList.add('ativo')
        icon.innerHTML = `<i class='bx bx-menu-alt-right'></i>`
    }
}

