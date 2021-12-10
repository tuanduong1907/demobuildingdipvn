// Scroll
window.addEventListener("scroll", reveal)

function reveal() {
    var reveals = document.querySelectorAll('.reveal')
    for(var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight
        var revealTop = reveals[i].getBoundingClientRect().top
        var revealPoint = 80

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }else {
            reveals[i].classList.remove('active');
        }
    }
}


//  animation text
new TypeIt("#type1", {
    speed: 150,
    loop: true,
    waitUntiVisible: true,
}).type("DIP VIETNAM", { delay: 400 })
    .pause(500)
    .delete(9)
    .go()

// Click menu
function handleMenu(event) {
    event.stopPropagation();
    document.getElementById('show-sub-menu').classList.toggle('active')
}

$(window).click(function (e) {
    var test = document.querySelector('.active')
    if (test || test !== null) {
        document.getElementById('show-sub-menu').classList.remove('active')
    }

});

// Click Menu Mobile
function handleMenuMobile(event) {
    event.stopPropagation();
    document.getElementById('show-sub-menu-moble').classList.toggle('active')
}

$(window).click(function (e) {
    var test = document.querySelector('.active')
    if (test || test !== null) {
        document.getElementById('show-sub-menu-moble').classList.remove('active')
    }

});

// Click Button pay
function handleMenuPay(event) {
    event.stopPropagation();
    document.querySelector('.pay-list').classList.toggle('active')
}

$(window).click(function (e) {
    var test = document.querySelector('.active')
    if (test || test !== null) {
        document.querySelector('.pay-list').classList.remove('active')
    }

});







