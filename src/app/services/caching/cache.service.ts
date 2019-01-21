import { Injectable } from '@angular/core';
import { JokeResponseModel } from '../../components/models/joke-response.model';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  storeDataInLocalStorage(data: JokeResponseModel): boolean {
    let a = this.getDataFromLocalStorage();
    if (a === null) {
      a = [];
    }
    if (a.length < 11) {
      a.push(data);
      this.setDataInLocalStorage(a);
      return true;
    } else {
      return false;
    }
  }

  removeDataFromLocalStorage(data: JokeResponseModel): boolean {
    const a = this.getDataFromLocalStorage();
    const filteredArray = a.filter((value) => {
      return value.id !== data.id;
    });
    this.setDataInLocalStorage(filteredArray);
    return true;
  }

  getDataFromLocalStorage(): JokeResponseModel[] {
    let a = [];
    a = JSON.parse(localStorage.getItem('jwtToken'));
    return a;
  }

  private setDataInLocalStorage(data: JokeResponseModel[]): void {
    localStorage.setItem('jwtToken', JSON.stringify(data));
  }

}
