import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public URL:string;
  constructor(protected http: HttpClient) { 
    this.URL="https://api.github.com/search/repositories?q=";
  }

  getRepos(query: string){
    return this.http.get(`${this.URL}${query}`);
  }
  
}
