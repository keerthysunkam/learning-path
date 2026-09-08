let person={
	
	name:"keerthi",

	age:25,
	Employye_id:467,

	department_name:"buyt",
}


//Accessing the properties

console.log(person.name);

console.log(person.age);
//Adding properties to existing
//for property we need to use dot operator
//we need to provide the property name and value to be added
person.height=345
console.log(person.height);
//updating the existing property
//update the existing property
person.name="pandu";
console.log(person.name);
//Remove the property from the object
delete person.age;
//here since the person age is deleted out put will be undefined.
console.log(person.age); 

