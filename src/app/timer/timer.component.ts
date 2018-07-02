import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {timer} from 'rxjs/observable/timer';


@Component({
  moduleId: module.id,
  selector: 'app-timer',
  templateUrl: './timer.component.html'
})

export class TimerComponent implements OnInit, OnDestroy{
  ticks = 0;

  userInput: any;
  copyUserInput: any;

  secondsInitValue: number; //Should be value set by user

  minutesDisplay: number = 0;
  hoursDisplay: number = 0;
  secondsDisplay: number; //Should be value set by user

  view: boolean;

  sub: Subscription;

  ngOnInit() {
    this.secondsDisplay = this.secondsInitValue;
    this.userInput = prompt('Set timer in a number format');
    this.copyUserInput = this.userInput;
    this.secondsInitValue = this.userInput;
    this.secondsDisplay = this.userInput;
  }

  startTimer() {
    this.view = !this.view;
    const time = timer(1, 1000);
    this.sub = time.subscribe(
      t => {
        this.ticks = t;

        this.secondsDisplay = this.getSeconds(this.ticks);
        //this.minutesDisplay = this.getMinutes(this.ticks);
        //this.hoursDisplay = this.getHours(this.ticks);
      }
    );
  }

  stop(): void {
    this.view = !this.view;
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  private getSeconds(ticks: number) {
    let countDown = this.secondsInitValue - ticks;
    if (countDown <= 0) {
      this._reset();
    }
    return countDown;
    //return this.pad(ticks % 60);
  }

  private getMinutes(ticks: number) {
    return this.pad((Math.floor(ticks / 60)) % 60);
  }

  private getHours(ticks: number) {
    return this.pad(Math.floor((ticks / 60) / 60));
  }

  private pad(digit: any) {
    return digit <= 9 ? '0' + digit : digit;
  }

  private _reset(): void {
    this.stop();
    //this.userInput = prompt('Set timer in a number format');
    this.secondsInitValue = this.copyUserInput; //Should be set by users input value
    this.minutesDisplay = 0;
    this.hoursDisplay = 0;
    this.secondsDisplay = this.copyUserInput;
    this.ticks = 0;
  }
}
