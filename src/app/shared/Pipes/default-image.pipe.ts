import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment'

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let imageLink = args[0];
    let returnLink = 'assets/images/nophoto.png';
    if(imageLink) {
      returnLink = environment.apiUrl+'/'+imageLink
    }

    return returnLink;
  }

}
