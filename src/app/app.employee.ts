import { Component , OnInit} from '@angular/core';
import { w3SchoolService } from './app.service';
import { Router} from '@angular/router';


@Component({
	selector:'employee',
	templateUrl:`app.employee.html`
})

export class myEmployeeComponent{
 listDetails=[];
	constructor(private _serData:w3SchoolService,
		private _route:Router){}

ngOnInit(){

	this._serData.getDatafromSerever().subscribe(myData=>this.listDetails=myData);
	
}
showDetails(data:any){
this._route.navigate(['employeeList',data.Name])
}


}