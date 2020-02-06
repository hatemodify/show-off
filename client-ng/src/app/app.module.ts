import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListShowOffComponent } from "./list-show-off/list-show-off.component";
import { ShowoffComponent } from "./modules/showoff/showoff.component";
import { EllipsisPipe } from "./pipes";
@NgModule({
  declarations: [
    AppComponent,
    ListShowOffComponent,
    EllipsisPipe,
    ShowoffComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
