import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebapiCallFactoryService {

  constructor(private http: HttpClient) { }

  public get(url: string, params?: any[]): Observable<any> {
    return this.http.get(url)
      .pipe(
        map((res) => res),
        catchError((error: Response) => throwError(this.errorHandler(error))));
  }

  errorHandler(error: any) {
    console.log(error);
  }
}
