import { NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { myHomeComponent } from './app.home';
import { myEmployeeComponent } from './app.employee';
import { myEmployeeDetailsComponent } from './app.employeeDetails'
import {contactUsComponent} from './app.contact';


const routes:Routes=[
{path:'home',component:myHomeComponent},
{path:'employee',component:myEmployeeComponent},
{path:'employeeList/:Name',component:myEmployeeDetailsComponent},
{path:'contact',component:contactUsComponent}
];

@NgModule({

	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})
export class AppRouteModule{}
export const myModules=[contactUsComponent,myHomeComponent,myEmployeeComponent, myEmployeeDetailsComponent];