const names=['Guadalupe','Ollie','Aki'];
const event = "surprise";

function writeCards(names, anEvent) {
  let names1 = [];
  for (let i = 0; i < names.length; i++) {
    names1.push(`Thank you, ${names[i]}, for the wonderful ${anEvent} gift!`)
  }
  return names1;
}


function countDown(j) {
  while (j >= 0) {
    console.log(j);
    j--;
  }
}


