import {NgModule} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {LuxalLightboxComponent} from './luxal-lightbox.component';
import { ImagePipe } from './image.pipe';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    LuxalLightboxComponent,
    ImagePipe
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    LuxalLightboxComponent,
  ]
})
export class LuxalLightboxModule {}
