/*==================== SLIDER_BEFORE/AFTER ====================*/
const slider = document.querySelector('.slider')
const before = slider.querySelector('.before')
const beforeImage = before.querySelector('img')
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
