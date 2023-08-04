// Code your solutions in this file

function writeCards(namesArray, surprise) {
  let cards = [];
  for (let i = 0; i < namesArray.length; i++) {
    let namesArray = ["Guadalupe", "Ollie", "Aki"];
    const message = `Thank you, ${namesArray[i]}, for the wonderful ${surprise} gift!`;
    cards.push(message);
  }
  return cards;
}
function countDown(integer) {
   let someNumber = 9;
   while (someNumber >= 0) {
     console.log(someNumber--);
  }
  return console.log()
}
