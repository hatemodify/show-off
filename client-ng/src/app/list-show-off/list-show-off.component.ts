import { Component, OnInit, Pipe } from "@angular/core";
import { arr } from "../constants";
import { EllipsisPipe } from "../pipes/ellipsis.pipe";

import { from } from "rxjs";
@Component({
  selector: "app-list-show-off",
  templateUrl: "./list-show-off.component.html",
  styleUrls: ["./list-show-off.component.scss"]
})
export class ListShowOffComponent implements OnInit {
  list: [] = arr;
  date: Date = new Date();

  constructor() {}

  ngOnInit() {}
}
