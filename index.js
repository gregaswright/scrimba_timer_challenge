let timerArray = []

const timerForm = document.querySelector("#timer-form")
timerForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const timeTitle = event.target.title.value
    const timeLength = event.target.length.value

    const timerObject = {
        timeTitle: timeTitle,
        timeLength: timeLength
    }

    timerArray.push(timerObject)
    
    console.log(timerArray)
})

const renderTimers = (timerArray) => {
    timerArray.forEach(timer)
} 