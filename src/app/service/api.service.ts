import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUri:string = 'https://besttraveldestination.letstalkandcode.com/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
   
  constructor(private http: HttpClient) { }

  // Get all Countries
  getAllCountries() {
    return this.http.get(`${this.baseUri}`);
  }

 // Get the best Countries
 getCountries(params): Observable<any> {
  let url = `${this.baseUri}/find/?${params}`;
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: Response) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

