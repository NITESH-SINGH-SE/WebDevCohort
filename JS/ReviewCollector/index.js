const message = document.getElementById("message")
const submitBtn = document.getElementById("submit-btn")
const reviewList = document.getElementById("review-list")
const avgerageRating = document.getElementById("average-rating")
const stars = document.querySelectorAll("#rating svg")
const totalRating = document.getElementById("total-rating")
const percent5 = document.getElementById("percent5")
const percent4 = document.getElementById("percent4")
const percent3 = document.getElementById("percent3")
const percent2 = document.getElementById("percent2")
const percent1 = document.getElementById("percent1")


let rating = 0
let reviews = []

console.log(stars);

function coloredStars(rating) {
    let res = ``
    for (let i=0; i <rating; ++i) {
        res += `<svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>`
    }
    for (let i = 0; i < 5-rating; ++i) {
        res += `<svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="grey" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>`
    }
    return res
}

function fillColors(rating) {
    for (let i=0; i <rating; ++i) {
        stars[i].style.fill = 'yellow'
    }
    for (let i = rating; i < 5; ++i) {
        stars[i].style.fill = 'grey'
    }
}

stars.forEach((star, index) => {
    // console.log(star);
    star.addEventListener('click', () => {
        console.log(`Clicked star ${index + 1}`);
        rating = index+1
        // Color stars
        fillColors(rating)
        // star.style.fill = 'yellow'
    })
    console.log(rating);
})

function generateDiv(message, rating) {
    let res = coloredStars(rating)
    
    return `<div class="review-items">
                <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
                <div class="flex justify-start">
                    ${res}
                </div>
                <div class="p-2">${message}</div>
            </div>`
}

function calculateAvg() {
    const n = reviews.length;
    let sum = 0;
    for (let i = 0; i < n; ++i) {
        sum += reviews[i].rating
    }
    return (sum/n).toFixed(2)
}

function calculatePercent(value) {
    const n = reviews.length;
    let cnt = 0;
    for (let i = 0; i < n; ++i) {
        if (reviews[i].rating == value) {
            cnt += 1
        }
    }
    return ((cnt/n)*100).toFixed(2)
}

function showOverview() {
    const avg = calculateAvg()
    avgerageRating.innerText = `${avg}`

    totalRating.innerText = `${reviews.length} rating(s)`

    p1 = calculatePercent(1)
    p2 = calculatePercent(2)
    p3 = calculatePercent(3)
    p4 = calculatePercent(4)
    p5 = calculatePercent(5)

    percent1.style.width = `${p1}%`
    percent2.style.width = `${p2}%`
    percent3.style.width = `${p3}%`
    percent4.style.width = `${p4}%`
    percent5.style.width = `${p5}%`
}

function updateAverage() {
    if (reviews.length > 0) {
        showOverview()
    }
}

function addReviews() {
    const msg = message.value

    if(rating == 0) {
        alert("Please provide rating")
        return 
    }

    const review = {
        message: msg,
        rating: rating,
    }

    const div = generateDiv(msg, rating)
    message.value = ''
    // Reset rating
    fillColors(0)

    reviewList.innerHTML = div + reviewList.innerHTML

    reviews.unshift(review)
    console.log(reviews);

    updateAverage()
}

submitBtn.addEventListener("click", addReviews)