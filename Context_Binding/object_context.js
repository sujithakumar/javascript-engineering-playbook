

const user = {
  userName: 'Sujitha',
  sayHello() {
    //console.log('Hello, my name is  ', userName); //ref err
    console.log('Hello, my name is  ', this.userName);
  }
};

console.log("outside object", this);
console.log("Accessing obj using this   ", this.user);
user.sayHello(); 






