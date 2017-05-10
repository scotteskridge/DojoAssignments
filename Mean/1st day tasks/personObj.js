class Person {
  constructor(name) {
    this.name =name
    this.distance_traveled = 0
  }
  speak(text){
    console.log(text)
  }
  walk(){
    console.log(this.name, "is Walking")
    this.distance_traveled += 3
  }
  run(){
    console.log(this.name, "is Walking")
    this.distance_traveled += 10
  }
  crawl(){
    console.log(this.name, "is Walking")
    this.distance_traveled += 1
  }

}

var Scott = new Person("Scott")

Scott.walk()
Scott.run()

console.log(Scott.distance_traveled)
