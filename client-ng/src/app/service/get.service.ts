import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GetService {
  private url = "https://my-json-server.typicode.com/hatemodify/testApi/posts";
  option = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = "Unknown error!";
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  getArr(): Observable<any> {
    return this.http.get<any>(this.url).pipe(catchError(this.handleError));
  }
}
