import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

export interface PositionData {
  id: string;
  symbol: string;
  price: string;
  qty: string;
  execPrice: string;
  execQty: string;
}

export class PositionDatabase {
  dataChange : BehaviorSubject<PositionData[]> = new BehaviorSubject<PositionData[]>([]);


}


@Component({
  selector: 'app-position-table',
  templateUrl: './position-table.component.html',
  styleUrls: ['./position-table.component.css']
})
export class PositionTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
