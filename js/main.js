let share = document.querySelector(".share-holder")
let shareContent = document.querySelector(".share-content")
share.addEventListener('click', () => {
    if (shareContent.classList.contains("hide")) {
        shareContent.classList.remove("hide")
    } else {
        shareContent.classList.add("hide")
    }
})