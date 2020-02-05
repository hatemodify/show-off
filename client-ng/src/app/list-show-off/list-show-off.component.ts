import { Component, OnInit } from "@angular/core";
import { arr } from "../constants";

@Component({
  selector: "app-list-show-off",
  templateUrl: "./list-show-off.component.html",
  styleUrls: ["./list-show-off.component.scss"]
})
export class ListShowOffComponent implements OnInit {
  list: [] = arr;
  constructor() {}

  ngOnInit() {}
}
