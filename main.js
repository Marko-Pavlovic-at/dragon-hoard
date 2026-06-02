const treasureBtn = document.querySelector("#treasureBtn");
const bankBtn = document.querySelector("#bankBtn");
const bankDisplay = document.querySelector("#bankDisplay");
const bagDisplay = document.querySelector("#bagDisplay");
const logDisplay = document.querySelector("#logDisplay");
const currentRunDisplay = document.querySelector("#currentRunDisplay");
const bestRunDisplay = document.querySelector("#bestRunDisplay");
const resetBtn = document.querySelector("#resetBtn");

let bag = 0;
let bank = 0;
let lost = false;
let run = 0;
let bestRun = 0;
//rollGold();
//console.log(bag); tested works

resetBtn.addEventListener("click", (e) => {
  reset();
});

treasureBtn.addEventListener("click", (e) => {
  rollEncounter();
  runRender();
});

bankBtn.addEventListener("click", (e) => {
  bankGold();
});

function reset() {
  bag = 0;
  bank = 0;
  run = 0;
  currentRunDisplay.textContent = "";
  logDisplay.textContent = "";
  bagDisplay.textContent = "";
  bankDisplay.textContent = "";
}

function runRender() {
  if (lost === false) {
    run = run + 1;
    currentRunDisplay.innerHTML = `Current run: ${run}`;
  } else if (lost === true) {
    if (run > bestRun) {
      bestRun = run;
      bestRunDisplay.innerHTML = `Best run: ${bestRun}`;
    } else if (bestRun > run) {
      bestRun = bestRun;
    }
    run = 0;
  }
}

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
