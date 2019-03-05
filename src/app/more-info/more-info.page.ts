import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.page.html',
  styleUrls: ['./more-info.page.scss'],
})
export class MoreInfoPage implements OnInit {
  repo:any;
  constructor( protected apiService: ApiService) { 

  }

  ngOnInit() {
    this.repo = this.apiService.getDetail();
    console.log(this.repo);
  }

}
