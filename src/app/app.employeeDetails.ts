import { Component , OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({

	template:`<h2>Employee Details</h2>{{name}}`
})

export class myEmployeeDetailsComponent implements OnInit{

	private name:string;

	constructor(private _acroute:ActivatedRoute){}

	ngOnInit(){
		this.name=this._acroute.snapshot.params['Name'];

	}
}