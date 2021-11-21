"use strict";
// var button= document.querySelector("button")!;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// button.addEventListener('click',()=>{
//     console.log('Clicked ....');
// });
// const userName ="Dheeraj";
// // userName="Suresh";
// let age=45;
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        // this.name = n;
    }
    // {
    //     console.log('Department ::', this.name, "id ::", this.id);
    // }
    Department.prototype.addEmployee = function (employee) {
        // this.id='d2';
        this.employees.push(employee);
    };
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    //     name: string;
    Department.fiscalyear = 2021;
    return Department;
}());
var ItDepartment = /** @class */ (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ItDepartment.prototype.describe = function () {
        console.log("IT Department ::", this.id);
    };
    return ItDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found ...');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please pass a valid value');
            }
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment.getInstance = function () {
        if (this.instance) { //if(AccountingDepartment.instance)
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    };
    AccountingDepartment.prototype.describe = function () {
        console.log('This is accounting method ::', this.id);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var employee1 = Department.createEmployee('Dheeraj');
console.log(employee1, Department.fiscalyear);
var it = new ItDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Mannu');
// it.employees[2]='Anna';
it.describe();
it.printEmployeeInformation();
console.log(it);
// let accounting = new AccountingDepartment('d2', []);
var accounting = AccountingDepartment.getInstance();
accounting.mostRecentReport = 'Yearly report!';
accounting.addReport('something went wrong ...');
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
