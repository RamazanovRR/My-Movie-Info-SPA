import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentFilmsComponent } from './content-films/content-films.component';
import { DetailsFilmComponent } from './details-film/details-film.component';
import { SearchFilmComponent } from './search-film/search-film.component';

const routes: Routes = [
  { path: "content", component: ContentFilmsComponent },
  { path: '', redirectTo: '/content', pathMatch: 'full' },
  { path: `film/:id`, component: DetailsFilmComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
