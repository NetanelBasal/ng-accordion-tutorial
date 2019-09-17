import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('IconComponent ngOnInit');
  }
}
