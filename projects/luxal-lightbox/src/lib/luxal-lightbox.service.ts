import {Injectable} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {LuxalLightboxComponent} from "./luxal-lightbox.component";
import {LANDSCAPE_ASPECT_RATIO, PORTRAIT_ASPECT_RATIO,} from "./constant/constant";

@Injectable({
  providedIn: "root",
})
export class LuxalLightboxService {

  constructor(private dialog: MatDialog) {
  }

  openGallery(data: any[]): void {
    this.getImageData(data).then((resp) => {
      this.dialog
        .open(LuxalLightboxComponent, {
          data: resp,
          width: window.screen.width <= 1024 ? "100vw" : "auto",
        })
        .afterClosed()
        .subscribe(() => {
        });
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
    if (window.screen.width >= 700) {
      image.imageCssProperty["height"] = "1080px";
    }

  }
}
