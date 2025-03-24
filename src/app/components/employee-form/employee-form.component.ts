import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  providers: [EmployeeService],
})
export class EmployeeFormComponent {
  @Output() closeForm = new EventEmitter<void>();

  employee: Employee = {
    id: 0,
    name: '',
    gender: '',
    department: [],
    salary: 0,
    startDate: '',
    profileImage: 'assets/default.jpg',
  };

  departments = ['HR', 'Sales', 'Finance', 'Engineer', 'Others'];

  constructor(private employeeService: EmployeeService) {}

  onSubmit() {
    this.employeeService.addEmployee(this.employee);
    this.closeForm.emit(); // Close the form after submission
  }

  cancel() {
    this.closeForm.emit(); // Close the form on cancel
  }
}
