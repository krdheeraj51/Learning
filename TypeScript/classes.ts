// var button= document.querySelector("button")!;

// button.addEventListener('click',()=>{
//     console.log('Clicked ....');

// });


// const userName ="Dheeraj";
// // userName="Suresh";
// let age=45;

abstract class Department {
    //     name: string;
    static fiscalyear = 2021;
    protected employees: string[] = [];
    constructor(protected readonly id: string, public name: string) {
        // this.name = n;
    }
    abstract describe(this: Department): void;
    // {
    //     console.log('Department ::', this.name, "id ::", this.id);
    // }
    addEmployee(employee: string) {
        // this.id='d2';
        this.employees.push(employee);

    }
    static createEmployee(name: string) {
        return { name: name };
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ItDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins
    }
    describe() {
        console.log("IT Department ::", this.id);
    }

}
class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found ...');
    }
    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass a valid value');
        }
        this.addReport(value);
    }
    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }
    static getInstance() {
        if(this.instance){ //if(AccountingDepartment.instance)
           return this.instance;
        }
        this.instance=new AccountingDepartment('d2',[]);
        return this.instance;


    }
    describe() {
        console.log('This is accounting method ::', this.id);
    }
    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }
    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name)
    }
    printReports() {
        console.log(this.reports);
    }
}

let employee1 = Department.createEmployee('Dheeraj');
console.log(employee1, Department.fiscalyear);



let it = new ItDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Mannu');
// it.employees[2]='Anna';

it.describe();
it.printEmployeeInformation();
console.log(it);

// let accounting = new AccountingDepartment('d2', []);
let accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'Yearly report!';

accounting.addReport('something went wrong ...')
// accounting.employees[2]='Anna';
console.log(accounting.mostRecentReport);

accounting.describe();
accounting.addEmployee('Max');
accounting.addEmployee("Mannu");
// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();
// console.log(accounting);


// let it = new Department('Accounting');
// accounting.describe();
// let accountingCopy = {
//     name:'Dummy',
//     describe:accounting.describe
// }
// accountingCopy.describe();

