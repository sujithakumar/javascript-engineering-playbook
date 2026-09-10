const user = {
  name: "",
  age: 0,
  active: false
};

console.log("name:  ",user?.name);
console.log("age:    ",user?.age);
console.log("isActive:   ",user?.active);


console.log("");
console.log("most useful in Nested Objects:")
const person = {
  profile: {
    address: {
      city: "Chennai"
    },
    age:null
  }
};

console.log('person.profile.address.city    ',person.profile.address.city);
console.log('person?.profile?.age     ',person?.profile?.age);
console.log('person.profile.age     ',person.profile.age);
console.log('person?.profile?.name     ',person?.profile?.name);
console.log('person.profile.name     ',person.profile.name);
console.log('person?.name     ',person?.name);
console.log('person.name     ',person.name);
console.log("");
console.log('person?.name?.firstName     ',person?.name?.firstName);
console.log('person.name.firstName    ',person.name.firstName);




