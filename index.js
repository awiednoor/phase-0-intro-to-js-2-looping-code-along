// Code your solutions in this file

const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(arr, eventName) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`);
  }
  return newArray;
}

console.log(writeCards(['Charlie', 'Samip', 'Ali'], 'birthday'));

function countDown(num) {
  if (num >= 0) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  } else {
    return 'not positive integer';
  }
}
countDown(10);
