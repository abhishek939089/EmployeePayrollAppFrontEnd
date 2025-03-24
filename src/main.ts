import { bootstrapApplication } from '@angular/platform-browser';
import { EmployeeListComponent } from './app/components/employee-list/employee-list.component';
import { appConfig } from './app/app.config';

// Bootstrap EmployeeListComponent as root
bootstrapApplication(EmployeeListComponent, appConfig).catch((err) =>
  console.error(err)
);
