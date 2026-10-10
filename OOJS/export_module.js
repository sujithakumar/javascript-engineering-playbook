
//exporting variable
export const name = "Sujitha";

//exporting function
export function greet() {
  console.log("Hello!");
}

//exporting default
export default function login() { 
    console.log("Logged in"); 
} 

export class Hello{
    sayHello(){
        console.log('hello');
    }
}


//cant be exported
function nonExport(){
    console.log("you cant access me");
}