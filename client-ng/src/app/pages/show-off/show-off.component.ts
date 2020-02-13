import { Component, OnInit } from "@angular/core";
import { GetService } from "../../service/get.service";

@Component({
  selector: "app-show-off",
  templateUrl: "./show-off.component.html",
  styleUrls: ["./show-off.component.scss"]
})
export class ShowOffComponent implements OnInit {
  date: Date = new Date();
  url: string =
    "https://my-json-server.typicode.com/hatemodify/testApi/showoff";
  showOffList: [];

  constructor(private getList: GetService) {}

  ngOnInit() {
    this.getShowOffList();
  }
  getShowOffList() {
    this.getList.getApi(this.url).subscribe(item => (this.showOffList = item));
  }
}
