import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})

export class CardsComponent implements OnInit {
  title: string;
  imageList: Array<string>;

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    const params = this._activatedRoute.snapshot.params;
    this.title = params.name;

    console.log('cards');
    this.imageList =
      ['bench', 'biceps', 'chainsaw', 'chainsawlift', 'flyback', 'overheadbelly', 'overheadflat', 'shoulder',
        'shoulderarm', 'shoulderfly', 'shoulderlift', 'shouldertwist', 'sidebench', 'standbiceps', 'tricepsback', 'uptothesky', 'wings'];
  }
}
