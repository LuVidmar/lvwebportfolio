import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mainframe',
  templateUrl: './mainframe.component.html',
  styleUrls: ['./mainframe.component.scss']
})
export class MainframeComponent implements OnInit {

  langs = ['en','es']
  selectedLang = 'en';

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    //Getting local storage var
    var selectedLanguage = localStorage.getItem('selLang');
    var l = '';
    if(selectedLanguage){ //if there is a saved language
      l = selectedLanguage;
    }
    else { //else get browser language
      l = this.translate.getBrowserLang() || ''; 
    }
    var supportedLang = false;
    this.langs.forEach(lang=>{ //check if it is one of the supported languages
      if (lang==l){
        supportedLang = true;
      }
    });
    supportedLang? this.useLanguage(l) : this.useLanguage('en'); //if not supported set english
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    this.updateButtons(language);
    localStorage.setItem('selLang',language);
  }

  updateButtons(language: string){
    
    this.langs.forEach(lang=>{
      
      const el = document.getElementById(lang);
      if (el){
        if (lang == language){
          el.style.fontWeight="bold";
          el.style.border="1px solid var(--dark-color)"
        }
        else{
          el.style.fontWeight="normal";
          el.style.border="1px solid transparent"
        }
      }
    });
    
  }
}
