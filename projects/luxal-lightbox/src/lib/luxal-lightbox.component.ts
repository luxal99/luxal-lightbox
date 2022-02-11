import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ImageDto} from "./model/ImageDto";

@Component({
  selector: 'lib-luxal-lightbox',
  templateUrl: './luxal-lightbox.html',
  styleUrls: ['./luxal-lightbox.sass'],
})
export class LuxalLightboxComponent implements OnInit {
  increment = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ImageDto[]) {
  }

  ngOnInit(): void {
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
    if (!(this.increment + 1 >= this.data.length)) {
      this.increment++;
    } else {
      this.increment = 0;
    }
  }

  prev(): void {
    if (this.increment - 1 >= 0) {
      this.increment--;
    } else {
      this.increment = this.data.length - 1;
    }
  }

  downloadPhoto(): void {
    // @ts-ignore
    document.getElementById('imgLink').click();
  }
}
