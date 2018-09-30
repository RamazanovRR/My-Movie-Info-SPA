import { Component, OnInit } from '@angular/core';
import { Subject,Subscription } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { InfoFilmsToWebApiService } from '../info-films-to-web-api.service';
import { InfoContentWebApi } from '../infoContentWebApi';


@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})
export class SearchFilmComponent implements OnInit {

  subscription: Subscription;
  contentSearch: InfoContentWebApi;
  private searchTerms = new Subject<string>();

  constructor(private infoFilmsToWebApiService: InfoFilmsToWebApiService) { }

  search(term: string): void {
    this.searchTerms.next(term);
    console.log(term);
  }

  ngOnInit(): void {
      this.subscription = this.searchTerms.pipe(
        debounceTime(100),
        distinctUntilChanged(),
        switchMap((term: string) => this.infoFilmsToWebApiService.getSearchFilm(term))
      ).subscribe(result => {this.contentSearch = result;});
  }

  clear() {
    this.contentSearch = null;
    
  }
}
