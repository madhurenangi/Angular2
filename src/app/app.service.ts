import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()

export class w3SchoolService{

	private _url:string="https://www.w3schools.com/angular/customers.php";

constructor(private _http:Http){}

getDatafromSerever(){

	return this._http.get(this._url)
					.map((response:Response)=>response.json().records)
					.catch(this._myError);

}
_myError(error:Response){
return Observable.throw(error ||'Server Error');



}
}
