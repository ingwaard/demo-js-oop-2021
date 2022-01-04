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

class ChocolateSample {
    #price
    constructor(base = '', filling = '', shape = '', price = 0) {
        this.setPrice = function (price) {
            if (/^[0-9]{1,2}$/.test(price) & price > 0) {
                this.#price = price
            } else {
                throw new Error("Incorrect data")

            }
        }
        this.getPrice = function(){
            return this.#price
        }
    }
}
const chocolate4 = new ChocolateSample()


try {
    chocolate4.setPrice(20)
    console.log(chocolate4)
} catch (ex) {
    console.log('Example 1: ${ex.message}')
}

try {
    chocolate4.setPrice(0)
    console.log(chocolate4)
} catch (ex){
    console.log('Example 2: ${ex.message}')
}

try {
    chocolate4.setPrice(100)
    console.log(chocolate4)
} catch (ex){
    console.log('Example 3: ${ex.message}')
}



