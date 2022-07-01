import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './../services/employee/employee.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  //employee data model
  name:String = '';
  gender:String = '';
  title:String = '';
  tenure=0;
  salary=0;
  display=true;
  isEdited=false;

  // employee collection data
  employees:any=[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.fetchEmployees()
  }

  clearInputFields(){
    this.name = ''
    this.gender = ''
    this.title = ''
    this.tenure = 0
    this.salary = 0
    this.display = true
    this.isEdited = false
  }

  fetchEmployees(){
    this.employees = this.employeeService.getEmployees()
  }

  addEmployee(name: String, gender:String, title:String, tenure:number, salary:number, display:boolean){
    var employee = {
      'name': name,
      'gender': gender,
      'title': title,
      'tenure': tenure,
      'salary': salary,
      'display': display,
      'isEdited': false
    }

    // this.employees.push(employee)
    this.employeeService.addEmployee(employee)

    this.clearInputFields()

    console.log(this.employees)

  }

  updateEmployee(index: number, name: String, gender:String, title:String, tenure:number, salary:number, display:boolean ){
    var tempEmployee = {
      'name': name,
      'gender': gender,
      'title': title,
      'tenure': tenure,
      'salary': salary,
      'display': display,
      'isEdited': true
    }

    // this.employees[index] = tempEmployee
    this.employeeService.updateEmployee(index, tempEmployee)

    this.clearInputFields()
  }

  deleteEmployee(index:number){
    // alert(
    //     this.employees.splice(index,1)[0].name +
    //     " Has been deleted"
    //     )
    alert(
      this.employeeService.deleteEmployee(index)[0].name + " Has been deleted."
    )
  }

}
