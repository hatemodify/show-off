import { Component, OnInit, Input } from "@angular/core";
import { GetService } from "../../../service/get.service";
import { getRelatedApi } from "../../../api";

@Component({
  selector: "app-thumb-item",
  templateUrl: "./thumb-item.component.html",
  styleUrls: ["./thumb-item.component.scss"]
})
export class ThumbItemComponent implements OnInit {
  @Input() detail: Object;
  items: any;
  constructor(private getRealted: GetService) {}

  ngOnInit() {}
  coords() {
    const img = document.getElementById("thumbImg");

    img.addEventListener("mousemove", e => {
      console.log(e);
    });
  }
  getRelatedItems(name) {
    this.getRealted
      .getRelatedItem(name)
      .subscribe(data => ((this.items = data), console.log(this.items)));
  }
}
