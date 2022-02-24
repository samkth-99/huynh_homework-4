const radius = Number(prompt("Enter the circle radius:"));
 
// TODO: create the circle object here
const circle = {
    pi : 3.14, 
    r : radius,
    area:function area () {
        return this.r * this.r * this.pi; 
    }, 
    circumference: function circumference() {
        return this.r*2*this.pi; 
    }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
