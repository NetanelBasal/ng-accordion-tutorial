import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = [
    {
      title: 'Group One',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum ab maxime dicta dolore adipisci corporis quibusdam corrupti soluta animi. Ratione officiis voluptate dignissimos expedita vel reiciendis earum labore voluptates.
`,
      link: ''
    },
    {
      title: 'Group Two',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum ab maxime dicta dolore adipisci corporis quibusdam corrupti soluta animi. Ratione officiis voluptate dignissimos expedita vel reiciendis earum labore voluptates.
`,
      link: ''
    },
    {
      title: 'Group Three',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum ab maxime dicta dolore adipisci corporis quibusdam corrupti soluta animi. Ratione officiis voluptate dignissimos expedita vel reiciendis earum labore voluptates.
`,
      link: ''
    }
  ];
}
