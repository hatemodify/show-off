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
import { getRelatedApi } from "../api";

@Injectable({
  providedIn: "root"
})
export class GetService {
  constructor(private http: HttpClient) {}

  getList(url: string): Observable<[]> {
    return this.http.get<[]>(url).pipe();
  }
  getDetail(url: string): Observable<Object> {
    return this.http.get<any>(url).pipe();
  }
  getRelatedItem(name: string): Observable<[]> {
    return this.http.get<[]>(getRelatedApi(name)).pipe();
  }
}
