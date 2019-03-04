import { Component, OnInit, Input} from '@angular/core';
@Component({
  selector: 'app-github-search-results',
  templateUrl: './github-search-results.component.html',
  styleUrls: ['./github-search-results.component.scss'],
})
export class GithubSearchResultsComponent implements OnInit {

 
@Input() resultList: Array<Object>;
  constructor() {
    
    this.resultList = []
  }
  ngOnInit() {}

  change(){
    console.log("entra")
  }
}
