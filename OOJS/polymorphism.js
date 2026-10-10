
class Pet {
    speak() { return "Some generic animal sound"; }
}

class Dog extends Pet {
    speak() { return "Woof!"; }
}
class Cat extends Pet {
    speak() { return "Meow!"; }
}

const animals = [new Dog(), new Cat()];
animals.forEach(animal => {
    console.log(animal.speak())
});


//another ex
console.log();
class Notification {
  send() {
    console.log("Sending notification");
  }
}

class EmailNotification extends Notification {
  send() {
    console.log("Sending email");
  }
}
class SMSNotification extends Notification {
  send() {
    console.log("Sending SMS");
  }
}

function notify(notification) {
  notification.send();
}
notify(new EmailNotification());
notify(new SMSNotification());

