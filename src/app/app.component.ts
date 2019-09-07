import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = [
    {
      title: 'Akita',
      description: 'State mean',
      link: ''
    },
    {
      title: 'Spectator',
      description: 'State mean',
      link: ''
    },
    {
      title: 'Transloco',
      description: 'State mean',
      link: ''
    }
  ];
}
