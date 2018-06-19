import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {timer} from 'rxjs/observable/timer';


@Component({
  moduleId: module.id,
  selector: 'app-timer',
  templateUrl: './timer.component.html'
})

export class TimerComponent implements OnInit{
  ticks = 0;

  minutesDisplay: number = 1;
  hoursDisplay: number = 0;
  secondsDisplay: number = 30;

  view: boolean;

  sub: Subscription;

  ngOnInit() {
    //this.startTimer();
  }

  startTimer() {
    this.view = !this.view;
    const time = timer(1, 1000);
    this.sub = time.subscribe(
      t => {
        this.ticks = t;

        this.secondsDisplay = this.getSeconds(this.secondsDisplay) - this.ticks;
        this.minutesDisplay = this.getMinutes(this.ticks);
        this.hoursDisplay = this.getHours(this.ticks);
      }
    );
  }

  stop(): void {
    this.view = !this.view;
    this.sub.unsubscribe();
  }

  private getSeconds(ticks: number) {
    return this.pad(ticks % 60);
  }

  private getMinutes(ticks: number) {
    return this.pad((Math.floor(ticks / 60)) % 60);
  }

  private getHours(ticks: number) {
    return this.pad(Math.floor((ticks / 60) / 60));
  }

  private pad(digit: any) {
    console.log(digit);
    return digit <= 9 ? '0' + digit : digit;
  }
}
