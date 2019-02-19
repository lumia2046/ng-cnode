import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

moment.locale('zh-cn')

@Pipe({
  name: 'formatData'
})
export class FormatDataPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return moment(value).fromNow();
  }

}
