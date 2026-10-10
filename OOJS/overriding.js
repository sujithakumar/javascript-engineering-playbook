class User {
  getRole() {
    return "User";
  }
}

class Admin extends User{
    getRole(){
        return "Admin";
    }
}

const user = new User();
const admin = new Admin();

console.log(user.getRole());
console.log(admin.getRole());