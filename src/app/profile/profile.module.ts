import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { TranslateModule } from '@ngx-translate/core';
import { PhotoOverlayComponent } from './photo-overlay/photo-overlay.component';


@NgModule({
  declarations: [
    ProfileComponent,
    PhotoOverlayComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
