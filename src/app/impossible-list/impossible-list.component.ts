import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService, thingToDo } from './firestore.service';

@Component({
  selector: 'app-impossible-list',
  templateUrl: './impossible-list.component.html',
  styleUrls: ['./impossible-list.component.scss']
})

export class ImpossibleListComponent implements OnInit {

  list;
  constructor(private fs: FirestoreService) {
    this.list = fs.getList();
  }

  ngOnInit(): void {
    
  }

}