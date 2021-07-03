import {NgModule} from '@angular/core';
import {LuxalLightboxComponent} from './luxal-lightbox.component';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    LuxalLightboxComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    LuxalLightboxComponent
  ]
})
export class LuxalLightboxModule {}
