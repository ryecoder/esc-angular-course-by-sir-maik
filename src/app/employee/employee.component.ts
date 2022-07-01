import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnChanges, OnDestroy {

  @Input() employee: any;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Employee Updated")
    console.log(this.employee)
  }

  ngOnDestroy(): void {
    console.log("Employee Destroyed")
    console.log(this.employee)
  }

}
