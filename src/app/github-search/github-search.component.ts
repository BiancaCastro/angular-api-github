import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss'],
})
export class GithubSearchComponent implements OnInit {

  public name:string;
  @Output() propiedad_pasar= new EventEmitter;

  constructor() { 
    this.name="";
  }

  ngOnInit() {
  }
  
  enviar(){
    this.propiedad_pasar.emit({name:this.name});
  }     
}
