import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navItems = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About us' },
    { path: '/how-it', label: 'How it...' },
    { path: '/faq', label: 'FAQ' },
    { path: '/feedback', label: 'Contact us' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
