import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  list: Array<string>;

  constructor() {}

  ngOnInit(): void {
    this.title = 'Workout';
    this.list = ['Arms', 'Legs', 'Body', 'Fun'];
  }

  changeListName(i: number): void {
    console.log('hello');
    const newName = prompt('Change name');
    this.list[i] = newName;
  }
}
