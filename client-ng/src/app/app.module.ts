import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { EllipsisPipe } from "./pipes";
import { RoutingModule } from "./routing.module";
import { ShowOffComponent } from "./pages/show-off/show-off.component";
import { DetailShowoffComponent } from "./pages/detail-showoff/detail-showoff.component";
import { ThumbItemComponent } from "./components/detail/thumb-item/thumb-item.component";
import { InfoItemComponent } from "./components/detail/info-item/info-item.component";
import { AddShowoffComponent } from "./pages/add-showoff/add-showoff.component";
import { AddItemComponent } from "./components/add/add-item/add-item.component";

@NgModule({
  declarations: [
    AppComponent,
    EllipsisPipe,
    ShowOffComponent,
    DetailShowoffComponent,
    ThumbItemComponent,
    InfoItemComponent,
    AddShowoffComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
