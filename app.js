//This function fetches the joke, and dynamically renders it into the HTML document 

const getJoke = async() => {

    //Get a response from the API
    const response = await axios.get("https://sv443.net/jokeapi/v2/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart")

    //Use the DOM to get the div which will display our joke. Dynamically render a button with the setup line.
    const firstPart = document.querySelector(".joke-content")
    firstPart.innerHTML = `

    <h1>${response.data.setup}</h1>
    <a class="btn" href="#">Click for the joke!</a>`

    //Attach an event listener to that button, which will display the delivery line, along with updating the button to refresh the page
    const btn = document.querySelector(".btn")
    btn.addEventListener("click", () => {
        firstPart.innerHTML = `
        <h1>${response.data.delivery}</h1>
        <a class="btn" href="">Another one!</a>`
    })
}


getJoke()