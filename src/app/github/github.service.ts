import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
/**
 * Accesses the GitHub v3 API to return information on users and repos.
 */
export class GithubService {

  private BASE_URL: string = 'https://api.github.com/users/scottblechman';

  constructor(private http: HttpClient) { }

  /** GET details of a single user */
  public getUser(): Observable<User> {
    return this.http.get<User>(this.BASE_URL)
      .pipe(
        catchError(this.handleError<User>('getUser', null))
      );
  }

/**
 * Gracefully handles errors and continues operation.
 * @param operation - name of the operation that failed
 * @param result - value to return as HTTP result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);

    return of(result as T);
  };
}
}
