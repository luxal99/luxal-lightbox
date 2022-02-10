import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lib-luxal-lightbox',
  templateUrl: './luxal-lightbox.html',
  styleUrls: ['./luxal-lightbox.sass'],
})
export class LuxalLightboxComponent implements OnInit {
  increment = 0;
  isMobile = false;

  constructor(@Inject(MAT_DIALOG_DATA) public medias: any[]) {}

  ngOnInit(): void {
    this.getImageData();
    this.addArrowListener();
  }

  getImageData() {
    for (let image of this.medias) {
      let img = new Image();
      img.src = image.uri;
      img.onload = () => {
        image.width = img.width;
        image.height = img.height;
      };
    }
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

  downloadPhoto(): void {
    // @ts-ignore
    document.getElementById('imgLink').click();
  }
}
