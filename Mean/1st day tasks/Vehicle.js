class Vehicle {
  constructor(name = "defualt", wheels = 4, passengers = 2) {
    this.name = name
    this.wheels = wheels
    this.passengers = passengers
  }
  makeNoise(){
    console.log("Honk!")
  }
  move(){
    this
  }

}



var bike = new Vehicle("Bike", 2, 1)

console.log (bike.wheels)
bike.makeNoise()
bike.makeNoise = function(){console.log("ring ring")}
bike.makeNoise()

var sedan = new Vehicle("Sedan", 4, 5)
sedan.makeNoise = () => console.log("Honk Honk!")
sedan.makeNoise()

var bus = new Vehicle("Bus", 6, 24)
console.log(bus.passengers)
Vehicle.prototype.getPassengers = function(morePassengers) {
  console.log(morePassengers)
  return this.passengers += morePassengers
};

bus.getPassengers(10)
console.log(bus.passengers)
