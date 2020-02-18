import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { EllipsisPipe } from "./pipes";
import { RoutingModule } from "./routing.module";
import { ShowOffComponent } from "./pages/show-off/show-off.component";
import { RegistShowoffComponent } from "./pages/regist-showoff/regist-showoff.component";
import { DetailShowoffComponent } from "./pages/detail-showoff/detail-showoff.component";
import { ThumbItemComponent } from "./components/detail/thumb-item/thumb-item.component";
import { InfoItemComponent } from "./components/detail/info-item/info-item.component";

@NgModule({
  declarations: [
    AppComponent,
    EllipsisPipe,
    ShowOffComponent,
    RegistShowoffComponent,
    DetailShowoffComponent,
    ThumbItemComponent,
    InfoItemComponent
  ],
  imports: [BrowserModule, HttpClientModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
