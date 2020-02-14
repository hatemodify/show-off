import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShowOffComponent } from "./pages/show-off/show-off.component";
import { RegistShowoffComponent } from "./pages/regist-showoff/regist-showoff.component";
import { DetailShowoffComponent } from "./pages/detail-showoff/detail-showoff.component";
const routes: Routes = [
  {
    path: "",
    component: ShowOffComponent
  },
  {
    path: "regist",
    component: RegistShowoffComponent
  },
  {
    path: "detail/:id",
    component: DetailShowoffComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
