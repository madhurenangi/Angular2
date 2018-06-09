import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { w3SchoolService } from './app.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[w3SchoolService]

})
export class AppComponent implements OnInit {

	listDetails=[];
	myError:string;
	


	constructor(private _myData:w3SchoolService){}
ngOnInit(){
	this._myData.getDatafromSerever().subscribe(w3Data=>this.listDetails=w3Data,w3Error=>this.myError=w3Error);

	}

}
 
 


