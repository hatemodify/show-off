import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "ellipsis"
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, limit: number): any {
    return value.substr(0, limit) + "...";
  }
}
