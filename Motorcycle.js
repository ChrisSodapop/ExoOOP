import Vehicle from "./Vehicle.js";

class Motorcycle extends Vehicle {
  constructor(color, name) {
    super(color, name, 2);
  }
}

export default Motorcycle;
