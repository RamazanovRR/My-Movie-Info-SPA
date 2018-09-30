import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ContentFilmsComponent } from './content-films/content-films.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DetailsFilmComponent } from './details-film/details-film.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchFilmComponent } from './search-film/search-film.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentFilmsComponent,
    DetailsFilmComponent,
    SearchFilmComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
