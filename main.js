//Task 1 HW on Objects 1 Confectionery: Chocolates

function Chocolate(){
    const tmp = {}
    tmp.base = ' '
    tmp.filling = ' '
    tmp.shape = ' '
    tmp.price = 0
    return tmp;
    }

const chocolate1 = Chocolate()
chocolate1.base = 'dark chocolate';
chocolate1.filling = 'liqueur';
chocolate1.shape = 'heart';
chocolate1.price = 20;

const chocolate2 = Chocolate()
chocolate2.base = 'milk chocolate';
chocolate2.filling = 'souffle';
chocolate2.shape = 'diamond';
chocolate2.price = 15

console.log(chocolate1);
console.log(chocolate2);

console.log(Chocolate());

class ChocolateSample {
    constructor(base, filling, shape, price){
        this.base = base || ' '
        this.filling = filling || ' '
        this.shape = shape || ' '
        this.price = price || 0
    }
}
const chocolate3 = new ChocolateSample('white chocolate',  'fudge','complex', 17);

console.log(chocolate3)





