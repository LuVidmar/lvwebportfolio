import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { ImpossibleListComponent } from './impossible-list.component';
import { FirestoreService } from './firestore.service';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    LoadingBarComponent,
    ImpossibleListComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  providers: [
    FirestoreService
  ],
})
export class ImpossibleListModule { }
