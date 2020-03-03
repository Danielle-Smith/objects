// objects, instance methods, static methods

//   How to check if two objects have equal values

const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
  
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
  
    for (let objKey of obj1Keys) {
      if (obj1[objKey] !== obj2[objKey]) {
        return false;
      }
    }
  
    return true;
  };
  
  const obj1 = {                // This method only works for 1 deep objects. If the object has nested items. you need to use a different method like using a lodash library.
    name: "Kristine",
    age: 13,
    favorites: {
      food: "Pizza",
      vacation: "Disneyland"
    }
  };
  
  const obj2 = {
    name: "Kristine",
    age: 13,
    favorites: {
      food: "Pizza",
      vacation: "Disneyland"
    }
  };
  
  obj1 == obj2;
  isEqual(obj1, obj2);


//   Intro to object oriented programming

class Instructor {
    constructor({ name }) {  //constructor is a reserved word for a class to instantiate. class is the blueprint instatiation is like building the basics.
      this.name = name;  // this.name is an instance of the class instructor. Adding an attribute to name.
    }
  }
  
  const jon = new Instructor({ name: 'Jon Snow' });  // jon is an object and an instance of Instructor. Don't forget to type 'new'.
  console.log(jon.name);


//   OOP instance methods

class Instructor {
    constructor({ name, role = 'assistant' }) {
      this.name = name;
      this.role = role;
    }
  
    renderDetails() {
      console.log(`${this.name}: ${this.role}`);  //this is a method. To use this you need to use the attributes created in the constructor area. instance method is a function inside of a class. And whenever you create a new instance of that class you can then call those instance methods on it.
    }
  }
  
  const jon = new Instructor({name: 'Jon Snow'});
  const brayden = new Instructor({name: 'Brayden', role: 'teacher'});
  jon.renderDetails();
  brayden.renderDetails(); // calling the instance method

  class Car {
	constructor({ year, brand, poweredBy = 'gas' }) {
		this.year = year;
		this.brand = brand;
		this.poweredBy = poweredBy;
	}

	carSpecs() {
		return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`);
	}
}

const mode13 = new Car({year: 2020, brand: "Tesla", poweredBy: "electricity" });
// mode13.carSpecs();
console.log(mode13.carSpecs());

// Static methods

// with the canTeach method, we're not actually communicating at all with the instance of the Jon class or the Alice class. What we're doing is we're calling our helper method of canTeach and then we're just passing in the object. So this object was already created. We're not calling on the object itself. We're just passing this into our helper method of canTeach.
// a static method doesn't require that instance and in fact an instance will not even work and so we can test this out
class Instructor {
    constructor({ name, role = "assistant" }) {
      this.role = role;
      this.name = name;
    }
  
    // Instance method
    renderDetails() {
      console.log(`${this.name} - ${this.role}`);
    }
  
    // Base case static method
    static helloWorld() {
      console.log('Hi there');
    }
  
    // Static method
    static canTeach(instructor) {
      return (instructor.role === 'classroom');
    }
  }
  
  let juniorInstructor = new Instructor({ 'name' : 'Brian' });
  let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });
  
  juniorInstructor.renderDetails(); // "Brian - assistant"
  seniorInstructor.renderDetails(); // "Alice - classroom"
  
  Instructor.helloWorld(); // "Hi there"                calling the base case static method
  
  // "Brian can teach: false"
  console.log(
    `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`    // calling the static method
  );
  
  // "Alice can teach: true"
  console.log(
    `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
  );




