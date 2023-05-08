import { Component, OnInit } from '@angular/core';
import {DataService} from '../DataService';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  data: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.getData();
  }

  source: string = '/assets/pdf_logo.png';
}

