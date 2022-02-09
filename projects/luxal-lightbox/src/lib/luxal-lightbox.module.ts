import {NgModule} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon/public-api';
import {LuxalLightboxComponent} from './luxal-lightbox.component';

@NgModule({
  declarations: [
    LuxalLightboxComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    LuxalLightboxComponent
  ]
})
export class LuxalLightboxModule {}
