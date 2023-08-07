import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(private httpClient: HttpClient) {
    
  }

  getQuizConfigOptions() : Observable<any>{
    const url = 'https://opentdb.com/api_category.php';
    return this.httpClient.get(url);
  }
}
