
// Initialize Swiper
        var swiper = new Swiper(".discover__container", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            loop: true,
            spaceBetween: 32,
            coverflowEffect: {
                rotate: 0,
            },
        });


/*==================== SLIDER_BEFORE/AFTER ====================*/
const slider = document.querySelector('.slider')
const before = slider.querySelector('.before')
const beforeImage = before.querySelector('#img-before')
const change = slider.querySelector('.change')
const body = document.body

let isActive = false

document.addEventListener('DOMContentLoaded', () => {
    let widt = slider.offsetWidth;
    beforeImage.style.width = widt + 'px'
})

const beforeAfterSlider = (x) => {
    let shift = Math.max(0, Math.min(x, slider.offsetWidth))
    before.style.width = shift + 'px'
    change.style.left = shift + 'px'
}

const pauseEvents = (e) => {
    e.stopPropagation()
    e.preventDefault()
    return false
}

slider.addEventListener('mousedown', () => {
    isActive = true
})

slider.addEventListener('mouseup', () => {
    isActive = false
})

slider.addEventListener('mouseleave', () => {
    isActive = false
})

slider.addEventListener('mousemove', (e) => {
    if (!isActive) {
        return
    }

    let x = e.pageX

    x -= slider.getBoundingClientRect().left
    beforeAfterSlider(x)
    pauseEvents(e)
})

// for mobile devise

slider.addEventListener('touchstart', () => {
    isActive = true
})

slider.addEventListener('touchend', () => {
    isActive = false
})

slider.addEventListener('touchcancel', () => {
    isActive = false
})

slider.addEventListener('touchmove', (e) => {
    if (!isActive) {
        return
    }

    let x
    let i

    for (i = 0; i < e.changedTouches.length; i++) {
        x = e.changedTouches[i].pageX
    }

    x -= slider.getBoundingClientRect().left
    beforeAfterSlider(x)
    pauseEvents(e)
})



/*==================== SLIDER_BEFORE/AFTER 2 ====================*/
const slider2 = document.querySelector('#slider2')
const before2 = slider2.querySelector('#before2')
const beforeImage2 = before2.querySelector('#img-before2')
const change2 = slider2.querySelector('#change2')
const body2 = document.body

let isActive2 = false

document.addEventListener('DOMContentLoaded', () => {
    let widt = slider2.offsetWidth;
    beforeImage2.style.width = widt + 'px'
})

const beforeAfterSlider2 = (x) => {
    let shift = Math.max(0, Math.min(x, slider2.offsetWidth))
    before2.style.width = shift + 'px'
    change2.style.left = shift + 'px'
}

const pauseEvents2 = (e) => {
    e.stopPropagation()
    e.preventDefault()
    return false
}

slider2.addEventListener('mousedown', () => {
    isActive2 = true
})

slider2.addEventListener('mouseup', () => {
    isActive2 = false
})

slider2.addEventListener('mouseleave', () => {
    isActive2 = false
})

slider2.addEventListener('mousemove', (e) => {
    if (!isActive2) {
        return
    }

    let x = e.pageX

    x -= slider2.getBoundingClientRect().left
    beforeAfterSlider2(x)
    pauseEvents2(e)
})

// for mobile devise

slider2.addEventListener('touchstart', () => {
    isActive2 = true
})

slider2.addEventListener('touchend', () => {
    isActive2 = false
})

slider2.addEventListener('touchcancel', () => {
    isActive2 = false
})

slider2.addEventListener('touchmove', (e) => {
    if (!isActive2) {
        return
    }

    let x
    let i

    for (i = 0; i < e.changedTouches.length; i++) {
        x = e.changedTouches[i].pageX
    }

    x -= slider2.getBoundingClientRect().left
    beforeAfterSlider2(x)
    pauseEvents2(e)
})


/*==================== SLIDER_BEFORE/AFTER 2 ====================*/
const slider3 = document.querySelector('#slider3')
const before3= slider3.querySelector('#before3')
const beforeImage3 = before3.querySelector('#img-before3')
const change3 = slider3.querySelector('#change3')
const body3 = document.body

let isActive3 = false

document.addEventListener('DOMContentLoaded', () => {
    let widt = slider3.offsetWidth;
    beforeImage3.style.width = widt + 'px'
})

const beforeAfterSlider3 = (x) => {
    let shift = Math.max(0, Math.min(x, slider3.offsetWidth))
    before3.style.width = shift + 'px'
    change3.style.left = shift + 'px'
}

const pauseEvents3 = (e) => {
    e.stopPropagation()
    e.preventDefault()
    return false
}

slider3.addEventListener('mousedown', () => {
    isActive3 = true
})

slider3.addEventListener('mouseup', () => {
    isActive3 = false
})

slider3.addEventListener('mouseleave', () => {
    isActive3 = false
})

slider3.addEventListener('mousemove', (e) => {
    if (!isActive3) {
        return
    }

    let x = e.pageX

    x -= slider3.getBoundingClientRect().left
    beforeAfterSlider3(x)
    pauseEvents3(e)
})

// for mobile devise

slider3.addEventListener('touchstart', () => {
    isActive3 = true
})

slider3.addEventListener('touchend', () => {
    isActive3 = false
})

slider3.addEventListener('touchcancel', () => {
    isActive3 = false
})

slider3.addEventListener('touchmove', (e) => {
    if (!isActive3) {
        return
    }

    let x
    let i

    for (i = 0; i < e.changedTouches.length; i++) {
        x = e.changedTouches[i].pageX
    }

    x -= slider3.getBoundingClientRect().left
    beforeAfterSlider3(x)
    pauseEvents3(e)
})