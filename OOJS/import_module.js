

import { name, greet } from "./export_module";
console.log(name);
greet();

//importing default and named modules
import login, {Hello} from './export_module';
login();
Hello.sayHello();

//aliases
import {Hello as hello} from './export_module';
hello.sayHello();

//import nonExport from './export_module'; - error


