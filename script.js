// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.greet = ()=>{
		return `Hello, my name is ${name}, I am ${age} years old.`;
	}
}

function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
	this.jobTitle = jobTitle;

	this.jobGreet = ()=>{
		return `Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}.`;
	}
	
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
