const treasureBtn = document.querySelector("#treasureBtn");
const bankBtn = document.querySelector("#bankBtn");
const bankDisplay = document.querySelector("#bankDisplay");
const bagDisplay = document.querySelector("#bagDisplay");
const logDisplay = document.querySelector("#logDisplay");

let bag = 0;
let bank = 0;
let lost;
//rollGold();
//console.log(bag); tested works

treasureBtn.addEventListener("click", (e) => {
  rollEncounter();
});

bankBtn.addEventListener("click", (e) => {
  bankGold();
});

function bankGold() {
  bank = bank + bag;
  bag = 0;
  bankDisplay.textContent = `Bank:${bank}`;
  return bank;
}

function rollEncounter() {
  let encounter;
  let randomEncounter = Math.floor(Math.random() * 5);
  if (randomEncounter === 0) {
    encounter = "dragon";
    lost = true;
    bag = 0;
    logDisplay.textContent = "You got Dragon";
    return true;
  } else {
    encounter = "gold";
    let randomGold = Math.floor(Math.random() * 50);
    randomGold = randomGold + 1;
    bag = bag + randomGold;
    bagDisplay.textContent = `Bag: ${bag}`;
    logDisplay.textContent = "You got Gold";

    lost = false;
    console.log(encounter);
    return lost;
  }
}
