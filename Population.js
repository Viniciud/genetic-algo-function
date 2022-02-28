

class Population {
    constructor(t, mutation, crossoverRate, popNumber) {
        this.population;
        this.matingPool;
        this.generations = 0;
        this.finished = false;
        this.target = t;
        this.mutationRate = mutation;
        this.crossoverRate = crossoverRate;
        this.popPercent = [];
        this.perfectScore = 1;

        this.best = "";

        this.population = [];
        for (let i = 0; i < popNumber; i++) {
            this.population[i] = new DNA(interval);
        }
        console.log('POPULATION ', this.population);
        this.population[0].crossover(new DNA(interval), this.crossoverRate);
        this.population[0].mutate(mutation);
        this.matingPool = [];
        this.calcFitness();
    }

    calcFitness() {
        let popSum = 0;
        for (let i = 0; i < this.population.length; i++) {
            popSum += this.population[i].calcFitness();
        }
        console.log('POP SUM ', popSum);

        for (let i = 0; i < this.population.length; i++) {
            this.popPercent.push(this.population[i].calcFitness() / popSum)
        }

        console.log('PERCENTS ', this.popPercent);

    }

}