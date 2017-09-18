//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / (_/ / (_) / (_) (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog(name, status, hungry) {
  this.name = name
  this.status = status
  this.hungry = hungry
}
const sadie = new Dog("sadie", "normal", false)
sadie.owner = "mason"
sadie.color = "black"

const moonshine = new Dog("moonshine", "normal", true)

const atticus = new Dog("atticus", "normal", true)

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / (_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human(name, cool) {
  this.name = name
  this.cool = cool
  this.pet = function(dogName) {
    return (dogName.status = "happy")
  }
  this.feed = function(dogName) {
    return (dogName.hungry = false)
  }
}

const mason = new Human("mason", false)

const julia = new Human("julia", true)

// Instances of Human
// Needed: mason, julia
