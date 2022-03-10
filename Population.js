

class Population {
    constructor(target, mutation, crossoverRate, popNumber) {
        this.population = [];
        this.matingPool;
        this.generations = 0;
        this.finished = false;
        this.target = target;
        this.mutationRate = mutation;
        this.crossoverRate = crossoverRate;

        this.best = "";


        for (let i = 0; i < popNumber; i++) {
            this.population[i] = new DNA(interval);
        }
        console.log('POPULATION ', this.population);
    }

    tournamentSelection() {
        this.matingPool = [];

        for (let i = 0; i < this.population.length; i++) {
            let p1 = floor(random(this.population.length));
            let p2;
            let theBest;
            do {
                p2 = floor(random(this.population.length));
            } while (p1 == p2);

            theBest = this.population[p1].fitness >= this.population[p2].fitness
                ? this.population[p1] : this.population[p2];

            this.matingPool.push(theBest);
        }

        console.log('MATING POOL ', this.matingPool);
    }

    generate() {
        for (let i = 0; i < this.population.length; i++) {
            let a = floor(random(this.matingPool.length));
            let b;
            do {
                b = floor(random(this.matingPool.length));
            } while (a == b);
            let partnerA = this.matingPool[a];
            let partnerB = this.matingPool[b];

            let child = partnerA.crossover(partnerB, this.crossoverRate);
            child.mutate(this.mutationRate);
            this.population[i] = child;
        }
        this.generations++;
    }

    evaluate() {
        let worldrecord = 0;
        let index = 0;
        for (let i = 0; i < this.population.length; i++) {
            if (this.population[i].fitness > worldrecord) {
                index = i;
                worldrecord = this.population[i].fitness;

            }
        }
        console.log('WORD RECORD ', worldrecord)
        this.best = this.population[index].translatedGen;
        if (worldrecord == this.target) {
            this.finished = true;
        }
    }

    getBest() {
        return this.best;
    }

    isFinished() {
        return this.finished;
    }

    getGenerations() {
        return this.generations;
    }

    allNumbers() {
        let everything = "";

        let displayLimit = min(this.population.length, 50);

        for (let i = 0; i < displayLimit; i++) {
            everything += this.population[i].translatedGen + "<br>";
        }
        return everything;
    }

}