import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  skills = [];

  constructor(private translate: TranslateService) {
    translate.onLangChange.subscribe(ev=>{
      this.loadSkills(ev.lang);
    });
  }

  ngOnInit(): void {
    var selLang = localStorage.getItem('selLang');
    selLang? this.loadSkills(selLang) : this.loadSkills('en');
  }

  loadSkills(lang: string){
    var translations = this.translate.getTranslation(lang);
    translations.subscribe(trans=>{
      this.skills = trans['PROFILE']['SKILLS']['LIST'];
    });
  }

}
