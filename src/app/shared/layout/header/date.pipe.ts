import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(date:any): string {
    let tg =  new Date(date);
    
    let wk =  tg.getDay();
    let thu = '';
    switch(wk){
      case 0: thu = 'Chủ Nhật';break;
      case 1: thu = '2';break;
      case 2: thu = '3';break;
      case 3: thu = '4';break;
      case 4: thu = '5';break;
      case 5: thu = '6';break;
      case 6: thu = '7';break;
    }
    return 'Thứ'+" " +thu + ','+' '+ tg.getDate().toString() + '/'+(tg.getMonth()+1).toString() + '/'+tg.getFullYear()+ '  '+ '|' + '  '+ tg.getHours()+':'+ tg.getMinutes()+':'+tg.getSeconds();
  }
  

}
