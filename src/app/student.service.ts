import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //We have to import HttpClient here to use it.
import { Observable } from 'rxjs'; //And Obseravble.

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //Having this constructor declaring an instance of HttpClient is necessary.
  //We use this instance to access all the HTTP methods.
  constructor(private hc: HttpClient) { }


  //The : designates that this function returns an Observable.
  GetStudentData():Observable<any> {
    //Returns a type "Observable" containing all the data at the URL below.

    //Observables work Asynchronously - Meaning the other parts of the webpage can load while the
    //httpClient fetches data.
    return this.hc.get('https://www.jsonblob.com/api/jsonblob/1084766645704212480');
  }
}

