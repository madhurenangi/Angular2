import { NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { myHomeComponent } from './app.home';
import { myEmployeeComponent } from './app.employee';
import { myEmployeeDetailsComponent } from './app.employeeDetails'


const routes:Routes=[
{path:'home',component:myHomeComponent},
{path:'employee',component:myEmployeeComponent},
{path:'employeeList/:Name',component:myEmployeeDetailsComponent}
];

@NgModule({

	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})
export class AppRouteModule{}
export const myModules=[myHomeComponent,myEmployeeComponent, myEmployeeDetailsComponent];