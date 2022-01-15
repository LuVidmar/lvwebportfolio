import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { AboutComponent } from './about/about.component';
import { SectionloaderComponent } from './sectionloader/sectionloader.component';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MainpageComponent,
    AboutComponent,
    SectionloaderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    AppRoutingModule
  ],
})
export class MainpageModule { }
