import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IApplication } from '../model/application';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  constructor(private http: HttpClient) { }
  // get all contact data    
  getAll(url: string): Observable<IApplication[]> {
      return this.http.get<IApplication[]>(url).pipe(catchError(this.handleError));
  }
  // insert new contact details    
  create(url: string, application: IApplication): Observable<any> {
      return this.http.post(url, JSON.stringify(application), httpOptions).pipe(catchError(this.handleError));
  }
  // update contact details    
  update(url: string, clientId: string, application: IApplication): Observable<any> {
      const newurl = `${url}?clientId=${clientId}`;
      return this.http.put(newurl, application, httpOptions).pipe(catchError(this.handleError));
  }
  // delete contact information    
  delete(url: string, clientId: string): Observable<any> {
      const newurl = `${url}?clientId=${clientId}`; // DELETE api/contact?id=42    
      return this.http.delete(newurl, httpOptions).pipe(catchError(this.handleError));
  }
  // custom handler    
  private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.    
          console.error('An error occurred:', error.error.message);
      } else {
          // the backend returned an unsuccessful response code.    
          // the response body may contain clues as to what went wrong,    
          console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message    
      return throwError('Something bad happened; please try again later.');
  }
}  
