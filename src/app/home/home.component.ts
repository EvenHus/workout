import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
  title: string;
  list: Array<string>;

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
    this.title = 'Workout';
    this.list = ['Pinterest workout'];
  }

  changeListName(i: number): void {
    const newName = prompt('Change name');
    this.list[i] = newName;
  }

  goToWorkout(name: string): void {
    this._router.navigate(['cards', name]);
  }
}
