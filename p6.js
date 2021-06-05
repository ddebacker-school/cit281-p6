class Shape {
    constructor (sides=[]) {
        this.sides = sides;
    }
    perimeter = () => this.sides.length ? this.sides.reduce((accumulator, currentValue) => accumulator + currentValue): 0;
}
/*
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0
*/
class Rectangle extends Shape {
    constructor(length = 0,width = 0) {
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    area = () => this.length * this.width
}
/*
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0 */

class Triangle extends Shape {
    constructor(sideA = 0,sideB = 0, sideC = 0) {
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area = () => {
        let s = (this.sideA+this.sideB+this.sideC)/2;
        return Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC))
    }
}
/*
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0 */

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
for (const i of data) {
    let o = null;
    switch (i.length) {
        case 2:{
            let o = new Rectangle(...i)
            if (i[0]==i[1]) {
                return console.log(`Square with sides ${i.toString()} has a perimeter of ${o.perimeter()} and area of ${o.area()}`)
            } else {
                return console.log(`Rectangle with sides ${i.toString()} has a perimeter of ${o.perimeter()} and area of ${o.area()}`)
            }
            }
        case 3:{
            let o = new Triangle(...i)
                return console.log(`Triangle with sides ${i.toString()} has a perimeter of ${o.perimeter()} and area of ${o.area()}`)
        }
        default:
            if (i.length == 1) {
                return console.log(`Shape with 1 side unsupported`)
            }
            else{
            return console.log(`Shape with ${i.length} sides unsupported`)}
    }
}
