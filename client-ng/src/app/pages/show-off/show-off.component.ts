import { Component, OnInit } from "@angular/core";
import { GetService } from "../../service/get.service";
import { getListApi } from "../../api";
@Component({
  selector: "app-show-off",
  templateUrl: "./show-off.component.html",
  styleUrls: ["./show-off.component.scss"]
})
export class ShowOffComponent implements OnInit {
  date: Date = new Date();
  url: string = getListApi;
  showOffList: [];

  constructor(private getList: GetService) {}

  ngOnInit() {
    this.getShowOffList();
  }
  getShowOffList() {
    this.getList.getList(this.url).subscribe(item => (this.showOffList = item));
  }
}
