import { Component } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public info_search:string;
  public repos: any[] = [];
  constructor(protected apiService: ApiService){
    this.info_search = 'ironhack';
  }

  recibir_datos(event){
    this.info_search=event.name;
    this.doCallApi();
  }

  ngOnInit(){
    this.doCallApi();
  }

  doCallApi() {
    this.apiService.getRepos(this.info_search)
    .subscribe(
      (data) => { 
        this.repos = data['items'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
