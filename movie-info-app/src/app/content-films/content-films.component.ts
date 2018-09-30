import { Component, OnInit } from '@angular/core';
import { InfoFilmsToWebApiService } from '../info-films-to-web-api.service';
import { InfoContentWebApi } from '../infoContentWebApi';
import { Subscription } from 'rxjs'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-films',
  templateUrl: './content-films.component.html',
  styleUrls: ['./content-films.component.css']
})
export class ContentFilmsComponent implements OnInit {

  content: InfoContentWebApi;
  subscription: Subscription;
  page: number;
  collectionSize: number;

  constructor( private infoFilmsToWebApiService: InfoFilmsToWebApiService) {
    this.page = 1;
   }

  ngOnInit() {
    this.getContent();
  
  }

  getContent(): void{
    this.subscription = this.infoFilmsToWebApiService.getInfoContent().subscribe(result => {this.content = result,
      this.collectionSize = result.total_results;});
  
  }

  getNewContent(page: number): void{
    this.subscription = this.infoFilmsToWebApiService.getNewInfoContent(page).subscribe(result => {this.content = result;});
  }

  onPageChanged(pageNumber) {
    this.subscription = this.infoFilmsToWebApiService.getNewInfoContent(pageNumber).subscribe(result => {this.content = result;});
  }

  
  

}
