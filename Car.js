import Vehicle from "./Vehicle.js";

class Car extends Vehicle {
  constructor(color, name) {
    super(color, name, 4);
  }

  doors() {}
}

export default Car;
