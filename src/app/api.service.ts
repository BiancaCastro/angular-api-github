import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public URL:string;
  public detail;
  constructor(protected http: HttpClient) { 
    console.log('Me instancio');
    this.URL="https://api.github.com/search/repositories?q=";
  }

  getRepos(query: string){
    return this.http.get(`${this.URL}${query}`);
  }
  
  getDetail(){
    console.log(this.detail)
    return this.detail;
  }

  setDetail(detail){
    this.detail=detail;
    console.log(this.detail);
  }
}
