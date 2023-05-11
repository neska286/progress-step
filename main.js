const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const progress = document.getElementById('progress')
console.log('circles',circles)

let currentActive = 1

nextBtn.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    progressBar()
})

prevBtn.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    progressBar()
})

function progressBar() {
    circles.forEach((circle,index) => {
        if(index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}