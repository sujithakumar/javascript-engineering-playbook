

const product = {
  price: 1000,
  tax: 180,

  get totalPrice() {
    return this.price + this.tax;
  }
};
console.log(product.totalPrice); 




const user = {
  firstName: "Sujitha",

  set name(value) {
    this.firstName = value;
  }
};

user.name = "Priya";
console.log(user.firstName);


//good ex
const user = {
  _name: "",

  get name() {
    return this._name;
  },

  set name(value) {
    this._name = value.trim();
  }
};

user.name = "  Sujitha  ";
console.log(user.name);