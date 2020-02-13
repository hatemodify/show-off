import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GetService {
  constructor(private http: HttpClient) {}

  getApi(url: string): Observable<[]> {
    return this.http.get<[]>(url).pipe();
  }
}
