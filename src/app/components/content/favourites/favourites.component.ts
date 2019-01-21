import { Component, OnInit } from '@angular/core';

import { CacheService } from '../../../services/caching/cache.service';
import { JokeResponseModel } from '../../../components/models/joke-response.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  constructor(private cacheService: CacheService) { }
  favourites: JokeResponseModel[];
  ngOnInit() {
    this.getFavouriteJokes();
  }

  removeFromFavourite(index) {
    this.cacheService.removeDataFromLocalStorage(this.favourites[index]);
    this.getFavouriteJokes();
  }

  getFavouriteJokes() {
    this.favourites = this.cacheService.getDataFromLocalStorage();
  }
}
