function changeBackgroundBlack() {
    document.body.style.backgroundColor = 'black'
}

function changeBackgroundWhite() {
    document.body.style.backgroundColor = 'white'
}

function changeBackground(color) {
    document.body.style.backgroundColor = color
}

// const darkButton = document.getElementById('dark_theme_button')
// // darkButton.innerText = "Hahahaha"

// darkButton.addEventListener('click', function() {
//     console.log("Click HO gaya")
//     changeBackground('black')
// })

// const whiteButton = document.getElementById('white_theme_button')

// whiteButton.addEventListener('click', function() {
//     changeBackground('white')
// })

const themeButton = document.getElementById('theme_button')

// let theme = "white"
themeButton.addEventListener('click', () => {
    const currentColor = document.body.style.backgroundColor
    if (!currentColor || currentColor == 'white') {
        changeBackground('black')
        themeButton.innerText = "Light Mode"
    } else {
        changeBackground('white')
        themeButton.innerText = "Dark Mode"
    }
    // if (theme === 'white') {
    //     changeBackground('black')
    //     theme = "black"
    // } else {
    //     changeBackground('white')
    //     theme = "white"
    // }
})

