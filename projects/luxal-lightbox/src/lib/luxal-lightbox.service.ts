import {HostListener, Injectable} from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { LuxalLightboxComponent } from './luxal-lightbox.component';
import {
  LANDSCAPE_ASPECT_RATIO,
  PORTRAIT_ASPECT_RATIO,
} from './constant/constant';
import {DocumentService} from "./ssr/document.service";

@Injectable({
  providedIn: 'root',
})
export class LuxalLightboxService {
  constructor(private dialog: MatDialog,private documentService:DocumentService) {}

  openGallery(data: any[]): void {
    this.getImageData(data).then((resp) => {
        this.dialog
          .open(LuxalLightboxComponent, {
            width: this.documentService.getWindow().screen.width <= 600 ? '100vw' : 'auto',
            maxWidth: this.documentService.getWindow().screen.width <= 600 ? '100vw' : 'auto',
            data: resp,
          })
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
   if (typeof this.documentService.getWindow() !== undefined){
     if (
       this.documentService.getWindow().screen.width >= 700 &&
       this.documentService.getWindow().screen.height <= this.documentService.getWindow().screen.width
     ) {
       image.imageCssProperty['height'] = '1080px';
     } else if (
       this.documentService.getWindow().screen.width <= 1000 &&
       this.documentService.getWindow().screen.width > this.documentService.getWindow().screen.height
     ) {
       image.imageCssProperty['height'] = `${this.documentService.getWindow().screen.width * .7}px`;
     }
   }
  }
}
