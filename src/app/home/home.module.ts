import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { GithubSearchComponent } from '../github-search/github-search.component';
import { GithubSearchResultsComponent } from '../github-search-results/github-search-results.component';
import { HttpClientModule} from '@angular/common/http';
import {ApiService} from '../api.service'

@NgModule({providers:[ApiService],
  imports: [HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,GithubSearchComponent,GithubSearchResultsComponent]
})
export class HomePageModule {}
