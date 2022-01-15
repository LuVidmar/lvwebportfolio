import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent implements OnInit {

  list;
  constructor(private fs: FirestoreService) {
    this.list = fs.getList();
  }

  ngOnInit(): void {  
  }

  scrollTo(n: number){
    const el = document.getElementById(n.toString());
    if (el){
      el.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
    
  }

}

export interface thingToDo{
  desc: string,
  done: boolean,
  img: string[],
  number: number,
  title: string
}