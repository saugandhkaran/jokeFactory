import { Component, OnInit } from '@angular/core';
import { JokeserviceService } from '../../../services/data-access/jokeservice.service';
import { JokeResponseModel } from '../../../components/models/joke-response.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private jokeService: JokeserviceService) { }

  jokes: JokeResponseModel;
  ngOnInit() {
    this.getIntialJokes();
  }

  getIntialJokes(): void {
    this.jokeService.getJokes('10').subscribe((data) => {
      this.jokes = data.value;
    });
  }

}
