import { Pipe, PipeTransform } from '@angular/core';
import {
  LANDSCAPE_ASPECT_RATIO,
  LANDSCAPE_ASPECT_RATIO_PERCENTAGE,
  PORTRAIT_ASPECT_RATIO,
  PORTRAIT_ASPECT_RATIO_PERCENTAGE,
} from './constant/const';
import { ImageProperty } from './model/ImageProperty';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(image: any): ImageProperty {
    if (window.screen.width <= 960) {
      if (image.width < image.height) {
        return { paddingTop: PORTRAIT_ASPECT_RATIO_PERCENTAGE };
      } else {
        return { paddingTop: LANDSCAPE_ASPECT_RATIO_PERCENTAGE };
      }
    } else {
      if (image.height > image.width) {
        return {
          height: `${window.screen.height + 150}px`,
          aspectRatio: PORTRAIT_ASPECT_RATIO,
        };
      } else {
        return {
          width: `${window.screen.width}px`,
          aspectRatio: LANDSCAPE_ASPECT_RATIO,
          paddingTop: 0,
        };
      }
    }
  }
}
