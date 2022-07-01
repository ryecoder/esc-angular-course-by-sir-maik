import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  employees:any = [
    {
      'name': 'Yan',
      'gender': 'Male',
      'title' : 'Developer',
      'tenure' : '3',
      'salary':'1,000,000',
      'display' : true,
      'isEdited' : false
    }
  ]

  // get
  getEmployees(){
    return this.employees
  }
  // add
  addEmployee(employee:any){
    this.employees.push(employee)
  }
  // delete
  deleteEmployee(index:number){
    return this.employees.splice(index,1)
  }
  // update
  updateEmployee(index:number, employee:any){
    this.employees[index] = employee
  }
}
