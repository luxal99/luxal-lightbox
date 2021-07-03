import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {A11yModule} from '@angular/cdk/a11y';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    A11yModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  declarations: []
})

export class MaterialModule {
}
