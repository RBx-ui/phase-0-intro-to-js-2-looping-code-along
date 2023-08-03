// Code your solutions in this file

function writeCards(namesArray, surprise) {
  const cards = [];
  for (let i = 0; i < namesArray.length; i++) {
    let namesArray = ["Guadalupe", "Ollie", "Aki"];
    const message = `Thank you, ${namesArray[i]}, for the wonderful ${surprise} gift!`;
    cards.push(message);
    
  }
  return cards;

function countDown(number) {
  let number = 10;
  while (number >= 0) {
    console.log(number--);
  }
}


