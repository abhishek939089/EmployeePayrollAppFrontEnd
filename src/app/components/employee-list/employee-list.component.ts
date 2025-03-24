import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, EmployeeFormComponent],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmployeeService],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  showForm = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
    this.employees = this.employeeService.getEmployees();
  }

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.employees = this.employeeService.getEmployees(); // Refresh list after adding
  }
}
