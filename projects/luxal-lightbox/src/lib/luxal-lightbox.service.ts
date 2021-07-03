import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LuxalLightboxComponent} from './luxal-lightbox.component';

@Injectable({
  providedIn: 'root'
})
export class LuxalLightboxService {

  constructor(private dialog: MatDialog) { }

  openGallery(data: any[]): void {
    this.dialog.open(LuxalLightboxComponent, {
      data,
      width: window.screen.width <= 1024 ? '100%' : 'auto',
      maxWidth: window.screen.width <= 1024 ? '100vw' : 'auto',
    });
  }

}
