import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css']
})
export class SkillComponent {
  items = [
    { title: 'C#', content: 'Content for Item 1' },
    { title: 'SQL', content: 'Content for Item 2' },
    { title: 'Angular', content: 'Content for Item 3' },
    // Add more items as needed
  ];

}
