import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LuxalLightboxComponent } from './luxal-lightbox.component';
import {
  LANDSCAPE_ASPECT_RATIO,
  LANDSCAPE_ASPECT_RATIO_PERCENTAGE,
  PORTRAIT_ASPECT_RATIO,
  PORTRAIT_ASPECT_RATIO_PERCENTAGE,
} from './constant/constant';
import { ImageDto } from './model/ImageDto';

@Injectable({
  providedIn: 'root',
})
export class LuxalLightboxService {
  private listOfImages: ImageDto[] = [];

  constructor(private dialog: MatDialog) {}

  openGallery(data: any[]): void {
    this.getImageData(data).then(() => {
      this.dialog
        .open(LuxalLightboxComponent, {
          data: this.listOfImages,
          width: window.screen.width <= 1024 ? '100%' : 'auto',
        })
        .afterClosed()
        .subscribe(() => {
          this.listOfImages = [];
        });
    });
  }

  async getImageData(medias: any[]): Promise<void> {
    for (let image of medias) {
      let img = new Image();
      img.src = image.uri;
      img.onload = () => {
        image.width = img.width;
        image.height = img.height;

        this.getImageProperties(image);
      };

      if (medias.indexOf(image) === medias.length - 1) {
        return new Promise<void>((resolve) => resolve());
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
    if (window.screen.width >= 700) {
      image.imageCssProperty["height"]="1080px"
    }
    this.listOfImages.push(image);
  }
}
