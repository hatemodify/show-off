import { Component, OnInit, ViewChild } from "@angular/core";
import { GetService } from "../../service/get.service";
import { getDetailApi } from "../../api";
import { ActivatedRoute } from "@angular/router";
import { ThumbItemComponent } from 'src/app/components/detail/thumb-item/thumb-item.component';

@Component({
  selector: "app-detail-showoff",
  templateUrl: "./detail-showoff.component.html",
  styleUrls: ["./detail-showoff.component.scss"]
})
export class DetailShowoffComponent implements OnInit {
  

  id: string;
  detailInfo: {};
  detailApi: any;
  constructor(private getDetail: GetService, private route: ActivatedRoute) {}



  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      return (this.id = params.get("id"));
    });

    this.getShowoffDetail(getDetailApi(this.id));
  }
  getShowoffDetail(url) {
    this.getDetail
      .getDetail(url)
      .subscribe(detail => (this.detailInfo = detail , console.log(this.detailInfo)));
  }
}
