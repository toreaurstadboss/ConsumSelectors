import { Component } from "@angular/core";
import { IceCream } from "./ice-cream";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ConsumEnumSelectors";
  IceCream = IceCream;
}
