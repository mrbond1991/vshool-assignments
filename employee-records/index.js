var employees = []

function Employee(name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full-Time";
}

Employee.prototype.printEmployeeForm = function(){
    console.log("Name: " + this.name + ", " + "Job Title: " + this.jobTitle + ", " + "Salary: " + this.salary + ", " + "Status: " + this.status)
}

var emp1 = new Employee("Mike", "Software Engineer", "$5000/Month")
employees.push(emp1)
emp1.printEmployeeForm()

var emp2 = new Employee("Aly", "Dealership Accounting", "$2000/Month")
emp2.status = "Contract"
employees.push(emp2)
emp2.printEmployeeForm()

var emp3 = new Employee("Jared", "Solar Rep", "$10000/Month")
employees.push(emp3)
emp3.printEmployeeForm()

console.log(employees)