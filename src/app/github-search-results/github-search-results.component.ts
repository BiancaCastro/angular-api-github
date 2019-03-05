import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-search-results',
  templateUrl: './github-search-results.component.html',
  styleUrls: ['./github-search-results.component.scss'],
})
export class GithubSearchResultsComponent implements OnInit {

 
@Input() resultList: Array<Object>;
  constructor(private router: Router) {
    
    this.resultList = []
  }
  ngOnInit() {}

  otraPagina(repo){
    this.router.navigate(['/more-info',repo]);
  }
}
