let target = 0;
let maxX = -10;
let interval = [-11, 11];
let popMax;
let maxGenerations = 5;
let mutationRate = 0.1;
let crossoverRate = 0.7
let population;

let bestNumber;
let allNumbers;
let stats;
var numBits = 4;

function setup() {
  bestNumber = createP("Best number:");
  bestNumber.class("best");

  allNumbers = createP("All numbers:");
  allNumbers.position(600, 10);
  allNumbers.class("all");

  stats = createP("Stats");
  stats.class("stats");

  //createCanvas(640, 360);
  popMax = 4;
  mutationRate = 0.01;
  target = (maxX * maxX) - 3 * (maxX) + 4;
  population = new Population(target, mutationRate, crossoverRate, popMax);
  console.log('POPULATION ', pop)
  console.log('target ', target)
}

function draw() {
  // Generate mating pool
  population.tournamentSelection();
  //Create next generation
  population.generate();

  population.evaluate();

  displayInfo();

  if (population.isFinished() || population.generations == maxGenerations) {
    noLoop();
  }
}

function displayInfo() {
  let answer = population.getBest();

  bestNumber.html("Best number:<br>" + answer);

  let statstext =
    "total generations:     " + population.getGenerations() + "<br>";

  statstext += "total population:      " + popMax + "<br>";
  statstext += "mutation rate:         " + floor(mutationRate * 100) + "%";

  stats.html(statstext);

  allNumbers.html("All numbers:<br>" + population.allNumbers());
}




