import {HostListener, Injectable} from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { LuxalLightboxComponent } from './luxal-lightbox.component';
import {
  LANDSCAPE_ASPECT_RATIO,
  PORTRAIT_ASPECT_RATIO,
} from './constant/constant';

@Injectable({
  providedIn: 'root',
})
export class LuxalLightboxService {
  constructor(private dialog: MatDialog) {}

  openGallery(data: any[]): void {
    this.getImageData(data).then((resp) => {
      this.dialog
        .open(LuxalLightboxComponent, {
          width: window.screen.width <= 600 ? '100vw' : 'auto',
          maxWidth: window.screen.width <= 600 ? '100vw' : 'auto',
          data: resp,
        })
        .afterClosed()
        .subscribe(() => {});
    });
  }

  // @ts-ignore
  async getImageData(medias: any[]): Promise<any[]> {
    for (let image of medias) {
      let img = new Image();
      img.src = image.uri;
      img.onload = () => {
        image.width = img.width;
        image.height = img.height;
        this.getImageProperties(image);
      };

      if (medias.indexOf(image) === medias.length - 1) {
        return new Promise<any[]>((resolve) => resolve(medias));
      }
    }
  }

  getImageProperties(image: any) {
    if (image.height > image.width) {
      image.imageCssProperty = {
        aspectRatio: PORTRAIT_ASPECT_RATIO,
      };
    } else if (image.height <= image.width) {
      image.imageCssProperty = {
        aspectRatio: LANDSCAPE_ASPECT_RATIO,
      };
    }
    if (
      window.screen.width >= 700 &&
      window.screen.width <= window.screen.height
    ) {
      console.log("Mobile");
      image.imageCssProperty['height'] = '1080px';
    } else if (
      window.screen.width <= 1000 &&
      window.screen.width > window.screen.height
    ) {
      console.log("Landscape mobile");
      image.imageCssProperty['height'] = `${window.screen.width / 2}px`;
    }else{
      console.log("Desktop");
      image.imageCssProperty['height'] = '1080px';
    }
  }
}
