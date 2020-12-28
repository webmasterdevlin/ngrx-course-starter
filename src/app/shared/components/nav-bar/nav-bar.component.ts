import { Component, OnInit } from "@angular/core";
import { untilDestroyed } from "ngx-take-until-destroy";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  totalHeroes = 0;
  totalVillains = 0;
  constructor() {}

  ngOnInit(): void {
    this.getStore();
  }

  // this is needed in untilDestroyed
  ngOnDestroy(): void {}

  getStore() {

  }
}
