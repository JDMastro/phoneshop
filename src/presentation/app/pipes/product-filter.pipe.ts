import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: any, searchValue: any, tipoCel: any): any {

    if(!searchValue && !tipoCel) return value

    if(searchValue && tipoCel == "") return value.filter((v:any) => 
    v.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

    if(!searchValue && tipoCel != "") return value.filter((v:any) => 
    v.brand.toLowerCase().indexOf(tipoCel.toLowerCase()) > -1)

    
    return value.filter((v:any) => 
    v.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 && 
    v.brand.toLowerCase().indexOf(tipoCel.toLowerCase()) > -1);
  }

}
