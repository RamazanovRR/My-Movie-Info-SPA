import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoContentWebApi } from './infoContentWebApi';
import { DetailsFilm } from './detailsFilm';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoFilmsToWebApiService {

  public pageContent: number = 1;
  public idFilm;

  public apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=59de621f8a89ed8c9fa93a1cc035fe80&language=ru-RU&page=";
  public apiDetailFilmUrlPart1 = "https://api.themoviedb.org/3/movie/";
  public apiDetailFilmUrlPart2 = "?api_key=59de621f8a89ed8c9fa93a1cc035fe80&language=ru-RU";
  public apiSearchPart1 = "https://api.themoviedb.org/3/search/movie?api_key=59de621f8a89ed8c9fa93a1cc035fe80&language=ru-Ru&query=";
  public apiSearchPart2 = "&page=1&include_adult=false"
  public infoContentWebApi: Observable<InfoContentWebApi>;
  public infoSearchContentWebApi: Observable<InfoContentWebApi>;
  public detailsFilm: Observable<DetailsFilm>;


  constructor(private http: HttpClient) { 
    this.infoContentWebApi = this.http.get(this.apiUrl + this.pageContent).
    pipe(map((infoContentWebApi: InfoContentWebApi) => infoContentWebApi));
   }


  getInfoContent() {
    return this.infoContentWebApi;
  }

  getNewInfoContent(page: number) {
    this.pageContent = page;
    this.infoContentWebApi = this.http.get(this.apiUrl + this.pageContent).
    pipe(map((infoContentWebApi: InfoContentWebApi) => infoContentWebApi));
    console.log("testServ");
    return this.infoContentWebApi;
  }

  getDetailFilm(id:number) {
    this.idFilm = id;
    this.detailsFilm = this.http.get(this.apiDetailFilmUrlPart1 + this.idFilm + this.apiDetailFilmUrlPart2)
    .pipe(map((detailsFilm: DetailsFilm) => detailsFilm));
    return this.detailsFilm;
  }

  getSearchFilm(query: string): Observable<InfoContentWebApi> {
    console.log("data server")
    if (!query.trim()) {
      console.log("null")
      return this.http.get<InfoContentWebApi>(this.apiSearchPart1 + " " + this.apiSearchPart2).
      pipe(map((infoContentWebApi: InfoContentWebApi) => infoContentWebApi));;
    } 
    return this.http.get<InfoContentWebApi>(this.apiSearchPart1 + query + this.apiSearchPart2).
    pipe(map((infoContentWebApi: InfoContentWebApi) => infoContentWebApi));
  }
}

