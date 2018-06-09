import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name:'customPipe'
})

export class myCustomPipe implements PipeTransform{
	transform(value:string){
		let strIndx=value.split(' ');
		return strIndx[0] + ' ' + strIndx[1];

	}
}