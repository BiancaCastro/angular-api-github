import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../api.service'
@Component({
  selector: 'app-github-search-results',
  templateUrl: './github-search-results.component.html',
  styleUrls: ['./github-search-results.component.scss'],
})
export class GithubSearchResultsComponent implements OnInit {

 
@Input() resultList: Array<Object>;
  constructor(private router: Router,protected apiService: ApiService) {
    
    this.resultList = []
  }
  
  otraPagina(repo:any){
    this.apiService.setDetail(repo);
    this.router.navigate(['/more-info']);
  }
  ngOnInit() {}

}
