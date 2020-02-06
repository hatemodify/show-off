import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { test } from "../../models/test";
import { GetService } from "../../service/get.service";
import axios from "axios";

@Component({
  selector: "app-showoff",
  templateUrl: "./showoff.component.html",
  styleUrls: ["./showoff.component.scss"]
})
export class ShowoffComponent implements OnInit {
  arr: Observable<test[]>;
  private url = "https://my-json-server.typicode.com/hatemodify/testApi/posts";
  constructor(private get: GetService) {}

  ngOnInit() {
    axios.get(this.url).then(res => {
      console.log(res);
    });
  }
  getArr(): void {
    this.getArr();
  }
}
