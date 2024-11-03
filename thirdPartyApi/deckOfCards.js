// Will practice working with third party APIs here
// Asynchronous functions will be used
// Asynchronous functions allow the program to continue running and perform other tasks while they fetch required data.
// when the asynchronous function completes its task, it calls back the program
async function getData() {
  try {
    const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/draw/?count=1');
    const data = await response.json();
    return data;
  } catch (error) {
    if (error) {
      console.error(error.message);
    }
  }
}

// Create another asynchronous function which waits for getData to complete its data fetch

let displayCard = document.querySelector('#showCard');
let cardName = document.querySelector('#cardName');

async function getCardImage () {
  data = await getData();
  displayCard.innerHTML = `<img src=${JSON.stringify(data.cards[0].image)} alt="Card Image">`;
  cardName.innerHTML = `<h2>${JSON.stringify(data.cards[0].suit)}</h2>`;
}

document.getElementById("showImage").addEventListener("click", ()=>{getCardImage()});