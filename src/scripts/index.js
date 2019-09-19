import { cube, foo } from './demo.js';

import '../styles/style.scss';

const getOutput = console.log('Hello this is me');

console.log(cube(3)); 
console.log(foo);
console.log(getOutput);

class Student{

	a = 20

	toFunc(){

		console.log("test")
	} 
}

const a = new Student();

a.toFunc();