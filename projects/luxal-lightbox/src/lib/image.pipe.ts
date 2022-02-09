import {Pipe, PipeTransform} from '@angular/core';
import {retry} from "rxjs";

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {


  transform(imageSrc: any): any {
    let image = new Image()
    let style = {}
    image.src = imageSrc
    if (image.height > image.width) {
      style = {height: `${window.screen.height + 150}px`, paddingTop: '23.25%', aspectRatio: '9/16'}
    } else {
      style = {width: `${window.screen.width}px`, aspectRatio: '4/3', paddingTop: 0}
    }
    return style;
  }

}
