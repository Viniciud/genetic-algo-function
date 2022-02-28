let target = 0;
let maxX = -10;
let interval = [-10, 10];
let popMax;
let mutationRate = 0.1;
let crossoverRate = 0.7
let population = 4;

let bestNumber;
let allNumbers;
let stats;
var numBits = 4;

function setup() {
  createCanvas(640, 360);
  target = (maxX * maxX) - 3 * (maxX) + 4;
  let pop = new Population(target, mutationRate, crossoverRate, population);
  console.log('POPULATION ', pop)
  console.log('target ', target)
}

function draw() {
  background(220);
}

function displayInfo() {
  // Display current status of population
  // let answer = population.getBest();

  // bestPhrase.html("Best phrase:<br>" + answer);

  // let statstext =
  //   "total generations:     " + population.getGenerations() + "<br>";
  // statstext +=
  //   "average fitness:       " + nf(population.getAverageFitness()) + "<br>";
  // statstext += "total population:      " + popmax + "<br>";
  // statstext += "mutation rate:         " + floor(mutationRate * 100) + "%";

  // stats.html(statstext);

  // allPhrases.html("All phrases:<br>" + population.allPhrases());
}




