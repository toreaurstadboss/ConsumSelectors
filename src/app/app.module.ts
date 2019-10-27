import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EnumselectioncontrolsModule } from "enumselectioncontrols";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    EnumselectioncontrolsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
