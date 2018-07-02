import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})

export class CardsComponent implements OnInit {
  title: string;
  imageList: Array<string>;
  p: number;

  constructor(private _activatedRoute: ActivatedRoute, private _location: Location) {}

  ngOnInit(): void {

    const params = this._activatedRoute.snapshot.params;
    this.title = params.name;
    this.p = 1;

    this.imageList =
      ['shoulderlift', 'shoulderfly', 'flyback', 'standbiceps', 'uptothesky', 'tricepsback', 'biceps', 'wings', 'shoulderarm', 'shoulder',
        'shouldertwist', 'chainsaw', 'chainsawlift', 'bench', 'sidebench', 'overheadbelly', 'overheadflat'];
  }

  goBack(): void {
    this._location.back();
  }
}
