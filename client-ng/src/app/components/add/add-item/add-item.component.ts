import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from "@angular/animations";

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.scss"],
  animations: [
    trigger("showHide", [
      // ...
      state(
        "show",
        style({
          opacity: 1,
          transform: "translateY(0)",
          zIndex: 1
        })
      ),
      state(
        "hide",
        style({
          opacity: 0,
          transform: "translateY(30%)",
          zIndex: -1
        })
      )
    ])
  ]
})
export class AddItemComponent implements OnInit {
  @Input() item: Object;
  @Output() itemInfo = new EventEmitter();
  form: FormGroup = new FormGroup({
    itemName: new FormControl("", Validators.minLength(1)),
    itemUrl: new FormControl("http://")
  });

  constructor() {}

  ngOnInit() {}
  registItemInfo(e) {
    console.log(this.form.value);
    this.itemInfo.emit(this.form.value);
  }
}
