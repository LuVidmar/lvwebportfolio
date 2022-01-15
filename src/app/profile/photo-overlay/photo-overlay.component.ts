import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-overlay',
  templateUrl: './photo-overlay.component.html',
  styleUrls: ['./photo-overlay.component.scss']
})
export class PhotoOverlayComponent implements OnInit {

  @Input() initialHeight: string;
  @Input() imageLink: string;
  @Input() text: string;
  height: string = '20pt';

  constructor() {    
  }

  ngOnInit(): void {
    this.height = 'calc(' + this.initialHeight + ' + 1vmax)';
  }

}
