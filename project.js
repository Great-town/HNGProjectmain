const timeDiv = document.querySelector(".time-container")
const currentTime = Date.now();

timeDiv.innerHTML = `Current Time: ${currentTime}`

const links = document.querySelector(".link")


    links.addEventListener('keydown', (e) => {
        if (e.key === 'b') {
            links.click();
        }
    })
