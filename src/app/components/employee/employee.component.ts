import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

  protected employeeDetails: any;
  protected salary: boolean = true;
  constructor() {
    this.employeeDetails = [
      {
        empID: "104",
        name: "Sairaj",
        designation: "sse",
        location: "5/6/2016",
        address: "hyderadbad, hitechcity",
        salary: "75000"
      },
      {
        empID: "102",
        name: "Manoj",
        designation: "TL",
        location: "5/7/2018",
        address: "Bangalore, Whitefeild",
        salary: "900000"
      },
      {
        empID: "105",
        name: "Ramesh",
        designation: "se",
        location: "7/12/2016",
        address: "chennai, tambaram",
        salary: "65546"
      },
      {
        empID: "340",
        name: "Suresh",
        designation: "sse",
        location: "9/10/2016",
        address: "hyderadbad, hitechcity",
        salary: "65400"
      },
      {
        empID: "456",
        name: "Ravi",
        designation: "AM",
        location: "4/6/2016",
        address: "hyderadbad, hitechcity",
        salary: "34555"
      },
      {
        empID: "688",
        name: "sam",
        designation: "se",
        location: "3/6/2016",
        address: "hyderadbad, hitechcity",
        salary: "34534"
      },
      {
        empID: "478",
        name: "ram",
        designation: "sse",
        location: "5/6/2016",
        address: "hyderadbad, hitechcity",
        salary: "345345"
      },
      {
        empID: "346",
        name: "jai",
        designation: "TL",
        location: "3/6/2016",
        address: "hyderadbad, hitechcity",
        salary: "4534534"
      },
      {
        empID: "457",
        name: "kamal",
        designation: "M",
        location: "3/6/2016",
        address: "hyderadbad, hitechcity",
        salary: "453454"
      },
      {
        empID: "124",
        name: "mona",
        designation: "se",
        location: "3/6/2016",
        address: "hyderadbad, hitechcity",
        salary: "364535"
      }
    ]
  }

  protected toggle() {
    this.salary = !this.salary;
  }

}
