import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'lib-luxal-lightbox',
  templateUrl: './luxal-lightbox.html',
  styleUrls: ['./luxal-lightbox.sass']
})
export class LuxalLightboxComponent implements OnInit {

  increment = 0;
  isMobile = false;

  constructor(@Inject(MAT_DIALOG_DATA) public medias: any[]) {
  }

  ngOnInit(): void {
    // this.getMeta(this.medias[0].uri);
    this.addArrowListener();
  }

  addArrowListener(): void {
    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
      }
    });
  }

  next(): void {
    if (!(this.increment + 1 >= this.medias.length)) {
      this.increment++;
    } else {
      this.increment = 0;
    }
  }


  prev(): void {
    if (this.increment - 1 >= 0) {
      this.increment--;
    } else {
      this.increment = this.medias.length - 1;
    }
  }

  getMeta(url?: string): void {
    const img = new Image();
    if (url) {
      img.src = url;
    } else {
      img.src = this.medias[this.increment].uri;
    }
    this.setResponsiveImage(img);
  }

  setResponsiveImage(img: any): void {
    const slide = document.getElementById("slide")
    if (window.screen.width <= 960) {
      this.setMobileAspectRatio(img,slide);
    } else {
      this.setDesktopAspectRatio(img,slide);
    }
  }

  setMobileAspectRatio(img: any,element:any): void {
    if (img.width < img.height) {
      // @ts-ignore
      element.style.paddingTop = '156.25%';
    } else {
      // @ts-ignore
      element.style.paddingTop = '56.25%';
      // @ts-ignore
      element.style.height = `${window.screen.width + 50}px`;
    }
  }

  setDesktopAspectRatio(img: any,element:any): void {
    if (img.width < img.height) {
      // @ts-ignore
      element.style.aspectRatio = '9/16';
      // @ts-ignore
      element.style.height = `${window.screen.height + 150}px`;
      element.style.paddingTop = '23.25%'
      // @ts-ignore
      element.style.removeProperty('width');
    } else {
      // @ts-ignore
      element.style.width = `${window.screen.width}px`;
      // @ts-ignore
      element.style.aspectRatio = '4/3';
      element.style.paddingTop = '0'
      // @ts-ignore
      element.style.removeProperty('height');
    }
  }

  downloadPhoto(): void {
    // @ts-ignore
    document.getElementById('imgLink').click();
  }
}
