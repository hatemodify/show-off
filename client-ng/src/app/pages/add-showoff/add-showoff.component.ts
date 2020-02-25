import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-add-showoff",
  templateUrl: "./add-showoff.component.html",
  styleUrls: ["./add-showoff.component.scss"]
})
export class AddShowoffComponent implements OnInit {
  form: FormGroup;
  imgSrc: any;
  itemList: Array<any> = [];
  pointer: Object = {};
  constructor() {}

  ngOnInit() {}
  addItems(e) {
    const x = e.offsetX - 10;
    const y = e.offsetY - 10;

    this.pointer = { x, y };
  }
  onFileChange(files: FileList) {
    if (files && files.length > 0) {
      // For Preview
      const file = files[0];
      const reader = new FileReader();

      /* 브라우저는 보안 문제로 인해 파일 경로의 참조를 허용하지 않는다.
        따라서 파일 경로를 img 태그에 바인딩할 수 없다.
        FileReader.readAsDataURL 메소드를 사용하여 이미지 파일을 읽어
        base64 인코딩된 스트링 데이터를 취득한 후, img 태그에 바인딩한다. */
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgSrc = reader.result;
      };

      /* reactive form에서 input[type="file"]을 지원하지 않는다.
        즉 파일 선택 시에 값이 폼컨트롤에 set되지 않는다
        https://github.com/angular/angular.io/issues/3466
        form validation을 위해 file.name을 폼컨트롤에 set한다. */
      // this.avatar.setValue(file.name);
    }
  }
  regItem(info: Object) {
    console.log(info, "asdasdasd");
  }
}
