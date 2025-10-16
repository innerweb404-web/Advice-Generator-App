
const adviceId = document.querySelector(".id");
const adviceText = document.querySelector(".advice");
const diceButton = document.querySelector(".icon-dice");

document.getElementById("year").textContent = new Date().getFullYear();


async function getAdvice() {
    try{
        //Fetch data from API
        const response = await fetch("https://api.adviceslip.com/advice", {cache: "no-cache"});
        const data = await response.json();

        const {id, advice} = data.slip;

        adviceId.textContent = id;
        adviceText.textContent = `"${advice}"`
    } catch(error){
        console.error("Error fetching advice:", error);
        adviceText.textContent = "Oops!, couldn't fetch new device..."
    }
    
}

diceButton.addEventListener("click", getAdvice);