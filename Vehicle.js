class Vehicle {
  color;
  name;
  number;

  constructor(color, name, number) {
    this.color = color;
    this.name = name;
    this.number = number;
  }

  getPropsString() {
    return `J'ai acheté une ${this.name} ${this.color} avec ${this.number}`;
  }
}

export default Vehicle;
