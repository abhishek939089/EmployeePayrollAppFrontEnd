import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [
    {
      id: 1,
      name: 'Amrapa Shashanka Keerthi Kumar',
      gender: 'Female',
      department: ['Sales', 'HR', 'Finance'],
      salary: 10000,
      startDate: '29 Oct 2019',
      profileImage: 'assets/profile1.png',
    },
    {
      id: 2,
      name: 'Abhishek Sharma',
      gender: 'Male',
      department: ['IT', 'Finance'],
      salary: 100000,
      startDate: '29 Nov 2020',
      profileImage: 'assets/profile2.png',
    },
    {
      id: 1,
      name: 'Anshika Sharma',
      gender: 'Female',
      department: ['Sales', 'HR', 'Finance'],
      salary: 20000,
      startDate: '29 Oct 2025',
      profileImage: 'assets/profile3.png',
    },
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee) {
    employee.id = this.employees.length + 1;
    this.employees.push(employee);
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter((emp) => emp.id !== id);
  }
}
