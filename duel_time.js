class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        target.res -= this.power;
    }
}

class Effect extends Card{
    constructor(name, cost, text, magnitude){
        super(name, cost);
        this.text = text
        this.magnitude = magnitude
    }

    play( target ) {
        if( target instanceof Unit ) {

            if(this.name == "Hard Algorithm"){    
                target.res += this.magnitude
            } else if (this.name == "Unhandled Promise Rejection") {
                target.res -= this.magnitude
            } else if (this.name == "Pair Programming") {
                target.power += this.magnitude
            }
            console.log(`${this.text}`)

        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

// Effect card
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increases target's resilience by 3", 3);

const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1,"reduces target's resilience by 2", 2);

const pairProgramming = new Effect("Pair Programming", 3, "increases target's power by 2", 2)


// Red unit
const redBelt = new Unit('Red Belt Ninja', 3, 3, 4);

hardAlgorithm.play(redBelt)
console.log(redBelt.res);

unhandledPromiseRejection.play(redBelt)
console.log(redBelt.res);

pairProgramming.play(redBelt)
console.log(redBelt.power);

// Black unit
const blackBelt = new Unit('Black Belt Ninja', 4, 5, 4);

redBelt.attack(blackBelt);
console.log("Red Belt attacks the Black Belt!");
console.log("The black belt resilience after red belt attack is: " + blackBelt.res);