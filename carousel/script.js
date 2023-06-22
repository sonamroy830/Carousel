// Sample reviews data
const reviews = [
    {
        name: "Sonam",
        designation: "Full Stack Engineer",
        avatar: "./assets/Sonam.png",
        review: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
        name: "Mr X",
        designation: "Data Scientist",
        avatar: "./assets/coffee.jpg",
        review: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wa",
    },
    {
        name: "React Guy",
        designation: "Frontend Developer",
        avatar: "./assets/react-icon.png",
        review: "able content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lo",
    },
    {
        name: "Twitter Guy",
        designation: "SDE2",
        avatar: "./assets/twitter-logo.png",
        review: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,",
    },
    {
        name: "YouTube Engineer",
        designation: "SDE10",
        avatar: "./assets/youtube.png",
        review: "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum ge",
    },
];

const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow")
const randomButton = document.getElementById("random")

const avatarField = document.getElementById("avatar")
const nameField = document.getElementById("name")
const designationField = document.getElementById("designation")
const reviewField = document.getElementById("review")

const containerArea = document.getElementById("container")
const showMoreLink = document.getElementById("show-more")
const reviewContainer = document.getElementById("review-container")

let initialIndex = 0
function setData(i) {
    let data = reviews[i]
    if(data) {
        avatarField.src = data.avatar
        nameField.innerText = data.name
        designationField.innerText = data.designation
        reviewField.innerText = data.review
    }
}
setData(initialIndex)

leftArrow.addEventListener("click", async function() {
    await blink()
    if(initialIndex - 1 >= 0) initialIndex--
    else initialIndex = reviews.length - 1
    setData(initialIndex)
})

rightArrow.addEventListener("click", async function() {
    await blink()
    if(initialIndex + 1 < reviews.length) initialIndex++
    else initialIndex = 0
    setData(initialIndex)
})

randomButton.addEventListener("click", async function() {
    await blink()
    let randomIndex = generateRandomIndex()
    while(randomIndex === initialIndex)
        randomIndex = generateRandomIndex()
    setData(randomIndex)
    initialIndex = randomIndex
})

function generateRandomIndex() {
    return Math.floor(Math.random() * reviews.length)
}

async function blink() {
    containerArea.style.opacity = 0.5
    // waiting for 500ms
    await new Promise((resolve) => setTimeout(resolve, 500))
    containerArea.style.opacity = 1
}

showMoreLink.addEventListener("click", function(){
    if(showMoreLink.innerText == "Show more") {
        reviewContainer.style.maxHeight = 'none'
        showMoreLink.innerText = "Show less"
    } else {
        reviewContainer.style.maxHeight = '4.8rem'
        showMoreLink.innerText = "Show more"
    }
    return false
})