import { Component, OnInit } from '@angular/core';
import { InfoFilmsToWebApiService } from '../info-films-to-web-api.service';
import { Subscription } from 'rxjs'
import { DetailsFilm } from '../detailsFilm';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.css']
})
export class DetailsFilmComponent implements OnInit {

  detailsFilm: DetailsFilm;
  subscription: Subscription;


  constructor(
    private route: ActivatedRoute,
    private infoFilmsToWebApiService: InfoFilmsToWebApiService,
    private location: Location,
    ) { }

  ngOnInit() {
    this.getDetailFilm();
  }

  getDetailFilm() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subscription = this.infoFilmsToWebApiService.getDetailFilm(id).subscribe(
      result => {this.detailsFilm = result
      })
  }

  back() {
    this.location.back();
  }

}
