import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sectionloader',
  templateUrl: './sectionloader.component.html',
  styleUrls: ['./sectionloader.component.scss']
})
export class SectionloaderComponent implements OnInit {

  constructor() { }

  sections = [
    { title: 'MAINPAGE.ABOUTME.TITLE', desc: 'MAINPAGE.ABOUTME.DESC', color: 'var(--grey-color)', link:'' },
    { title: 'MAINPAGE.MYPROFILE.TITLE', desc: 'MAINPAGE.MYPROFILE.DESC', color: 'var(--white-color)', link:'/profile' },
    { title: 'MAINPAGE.BLOG.TITLE', desc: 'MAINPAGE.BLOG.DESC', color: 'var(--white-color)', link:'' },
    { title: 'MAINPAGE.IMPOSSIBLELIST.TITLE', desc: 'MAINPAGE.IMPOSSIBLELIST.DESC', color: 'var(--yellow-color)', link:'/impossible-list' },
  ]

  ngOnInit(): void {
  }

}
