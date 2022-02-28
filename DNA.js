class DNA {
    constructor(interval) {
        this.alelos = [0, 1];
        this.translatedGen = parseInt(random(interval[0], interval[1]));
        this.encodedGen = this.dec2bin(this.translatedGen);
        this.fitness = this.calcFitness();
    }

    calcFitness() {
        let score = 0;
        // x*x - 3x + 4
        score = (this.translatedGen * this.translatedGen) - (3 * this.translatedGen) + 4;
        return score;
    }

    crossover(partner, crossoverRate) {
        let child = new DNA(interval);

        console.log('THIS ', this.encodedGen)
        console.log('PARTNER ', partner.encodedGen)
        console.log('BEFORE CHILD ENCODED GEN  ', child.encodedGen)

        let midpoint = ceil((crossoverRate) * (this.encodedGen.length - 1));

        console.log('MIDPOINT ', midpoint);

        for (let i = 1; i < this.encodedGen.length; i++) {
            if (i > midpoint) child.encodedGen[i] = this.encodedGen[i];
            else child.encodedGen[i] = partner.encodedGen[i];
        }
        console.log('AFTER CHILD ENCODED GEN ', child.encodedGen);
        return child;
    }

    mutate(mutationRate) {
        console.log('BEFORE MUTATION ', this.encodedGen);
        console.log('BEFORE NUMBER', this.bin2Dec(this.encodedGen));
        for (let i = 1; i < this.encodedGen.length; i++) {
            if (random(1) < mutationRate) {
                this.encodedGen[i] = parseInt(random([0, 1]));
            }
        }
        console.log('AFTER MUTATION ', this.encodedGen)
        console.log('AFTER NUMBER', this.bin2Dec(this.encodedGen));
    }

    bin2Dec(bin) {
        let decimal = 0;

        for (let c = bin.length - 1, i = 0; c > 0; c--, i++) {
            decimal += bin[c] * Math.pow(2, i);
        }

        if (bin[0] === '-') {
            decimal = decimal * -1;
        }
        return decimal;
    }

    dec2bin(dec) {
        let bin = '';
        let vectorBin = [];
        let leftZeros = '';
        if (dec >= 0) {
            vectorBin.push('+');
        }
        else {
            vectorBin.push('-');
        }
        dec = abs(dec);
        bin = (dec >>> 0).toString(2);

        if (bin.length < numBits) {
            let diff = numBits - bin.length;
            for (let i = 0; i < diff; i++) {
                leftZeros += '0';
            }
            bin = leftZeros + bin;
        }
        for (let i = 0; i < bin.length; i++) {
            vectorBin.push(int(bin.charAt(i)));
        }
        return vectorBin;
    }
}



/**
 * individuos []
 * 
 * 
 */