import { Component, OnInit } from '@angular/core';
import { JokeserviceService } from '../../../services/data-access/jokeservice.service';
import { JokeResponseModel } from '../../../components/models/joke-response.model';
import { CacheService } from '../../../services/caching/cache.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private jokeService: JokeserviceService, private cacheService: CacheService) { }

  jokes: JokeResponseModel;
  ngOnInit() {
    this.getIntialJokes();
  }

  getIntialJokes(): void {
    this.jokeService.getJokes('10').subscribe((data) => {
      this.jokes = data.value;
    });
  }

  addAsFavourite(index: number): void {
    this.cacheService.storeDataInLocalStorage(this.jokes[index]);
  }

}
